<script setup lang="ts">
import { computed } from "vue";
import { type ChartData, type ChartOptions } from "chart.js/auto";
import { useColorSchemeStore } from "@/stores/color-scheme";
import { useDarkModeStore } from "@/stores/dark-mode";
import Chart from "@/components/Base/Chart";
import { getColor } from "@/utils/colors";

// ✅ Qabul qilinadigan props
const props = defineProps<{
  width?: number;
  height?: number;
  data: { label: string; percent: number; color: string }[];
}>();

const colorScheme = computed(() => useColorSchemeStore().colorScheme);
const darkMode = computed(() => useDarkModeStore().darkMode);

// ✅ Yangi chartData computed orqali tayyorlanadi
const chartData = computed(() => {
  return {
    labels: props.data.map((d) => d.label),
    datasets: [
      {
        data: props.data.map((d) => d.percent),
        backgroundColor: colorScheme.value
          ? props.data.map((d) => d.color)
          : "",
        hoverBackgroundColor: colorScheme.value
          ? props.data.map((d) => d.color)
          : "",
        borderWidth: 5,
        borderColor: darkMode.value
          ? getColor("darkmode.700")
          : getColor("white"),
      },
    ],
  };
});

const options = computed<ChartOptions>(() => {
  return {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };
});
</script>

<template>
  <Chart
    type="pie"
    :width="props.width"
    :height="props.height"
    :data="chartData"
    :options="options"
  />
</template>
