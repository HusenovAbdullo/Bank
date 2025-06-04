<script setup lang="ts">
import "@/assets/css/vendors/tabulator.css";
import Lucide from "@/components/Base/Lucide";
import Button from "@/components/Base/Button";
import { FormInput } from "@/components/Base/Form";
import { ref, onMounted, reactive, watch } from "vue";
import { createIcons, icons } from "lucide";
import { TabulatorFull as Tabulator } from "tabulator-tables";
import * as xlsx from "xlsx";

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const tableRef = ref<HTMLDivElement>();
const tabulator = ref<Tabulator>();
const pageSize = ref(10);

const filter = reactive({ field: "batch", type: "like", value: "" });

const initTabulator = async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    alert("Token topilmadi. Iltimos, tizimga kiring.");
    return;
  }

  if (tableRef.value) {
    tabulator.value = new Tabulator(tableRef.value, {
      ajaxURL: "https://treking.uz/batch-stats/",
      ajaxConfig: {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
      ajaxResponse: (_, __, response) => response, // API array qaytaradi
      layout: "fitColumns",
      pagination: true,
      paginationSize: pageSize.value,
      paginationMode: "local", // Local pagination
      placeholder: "No matching records found",
      columns: [
      { title: "BATCH", field: "batch", hozAlign: "center" },
      { title: t("small_packages_count"), field: "rz_count", hozAlign: "center" },
      { title: t("parcels_count"), field: "cz_count", hozAlign: "center" },
      { title: t("small_packages_weight"), field: "rz_weight_sum", hozAlign: "center" },
      { title: t("parcels_weight"), field: "cz_weight_sum", hozAlign: "center" },
    ],
    });

    tabulator.value.on("renderComplete", () => {
      createIcons({ icons, attrs: { "stroke-width": 1.5 }, nameAttr: "data-lucide" });
    });
  }
};

const onFilter = () => tabulator.value?.setFilter(filter.field, filter.type, filter.value);

const onResetFilter = () => {
  Object.assign(filter, { field: "batch", type: "like", value: "" });
  onFilter();
};

const onExportCsv = () => tabulator.value?.download("csv", "batch-stats.csv");
const onExportJson = () => tabulator.value?.download("json", "batch-stats.json");
const onExportXlsx = () => {
  (window as any).XLSX = xlsx;
  tabulator.value?.download("xlsx", "batch-stats.xlsx", { sheetName: "Batch Stats" });
};
const onExportHtml = () => tabulator.value?.download("html", "batch-stats.html", { style: true });
const onPrint = () => tabulator.value?.print();

watch(pageSize, () => {
  tabulator.value?.setPageSize(pageSize.value);
});

onMounted(() => {
  initTabulator();
  window.addEventListener("resize", () => tabulator.value?.redraw());
});
</script>

<template>
  <div class="intro-y box p-5 mt-5">
    <div class="flex items-center justify-between">
      <h2 class="text-lg font-medium">{{ $t('statistics') }}</h2>
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

      <!-- Sahifa o'lchami tanlash select -->
      <select v-model="pageSize" class="form-select ml-auto w-20">
        <option v-for="size in [10, 20, 50, 100]" :key="size" :value="size">{{ size }}</option>
      </select>
    </div>

    <div class="overflow-x-auto scrollbar-hidden mt-5">
      <div ref="tableRef"></div>
    </div>
  </div>
</template>
