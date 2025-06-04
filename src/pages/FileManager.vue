<script setup lang="ts">
import { ref, onMounted } from "vue"
import axios from "axios"
import Button from "@/components/Base/Button"
import Lucide from "@/components/Base/Lucide"
import { Menu } from "@/components/Base/Headless"
import Table from "@/components/Base/Table"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet.markercluster"
import { saveAs } from "file-saver"
import jsPDF from "jspdf"
import autoTable from "jspdf-autotable"
import { Document, Packer, Paragraph, Table as DocxTable, TableRow, TableCell, TextRun } from "docx"

const locations = ref<{ city: string; count: number; lat: number; lng: number }[]>([])
const isFullscreen = ref(false)
let map: L.Map

const token = localStorage.getItem("token")
const apiUrl = "https://treking.uz/api/city-barcode-count/"

const cityCoords: Record<string, { lat: number; lng: number }> = {
  Buxoro: { lat: 39.7681, lng: 64.4550 },
  Navoiy: { lat: 40.0844, lng: 65.3792 },
  Olot: { lat: 39.4117, lng: 63.8027 },
  Toshkent: { lat: 41.2995, lng: 69.2401 },
  tashkent: { lat: 41.2995, lng: 69.2401 }
}

onMounted(async () => {
  const res = await axios.get(apiUrl, {
    headers: { Authorization: `Bearer ${token}` }
  })

  const result: typeof locations.value = []

  for (const item of res.data) {
    const name = item.city
    const count = item.barcode_count

    let coords = cityCoords[name]
    if (!coords) {
      coords = await fetchCoords(name)
      if (coords) cityCoords[name] = coords
    }

    if (coords) {
      result.push({ city: name, count, lat: coords.lat, lng: coords.lng })
    }
  }

  locations.value = result
  initMap()
})

function initMap() {
  map = L.map("map").setView([41.3, 69.2], 6)

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map)

  const markers = L.markerClusterGroup({
    iconCreateFunction(cluster) {
      return L.divIcon({
        html: `<div style="width:45px;height:45px;background:#f97316;border:3px solid #facc15;border-radius:50%;display:flex;justify-content:center;align-items:center;color:white;font-weight:bold;font-size:14px;">${cluster.getChildCount()}</div>`,
        className: '',
        iconSize: [45, 45]
      })
    }
  })

  locations.value.forEach((loc) => {
    const customIcon = L.divIcon({
      html: `<div style="width:40px;height:40px;background:#f97316;border:3px solid #facc15;border-radius:50%;display:flex;justify-content:center;align-items:center;color:white;font-weight:bold;font-size:16px;">${loc.count}</div>`,
      className: '',
      iconSize: [40, 40],
      iconAnchor: [20, 20]
    })

    const marker = L.marker([loc.lat, loc.lng], { icon: customIcon })
      .bindPopup(`<strong>${loc.city}</strong><br>Soni: ${loc.count}`)
    markers.addLayer(marker)
  })

  map.addLayer(markers)
}

function toggleFullscreen() {
  const container = document.getElementById("map-container")
  if (!container) return

  if (!document.fullscreenElement) {
    container.requestFullscreen().then(() => {
      setTimeout(() => {
        map.invalidateSize()
      }, 500)
    })
  } else {
    document.exitFullscreen().then(() => {
      setTimeout(() => {
        map.invalidateSize()
      }, 500)
    })
  }
}



function exportToPDF() {
  const doc = new jsPDF()
  doc.text("Viloyatlar bo'yicha barcode statistikasi", 14, 10)
  autoTable(doc, {
    startY: 20,
    head: [["Viloyat", "Barcode soni"]],
    body: locations.value.map(loc => [loc.city, loc.count.toString()])
  })
  doc.save("barcode-statistika.pdf")
}

async function exportToWord() {
  const rows = locations.value.map(loc =>
    new TableRow({
      children: [
        new TableCell({ children: [new Paragraph(loc.city)] }),
        new TableCell({ children: [new Paragraph(loc.count.toString())] })
      ]
    })
  )

  const doc = new Document({
    sections: [{
      children: [
        new Paragraph({
          children: [new TextRun("Viloyatlar bo'yicha barcode statistikasi")],
          spacing: { after: 300 }
        }),
        new DocxTable({
          rows: [
            new TableRow({
              children: [
                new TableCell({ children: [new Paragraph("Viloyat")] }),
                new TableCell({ children: [new Paragraph("Barcode soni")] })
              ]
            }),
            ...rows
          ]
        })
      ]
    }]
  })

  const blob = await Packer.toBlob(doc)
  saveAs(blob, "barcode-statistika.docx")
}

async function fetchCoords(city: string): Promise<{ lat: number, lng: number } | null> {
  try {
    const res = await axios.get("https://nominatim.openstreetmap.org/search", {
      params: {
        q: `${city}, Uzbekistan`,
        format: "json",
        limit: 1
      }
    })
    if (res.data.length > 0) {
      const { lat, lon } = res.data[0]
      return { lat: parseFloat(lat), lng: parseFloat(lon) }
    }
  } catch (err) {
    console.error("Koordinata topilmadi:", city, err)
  }
  return null
}
</script>


<template>
  <div class="flex flex-col items-center mt-8 intro-y sm:flex-row">
    <h2 class="mr-auto text-lg font-medium">{{ $t('map') }}</h2>
    <div class="flex w-full mt-4 sm:w-auto sm:mt-0">
      <Menu class="ml-auto sm:ml-0">
        <Menu.Button :as="Button" class="px-2 !box">
          <span class="flex items-center justify-center w-5 h-5">
            <Lucide icon="DownloadIcon" class="w-4 h-4" />
          </span>
        </Menu.Button>
        <Menu.Items class="w-40">
          <Menu.Item @click="exportToWord">
            <Lucide icon="File" class="w-4 h-4 mr-2" /> {{ $t('export_word') }}
          </Menu.Item>
          <Menu.Item @click="exportToPDF">
            <Lucide icon="File" class="w-4 h-4 mr-2" /> {{ $t('export_pdf') }}
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  </div>

  <div class="mt-5 overflow-hidden intro-y box">
    <div id="map-container" class="relative w-full h-[500px]">
      <button @click="toggleFullscreen"
        class="absolute top-3 right-3 z-[1000] bg-orange-500 text-white px-3 py-1 rounded-md shadow">
        {{ isFullscreen ? $t('close') : $t('size') }}
      </button>
      <div id="map"></div>
    </div>



    <div class="px-5 py-10 sm:px-16 sm:py-20">
      <div class="overflow-x-auto">
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th class="border-b-2 dark:border-darkmode-400">{{ $t('region') }}</Table.Th>
              <Table.Th class="text-right border-b-2 dark:border-darkmode-400">{{ $t('barcode_count') }}</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            <Table.Tr v-for="(loc, i) in locations" :key="i">
              <Table.Td class="border-b dark:border-darkmode-400">{{ loc.city }}</Table.Td>
              <Table.Td class="text-right border-b dark:border-darkmode-400">{{ loc.count }}</Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table>
      </div>
    </div>
  </div>
</template>
<style scoped>
.fullscreen-map {
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw !important;
  height: 100vh !important;
  z-index: 9999;
  background: white;
  border-radius: 0 !important;
}

#map {
  width: 100%;
  height: 100%;
}

:fullscreen #map {
  height: 100vh !important;
}

:fullscreen {
  background-color: white;
}
</style>
