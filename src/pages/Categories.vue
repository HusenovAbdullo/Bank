<script setup lang="ts">
import "@/assets/css/vendors/tabulator.css";
import Lucide from "@/components/Base/Lucide";
import Button from "@/components/Base/Button";
import { FormInput } from "@/components/Base/Form";
import axios from 'axios';
import { ref, onMounted, reactive, watch } from "vue";
import { createIcons, icons } from "lucide";
import { TabulatorFull as Tabulator } from "tabulator-tables";
import * as xlsx from "xlsx";
import { useI18n } from 'vue-i18n';
import { nextTick } from "vue";

const { t } = useI18n();

const tableRef = ref<HTMLDivElement>();
const tabulator = ref<Tabulator>();
const filter = reactive({ barcode: "" });
const pageSize = ref(10);
const showCameraModal = ref(false);
let currentRowData: any = null;
let videoStream: MediaStream | null = null;

const errorMessage = ref("");
const showErrorPopup = ref(false);
const showPopupError = (message: string) => {
  errorMessage.value = message;
  showErrorPopup.value = true;
  setTimeout(() => showErrorPopup.value = false, 3000);
};

const showCheckedModal = ref(false);
const checkedInfo = reactive({
  name: "",
  time: "",
  image: ""
});

const showCheckedInfo = (row: any) => {
  checkedInfo.name = row.checked_name || "Noma'lum";
  checkedInfo.time = row.checked_time ? new Date(row.checked_time).toLocaleString() : "Noma'lum";

  if (row.checked_image) {
    // Agar to‘liq URL bo‘lmasa, boshiga domen qo‘shamiz
    checkedInfo.image = row.checked_image.startsWith("http")
      ? row.checked_image
      : `https://bank1.pochta.uz${row.checked_image}`;
  } else {
    checkedInfo.image = "";
  }

  showCheckedModal.value = true;
};


const closeCheckedModal = () => {
  showCheckedModal.value = false;
};


const successMessage = ref("");
const showSuccessPopup = ref(false);
const showPopupSuccess = (message: string) => {
  successMessage.value = message;
  showSuccessPopup.value = true;
  setTimeout(() => showSuccessPopup.value = false, 3000);
};

const takingPhoto = ref(false);

const openCameraModal = async (rowData: any) => {
  
  currentRowData = rowData;
  showCameraModal.value = true;
  await nextTick();
  try {
    const video = document.getElementById("cameraPreview") as HTMLVideoElement;
    videoStream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = videoStream;
  } catch (err) {
    showPopupError("Kamera ochilmadi: " + (err as Error).message);
    console.error("Kamera xatosi:", err);
  }
};

const closeCameraModal = () => {
  const video = document.getElementById("cameraPreview") as HTMLVideoElement;
  if (videoStream) videoStream.getTracks().forEach(track => track.stop());
  video.srcObject = null;
  showCameraModal.value = false;
  currentRowData = null;
  takingPhoto.value = false;
};

const takePhoto = async () => {
  if (takingPhoto.value) return;
  takingPhoto.value = true;

  const video = document.getElementById("cameraPreview") as HTMLVideoElement;
  const canvas = document.createElement("canvas");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  const ctx = canvas.getContext("2d");
  ctx?.drawImage(video, 0, 0);

  const base64Image = canvas.toDataURL("image/jpeg");
  const token = localStorage.getItem("token");
  if (!token) {
    showPopupError("Token topilmadi.");
    takingPhoto.value = false;
    return;
  }

  try {
    const response = await axios.post("https://bank1.pochta.uz/api/v1/face-recognition/", {
      photo: base64Image,
    }, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.data?.token && response.data?.phone_number) {
      const { phone_number } = response.data;

      await axios.post("https://bank1.pochta.uz/api/v1/check-mail/", {
        id: currentRowData.id,
        phone_number,
        barcode: currentRowData.barcode,
        checked_image: base64Image
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });

      showPopupSuccess("Jo'natma tasdiqlandi!");
      tabulator.value?.setPage(1);
    } else {
      showPopupError("Jo'natma tasdiqlanmadi. Yuz aniqlanmadi.");
    }
  } catch (err: any) {
    console.error(err);

    if (err.response?.status === 400) {
      showPopupError("Jo'natma tasdiqlanmadi. Rasm noto‘g‘ri yoki aniqlanmadi.");
    } else {
      showPopupError("Xatolik yuz berdi! Bu jo'natma sizga tegishli emas");
    }
  } finally {
    closeCameraModal();
  }

};

const initTabulator = async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    showPopupError("Token topilmadi. Iltimos, tizimga kiring.");
    return;
  }

  if (tableRef.value) {
    tabulator.value = new Tabulator(tableRef.value, {
      ajaxURL: "https://bank1.pochta.uz/api/v1/mails-all/",
      ajaxConfig: {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      },
      ajaxResponse: (_, __, response) => {
        const phoneNumber = localStorage.getItem("phone");
        console.log(phoneNumber)
        let dataToShow: any[] = [];

        // API response tarkibi `results` ichida bo'lishi mumkin yoki bevosita massiv
        if (Array.isArray(response)) {
          dataToShow = response;
        } else if (Array.isArray(response.results)) {
          dataToShow = response.results;
        }

        // Faqat 123 uchun barcha, boshqalar uchun faqat is_check: false
        if (phoneNumber !== "123") {
          dataToShow = dataToShow.filter((item) => item.is_check === false);
        }

        return {
          data: dataToShow.map((item: any) => ({
            id: item.id,
            barcode: item.barcode,
            weight: item.weight,
            sent_date: item.send_date ? new Date(item.send_date).toLocaleDateString() : '-',
            received_date: item.received_date ? new Date(item.received_date).toLocaleDateString() : '-',
            last_event_date: item.last_event_date ? new Date(item.last_event_date).toLocaleDateString() : '-',
            city: item.city || '-',
            is_check: item.is_check,
            checked_name: item.checked_name,
            checked_time: item.checked_time,
            checked_image: item.checked_image,
          })),
          last_page: Math.ceil(dataToShow.length / pageSize.value),
        };
      },
      layout: "fitColumns",
      pagination: true,
      paginationSize: pageSize.value,
      paginationMode: "remote",
      placeholder: "No matching records found",
      columns: (() => {
        const phone = localStorage.getItem("phone");

        const commonColumns = [
          { title: t("barcode"), field: "barcode", hozAlign: "center" },
          { title: t("weight"), field: "weight", hozAlign: "center" },
          { title: t("sent_date"), field: "sent_date", hozAlign: "center" },
          { title: t("received_date"), field: "received_date", hozAlign: "center" },
          { title: t("last_event_date"), field: "last_event_date", hozAlign: "center" },
          { title: t("city"), field: "city", hozAlign: "center" },
        ];

        if (phone === "123") {
          return [
            ...commonColumns,
            {
              title: "Holati",
              field: "is_check",
              hozAlign: "center",
              formatter: (cell: any) => {
                const row = cell.getData();
                if (row.is_check) {
                  return `<button class='checked-info-btn bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-4 rounded-full text-xs'>Tasdiqlangan</button>`;
                } else {
                  return "<span class='text-red-600 font-semibold'>Tasdiqlanmagan</span>";
                }
              },
              cellClick: (e, cell) => {
                const rowData = cell.getData() as any;
                if (rowData.is_check) {
                  showCheckedInfo(rowData);
                  console.log(rowData)
                }
              }
            },
          ];
        } else {
          return [
            ...commonColumns,
            {
              title: t("approve"),
              formatter: () =>
                `<button class='approve-btn bg-blue-800 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full text-xs'>${t("approve")}</button>`,
              width: 130,
              hozAlign: "center",
              cellClick: async function (e, cell) {
                const rowData = cell.getData();
                await openCameraModal(rowData);
              },
            },
          ];
        }
      })(),
      ajaxURLGenerator: (url, config, params) => {
        const searchParams = new URLSearchParams();
        searchParams.set("page", params.page);
        searchParams.set("page_size", pageSize.value.toString());
        if (filter.barcode) searchParams.set("barcode", filter.barcode);
        return `${url}?${searchParams.toString()}`;
      },
    });

    tabulator.value.on("renderComplete", () => {
      createIcons({ icons, attrs: { "stroke-width": 1.5 }, nameAttr: "data-lucide" });
    });
  }
};

const isMobile = ref(false);

onMounted(() => {
  isMobile.value = window.innerWidth < 800;
  window.addEventListener("resize", () => {
    isMobile.value = window.innerWidth < 800;
    if (!isMobile.value && !tabulator.value) {
      initTabulator();
    }
  });

  if (!isMobile.value) {
    initTabulator();
  }
});


const onFilter = () => tabulator.value?.setPage(1);
const onResetFilter = () => { filter.barcode = ""; tabulator.value?.setPage(1); };
const changePageSize = () => tabulator.value?.setPageSize(pageSize.value);
onMounted(() => { initTabulator(); window.addEventListener("resize", () => tabulator.value?.redraw()); });
watch(pageSize, () => changePageSize());

const onExportCsv = () => tabulator.value?.download("csv", "data.csv");
const onExportJson = () => tabulator.value?.download("json", "data.json");
const onExportXlsx = () => { (window as any).XLSX = xlsx; tabulator.value?.download("xlsx", "data.xlsx", { sheetName: "Data" }); };
const onExportHtml = () => tabulator.value?.download("html", "data.html", { style: true });
const onPrint = () => tabulator.value?.print();
</script>


<template>
  <div v-if="!isMobile">
    <div class="intro-y box p-5 mt-5">
      <div class="flex items-center justify-between">
        <h2 class="text-lg font-medium">{{ $t('statuses_statistics') }}</h2>
      </div>

      <div class="mt-5 flex gap-2 flex-wrap items-center">
        <FormInput v-model="filter.barcode" style="width: 250px;" :placeholder="$t('search_barcode')" />
        <Button @click="onFilter">{{ $t('go') }}</Button>
        <Button variant="secondary" @click="onResetFilter">{{ $t('reset') }}</Button>
        <Button variant="outline-secondary" @click="onPrint">
          <Lucide icon="Printer" class="w-4 h-4 mr-2" /> Print
        </Button>
        <Button variant="outline-secondary" @click="onExportCsv">CSV</Button>
        <Button variant="outline-secondary" @click="onExportJson">JSON</Button>
        <Button variant="outline-secondary" @click="onExportXlsx">XLSX</Button>
        <Button variant="outline-secondary" @click="onExportHtml">HTML</Button>

        <select v-model="pageSize" class="form-select ml-auto w-20">
          <option v-for="size in [10, 20, 50, 100]" :key="size" :value="size">{{ size }}</option>
        </select>
      </div>

      <div class="overflow-x-auto scrollbar-hidden mt-5">
        <div ref="tableRef"></div>
      </div>
    </div>
  </div>

  <!-- Agar mobil bo‘lsa, ogohlantirish matni chiqadi -->
  <div v-else class="text-center mt-20 text-red-600 font-semibold text-lg">
    Jadval faqat katta ekranlarda mavjud. Iltimos, kompyuterdan foydalaning.
  </div>

  <!-- Kamera Modal -->
  <div v-if="showCameraModal" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
    <div class="bg-white p-4 rounded shadow-lg relative">
      <video id="cameraPreview" autoplay playsinline class="mb-4 w-80 h-60 bg-gray-200 rounded"></video>
      <div class="flex justify-between">
        <button @click="takePhoto" :disabled="takingPhoto" class="bg-green-600 text-white px-4 py-2 rounded mr-2">
          Rasmga olish
        </button>
        <button @click="closeCameraModal" class="bg-gray-400 text-white px-4 py-2 rounded">Bekor qilish</button>
      </div>
    </div>
  </div>

  <!-- Success Popup -->
  <div v-if="showSuccessPopup"
    class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-600 text-white px-6 py-3 rounded shadow-lg z-[100]">
    {{ successMessage }}
  </div>

  <!-- Error Popup -->
  <div v-if="showErrorPopup"
    class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white px-6 py-3 rounded shadow-lg z-[100]">
    {{ errorMessage }}
  </div>

  <!-- Checked Info Modal -->
  <div v-if="showCheckedModal" class="fixed inset-0 z-[100] bg-black bg-opacity-60 flex items-center justify-center">
    <div class="bg-white rounded-lg shadow-xl p-6 w-[90%] max-w-md relative">
      <button @click="closeCheckedModal"
        class="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl">&times;</button>
      <h3 class="text-lg font-semibold text-green-700 mb-4">Tasdiqlovchi ma'lumotlari</h3>
      <p><strong>F.I.Sh:</strong> {{ checkedInfo.name }}</p>
      <p><strong>Vaqti:</strong> {{ checkedInfo.time }}</p>
      <div v-if="checkedInfo.image" class="mt-4">
        <img :src="checkedInfo.image" alt="Tasdiqlangan rasm"
          class="rounded shadow border w-full object-cover max-h-60" />
      </div>
      <div v-else class="mt-4 text-gray-500 italic">Rasm mavjud emas</div>
    </div>
  </div>
</template>
