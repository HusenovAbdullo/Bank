<template>
  <div class="intro-y box p-5 mt-5">
    <div class="flex items-center justify-between">
      <h2 class="text-lg font-medium">{{ $t('batch_statistics') }}</h2>
    </div>

    <div class="mt-5 flex gap-2 flex-wrap items-center">
      <FormInput v-model="filter.value" style="width: 250px;" :placeholder="$t('search_batch')" />
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

const tableRef = ref<HTMLDivElement>();
const tabulator = ref<Tabulator>();
const pageSize = ref(10);

const filter = reactive({
  field: "batch",
  type: "like",
  value: "",
});

const initTabulator = async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    alert("Token topilmadi. Iltimos, tizimga kiring.");
    return;
  }

  try {
    const response = await axios.get("https://treking.uz/batch-statistics/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const rawData = response.data.batch_statistics;

    const data = Object.entries(rawData).map(([batchNo, details]: any) => {
      const statuses = details.status_counts;
      return {
        batch: batchNo,
        total: details.total_count,
        on_way: statuses["On way"] || statuses["On Way"] || 0,
        exchange_office: statuses["Arrived at office of exchange"] || 0,
        send_customs: statuses["sent_to_customs"] || statuses["Send to customs"] || 0,
        return_customs: statuses["Return from customs"] || 0,
        domestic_location: statuses["Send to domestic location"] || 0,
        delivery_office: statuses["Receive at delivery office"] || 0,
        ready_delivery: statuses["Ready for Delivery"] || 0,
        out_delivery: statuses["out_for_delivery"] || statuses["Out for delivery"] || 0,
        deliver_item: statuses["Deliver item"] || 0,
      };
    });

    if (tableRef.value) {
      tabulator.value = new Tabulator(tableRef.value, {
        data,
        layout: "fitColumns",
        pagination: true,
        paginationSize: pageSize.value,
        paginationMode: "local",
        placeholder: "No matching records found",
        columns: [
          { title: "BATCH NO.", field: "batch", hozAlign: "center" },
          { title: "TOTAL", field: "total", hozAlign: "center" },
          { title: "On way", field: "on_way", hozAlign: "center" },
          { title: "Arrived at office of exchange", field: "exchange_office", hozAlign: "center" },
          { title: "Send to customs", field: "send_customs", hozAlign: "center" },
          { title: "Return from customs", field: "return_customs", hozAlign: "center" },
          { title: "Send to domestic location", field: "domestic_location", hozAlign: "center" },
          { title: "Receive at delivery office", field: "delivery_office", hozAlign: "center" },
          { title: "Ready for Delivery", field: "ready_delivery", hozAlign: "center" },
          { title: "Out for delivery", field: "out_delivery", hozAlign: "center" },
          { title: "Deliver item", field: "deliver_item", hozAlign: "center" },
        ],
      });

      tabulator.value.on("renderComplete", () => {
        createIcons({ icons, attrs: { "stroke-width": 1.5 }, nameAttr: "data-lucide" });
      });
    }
  } catch (error) {
    console.error("API dan ma'lumot olishda xatolik:", error);
    alert("Ma'lumot yuklab bo'lmadi. Token noto'g'ri yoki muddati o'tgan bo'lishi mumkin.");
  }
};

const onFilter = () => tabulator.value?.setFilter(filter.field, filter.type, filter.value);

const onResetFilter = () => {
  Object.assign(filter, { field: "batch", type: "like", value: "" });
  onFilter();
};

const onExportCsv = () => tabulator.value?.download("csv", "data.csv");
const onExportJson = () => tabulator.value?.download("json", "data.json");
const onExportXlsx = () => {
  (window as any).XLSX = xlsx;
  tabulator.value?.download("xlsx", "data.xlsx", { sheetName: "Data" });
};
const onExportHtml = () => tabulator.value?.download("html", "data.html", { style: true });
const onPrint = () => tabulator.value?.print();

watch(pageSize, () => {
  tabulator.value?.setPageSize(pageSize.value);
});

onMounted(() => {
  initTabulator();
  window.addEventListener("resize", () => tabulator.value?.redraw());
});
</script>
