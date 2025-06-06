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

const { t } = useI18n();

const tableRef = ref<HTMLDivElement>();
const tabulator = ref<Tabulator>();
const filter = reactive({
  barcode: ""
});
const pageSize = ref(10);

const initTabulator = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    alert("Token topilmadi. Iltimos, tizimga kiring.");
    return;
  }

  if (tableRef.value) {
    tabulator.value = new Tabulator(tableRef.value, {
      ajaxURL: "https://ftp.treking.uz/api/v1/mails-all/",
      ajaxConfig: {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
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
          formatter: () => `
            <div>
              <button class="bg-blue-800 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full text-xs">
                ${t("approve")}
              </button>
            </div>
          `,
          width: 130,
          hozAlign: "center",
          cellClick: async function (e, cell) {
            const rowData = cell.getData();
            console.log("Tasdiqlash bosildi:", rowData);

            // Misol uchun APIga yuborish:
            try {
              const res = await axios.post("https://ftp.treking.uz/api/v1/mails-confirm/", {
                id: rowData.id
              }, {
                headers: { Authorization: `Bearer ${token}` }
              });
              alert("Tasdiqlandi!");
              tabulator.value?.setPage(tabulator.value?.getPage() || 1);
            } catch (err) {
              alert("Xatolik yuz berdi!");
              console.error(err);
            }
          }
        }
      ],
      ajaxURLGenerator: function (url, config, params) {
        const searchParams = new URLSearchParams();
        searchParams.set("page", params.page);
        searchParams.set("page_size", pageSize.value.toString());
        if (filter.barcode) {
          searchParams.set("barcode", filter.barcode);
        }
        return `${url}?${searchParams.toString()}`;
      },
    });

    tabulator.value.on("renderComplete", () => {
      createIcons({ icons, attrs: { "stroke-width": 1.5 }, nameAttr: "data-lucide" });
    });
  }
};

const onFilter = () => {
  tabulator.value?.setPage(1);
};

const onResetFilter = () => {
  filter.barcode = "";
  tabulator.value?.setPage(1);
};


const changePageSize = () => tabulator.value?.setPageSize(pageSize.value);

onMounted(() => {
  initTabulator();
  window.addEventListener("resize", () => tabulator.value?.redraw());
});

watch(pageSize, () => changePageSize());

const onExportCsv = () => tabulator.value?.download("csv", "data.csv");
const onExportJson = () => tabulator.value?.download("json", "data.json");
const onExportXlsx = () => {
  (window as any).XLSX = xlsx;
  tabulator.value?.download("xlsx", "data.xlsx", { sheetName: "Data" });
};
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
</template>
