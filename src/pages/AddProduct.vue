<script setup lang="ts">
// <script setup lang="ts">
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

// Xatolik popup'lari uchun
const errorMessage = ref("");
const showErrorPopup = ref(false);
const showPopupError = (message: string) => {
  errorMessage.value = message;
  showErrorPopup.value = true;
  setTimeout(() => showErrorPopup.value = false, 3000);
};

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
  if (videoStream) videoStream.getTracks().forEach((track) => track.stop());
  video.srcObject = null;
  showCameraModal.value = false;
  currentRowData = null;
};

const takePhoto = async () => {
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
    return;
  }

  try {
    const response = await axios.post("https://ftp.treking.uz/api/v1/face-recognition/", {
      photo: base64Image,
    }, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.data?.success) {
      await axios.post("https://ftp.treking.uz/api/v1/mails-confirm/", {
        id: currentRowData.id,
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      tabulator.value?.deleteRow(currentRowData.id);
    } else {
      showPopupError("Tasdiqlanmadi!");
    }
  } catch (err) {
    console.error(err);
    showPopupError("Xatolik yuz berdi!");
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
      ajaxURL: "https://ftp.treking.uz/api/v1/mails-all/",
      ajaxConfig: {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      },
      ajaxResponse: (_, __, response) => {
        const filteredData = response.results.filter((item: any) => item.is_check === false);
        return {
          data: filteredData.map((item: any) => ({
            id: item.id,
            barcode: item.barcode,
            weight: item.weight,
            sent_date: item.send_date ? new Date(item.send_date).toLocaleDateString() : '-',
            received_date: item.received_date ? new Date(item.received_date).toLocaleDateString() : '-',
            last_event_date: item.last_event_date ? new Date(item.last_event_date).toLocaleDateString() : '-',
            city: item.city || '-',
          })),
          last_page: Math.ceil(filteredData.length / pageSize.value),
        };
      },
      layout: "fitColumns",
      pagination: true,
      paginationSize: pageSize.value,
      paginationMode: "remote",
      placeholder: "No matching records found",
      columns: [
        { title: t("barcode"), field: "barcode", hozAlign: "center" },
        { title: t("weight"), field: "weight", hozAlign: "center" },
        { title: t("sent_date"), field: "sent_date", hozAlign: "center" },
        { title: t("received_date"), field: "received_date", hozAlign: "center" },
        { title: t("last_event_date"), field: "last_event_date", hozAlign: "center" },
        { title: t("city"), field: "city", hozAlign: "center" },
        {
          title: t("approve"),
          formatter: () => `<button class='approve-btn bg-blue-800 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full text-xs'>${t("approve")}</button>`,
          width: 130,
          hozAlign: "center",
          cellClick: async function (e, cell) {
            const rowData = cell.getData();
            await openCameraModal(rowData);
          },
        },
      ],
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

  <div v-if="showCameraModal" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
    <div class="bg-white p-4 rounded shadow-lg relative">
      <video id="cameraPreview" autoplay playsinline class="mb-4 w-80 h-60 bg-gray-200 rounded"></video>

      <div class="flex justify-between">
        <button @click="takePhoto" class="bg-green-600 text-white px-4 py-2 rounded mr-2">Rasmga olish</button>
        <button @click="closeCameraModal" class="bg-gray-400 text-white px-4 py-2 rounded">Bekor qilish</button>
      </div>
    </div>
  </div>
  <!-- Error Popup -->
<div
  v-if="showErrorPopup"
  class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white px-6 py-3 rounded shadow-lg z-[100]"
>
  {{ errorMessage }}
</div>

</template>