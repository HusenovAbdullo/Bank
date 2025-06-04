<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import axios from "axios";
import { type ChartData, type ChartOptions } from "chart.js/auto";
import { useColorSchemeStore } from "@/stores/color-scheme";
import { useDarkModeStore } from "@/stores/dark-mode";
import Chart from "@/components/Base/Chart";
import { getColor } from "@/utils/colors";

const props = defineProps<{
  width?: number;
  height?: number;
}>();

const colorScheme = computed(() => useColorSchemeStore().colorScheme);
const darkMode = computed(() => useDarkModeStore().darkMode);

const labels = ref<string[]>([]);
const counts = ref<number[]>([]);

onMounted(async () => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.get("https://ftp.treking.uz/api/v1/dashboard-months/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Oylar tartibda chiqishi uchun
    const monthOrder = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    const sorted = [...response.data].sort((a, b) => {
      return monthOrder.indexOf(a.month) - monthOrder.indexOf(b.month);
    });

    labels.value = sorted.map(item => item.month);
    counts.value = sorted.map(item => item.count);
  } catch (error) {
    console.error("API dan ma'lumot olishda xatolik:", error);
  }
});

const data = computed<ChartData>(() => {
  return {
    labels: labels.value,
    datasets: [
      {
        label: "Received Count",
        barPercentage: 0.5,
        barThickness: 6,
        maxBarThickness: 8,
        minBarLength: 2,
        data: counts.value,
        backgroundColor: colorScheme.value ? getColor("primary") : "",
      },
    ],
  };
});

const options = computed<ChartOptions>(() => {
  return {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: getColor("slate.500", 0.8),
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 12,
          },
          color: getColor("slate.500", 0.8),
        },
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
      y: {
        ticks: {
          font: {
            size: 12,
          },
          color: getColor("slate.500", 0.8),
          callback: function (value) {
            return "" + value;
          },
        },
        grid: {
          color: () =>
            darkMode.value ? getColor("slate.500", 0.3) : getColor("slate.300"),
        },
        border: {
          dash: [2, 2],
          display: false,
        },
      },
    },
  };
});
</script>

<template>
  <Chart type="bar" :width="props.width" :height="props.height" :data="data" :options="options" />
</template>
