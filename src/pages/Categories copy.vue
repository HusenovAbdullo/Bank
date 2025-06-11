<template>
  <div class="p-5 relative">
    <!-- Loader -->
    <Loading :active="loading" loader="ball-triangle" color="#1e40af" :is-full-page="true" />

    <!-- Custom loading text -->
    <div v-if="loading"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 text-white text-xl font-semibold">
      <div class="text-center">
        Yuklanmoqda<span class="dots"><span>.</span><span>.</span><span>.</span></span>
      </div>
    </div>

    <!-- Modal (rasmni kattalashtirish) -->
    <div v-if="modalImage" class="fixed inset-0 z-[100] bg-black bg-opacity-80 flex items-center justify-center"
      @click.self="modalImage = ''">
      <img :src="modalImage" alt="Zoom Image" class="max-w-full max-h-full rounded shadow-lg" />
    </div>

    <h2 class="text-lg font-medium intro-y mb-5">{{ $t('proof_of_delivery') }}</h2>

    <!-- Qidiruv va tugmalar -->
    <div class="flex flex-wrap gap-2 items-center mb-6">
      <FormInput v-model="searchTerm" type="text" class="!box w-56" :placeholder="$t('search')" />
      <Button variant="primary" @click="fetchBarcodeInfo">{{ $t('go') }}</Button>
      <Button variant="secondary" @click="resetSearch">{{ $t('reset') }}</Button>
      <Button variant="outline-primary" @click="printTable">Print</Button>
      <Button variant="outline-primary" @click="exportToCSV">CSV</Button>
      <Button variant="outline-primary" @click="exportToJSON">JSON</Button>
      <Button variant="outline-primary" @click="exportToXLSX">XLSX</Button>
      <Button variant="outline-primary" @click="exportToHTML">HTML</Button>
    </div>

    <!-- Jadval -->
    <Table class="border-spacing-y-[10px] border-separate -mt-2">
      <Table.Thead>
        <Table.Tr>
          <Table.Th class="whitespace-nowrap"> {{ $t('images') }} </Table.Th>
          <Table.Th class="whitespace-nowrap"> {{ $t('name_barcode') }} </Table.Th>
          <Table.Th class="whitespace-nowrap"> {{ $t('address_time') }} </Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        <Table.Tr v-for="(item, index) in filteredResults" :key="index" class="intro-x">
          <Table.Td class="box dark:bg-darkmode-600 border-x-0">
            <div class="flex gap-3">
              <div class="image-fit zoom-in w-36 h-36">
                <img :src="item.recipient_signature_url" alt="Imzo" @click="modalImage = item.recipient_signature_url"
                  class="rounded shadow cursor-pointer hover:opacity-80 transition" />
              </div>
              <div class="image-fit zoom-in w-36 h-36">
                <img :src="item.recipient_card_url" alt="Karta" @click="modalImage = item.recipient_card_url"
                  class="rounded shadow cursor-pointer hover:opacity-80 transition" />
              </div>
            </div>
          </Table.Td>
          <Table.Td class="box dark:bg-darkmode-600 border-x-0">
            <a href="#" class="font-medium whitespace-nowrap">{{ item.name }}</a>
            <div class="text-slate-500 text-xs mt-0.5">Kod: {{ item.barcode }}</div>
          </Table.Td>
          <Table.Td class="box dark:bg-darkmode-600 border-x-0">
            <div class="whitespace-normal">{{ item.address }}</div>
            <div class="text-slate-500 text-xs mt-0.5">
              Holati: {{ new Date(item.last_status_date).toLocaleString() }}
            </div>
          </Table.Td>
        </Table.Tr>
      </Table.Tbody>
    </Table>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import axios from "axios";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";
import Button from "@/components/Base/Button";
import { FormInput } from "@/components/Base/Form";
import Table from "@/components/Base/Table";
import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";

const barcode = ref("");
const searchTerm = ref("");
const results = ref<any[]>([]);
const loading = ref(false);
const modalImage = ref("");

// Ma'lumot olish
const fetchBarcodeInfo = async () => {
  loading.value = true;
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Token mavjud emas. Iltimos, qayta login qiling.");
      window.location.href = "/login";
      return;
    }

    const res = await axios.post(
      "https://treking.uz/barcodes-info/",
      {
        barcodes: [barcode.value || searchTerm.value],
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      }
    );

    results.value = res.data;
  } catch (err) {
    console.error("Xatolik:", err);
    results.value = [];
    alert("Ma'lumot olishda xatolik yuz berdi.");
  } finally {
    loading.value = false;
  }
};

// Filtrlash
const filteredResults = computed(() => {
  if (!searchTerm.value.trim()) return results.value;
  return results.value.filter((item) =>
    item.barcode.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
    item.name.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
    item.address.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
});

// Reset
const resetSearch = () => {
  searchTerm.value = "";
  barcode.value = "";
  results.value = [];
};

// CSV eksport
const exportToCSV = () => {
  let csv = "Barcode,Name,Address,Date\n";
  results.value.forEach((item) => {
    csv += `"${item.barcode}","${item.name}","${item.address}","${item.last_status_date}"\n`;
  });
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  saveAs(blob, "barcodes.csv");
};

// JSON eksport
const exportToJSON = () => {
  const blob = new Blob([JSON.stringify(results.value, null, 2)], { type: "application/json" });
  saveAs(blob, "barcodes.json");
};

// HTML eksport
const exportToHTML = () => {
  let html = "<table border='1'><tr><th>Imzo</th><th>Karta</th><th>Barcode</th><th>Name</th><th>Address</th><th>Date</th></tr>";
  results.value.forEach((item) => {
    html += `
      <tr>
        <td><img src="${item.recipient_signature_url}" width="100" /></td>
        <td><img src="${item.recipient_card_url}" width="100" /></td>
        <td>${item.barcode}</td>
        <td>${item.name}</td>
        <td>${item.address}</td>
        <td>${item.last_status_date}</td>
      </tr>`;
  });
  html += "</table>";
  const blob = new Blob([html], { type: "text/html" });
  saveAs(blob, "barcodes.html");
};

// Chop etish
const printTable = () => {
  const win = window.open("", "", "width=900,height=700");
  win?.document.write("<html><head><title>Print</title></head><body>");
  win?.document.write("<h3>Barcode Ma'lumotlari</h3><table border='1' cellpadding='10'><tr><th>Imzo</th><th>Karta</th><th>Barcode</th><th>Name</th><th>Address</th><th>Date</th></tr>");
  results.value.forEach((item) => {
    win?.document.write(`
      <tr>
        <td><img src="${item.recipient_signature_url}" width="100"/></td>
        <td><img src="${item.recipient_card_url}" width="100"/></td>
        <td>${item.barcode}</td>
        <td>${item.name}</td>
        <td>${item.address}</td>
        <td>${item.last_status_date}</td>
      </tr>`);
  });
  win?.document.write("</table></body></html>");
  win?.document.close();
  win?.print();
};

// XLSX eksport
const exportToXLSX = () => {
  const simplifiedData = results.value.map((item) => ({
    Imzo: item.recipient_signature_url,
    Karta: item.recipient_card_url,
    Barcode: item.barcode,
    Name: item.name,
    Address: item.address,
    Date: item.last_status_date,
  }));

  const worksheet = XLSX.utils.json_to_sheet(simplifiedData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Barcodes");
  const xlsxBlob = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
  const blob = new Blob([xlsxBlob], { type: "application/octet-stream" });
  saveAs(blob, "barcodes.xlsx");
};
</script>

<style scoped>
.shadow {
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
}

.dots span {
  display: inline-block;
  animation: bounce 1s infinite;
}

.dots span:nth-child(1) {
  animation-delay: 0s;
}

.dots span:nth-child(2) {
  animation-delay: 0.2s;
}

.dots span:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes bounce {

  0%,
  80%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-8px);
  }
}
</style>
