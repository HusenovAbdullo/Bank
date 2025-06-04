<script setup lang="ts">
import _ from "lodash";
import { ref, provide, computed } from "vue";
import fakerData from "@/utils/faker";
import Button from "@/components/Base/Button";
import Pagination from "@/components/Base/Pagination";
import { FormInput, FormSelect } from "@/components/Base/Form";
import TinySlider, {
  type TinySliderElement,
} from "@/components/Base/TinySlider";
import Lucide from "@/components/Base/Lucide";
import Tippy from "@/components/Base/Tippy";
import Litepicker from "@/components/Base/Litepicker";
import ReportDonutChart from "@/components/ReportDonutChart";
import VerticalBarChart from "@/components/VerticalBarChart";
import ReportPieChart from "@/components/ReportPieChart";
import ReportDonutChart1 from "@/components/ReportDonutChart1";
import SimpleLineChart1 from "@/components/SimpleLineChart1";
import LeafletMap from "@/components/LeafletMap";
import { Menu } from "@/components/Base/Headless";
import Table from "@/components/Base/Table";
import { getColor } from "@/utils/colors";

import { useI18n } from "vue-i18n";
const { t } = useI18n();

const pieChartData = computed(() => [
  {
    label: t("in_sorting"),
    percent: parseFloat(stats.value.other_items.percent),
    color: getColor("primary", 0.9),
  },
  {
    label: t("completed"),
    percent: parseFloat(stats.value.on_way_items.percent),
    color: getColor("pending", 0.9),
  },
  {
    label: t("returned"),
    percent: parseFloat(stats.value.return.percent),
    color: getColor("warning", 0.9),
  },
]);



// Slider
const salesReportFilter = ref<string>("");
const importantNotesRef = ref<TinySliderElement>();
provide("bind[importantNotesRef]", (el: TinySliderElement) => {
  importantNotesRef.value = el;
});
const prevImportantNotes = () => importantNotesRef.value?.tns.goTo("prev");
const nextImportantNotes = () => importantNotesRef.value?.tns.goTo("next");

// Fayl yuklash
const fileInputRef = ref<HTMLInputElement | null>(null);
const triggerFileUpload = () => fileInputRef.value?.click();

// const handleFileChange = async (event: Event) => {
//   const target = event.target as HTMLInputElement;
//   const file = target.files?.[0];

//   if (file) {
//     console.log("Tanlangan fayl:", file.name);

//     try {
//       const xmlContent = await file.text(); // XML fayl ichidagi matnni o‘qish
//       console.log("XML mazmuni:", xmlContent);

//       const token = localStorage.getItem("token");

//       if (!token) {
//         alert("Token topilmadi. Iltimos, qayta kiring.");
//         return;
//       }

//       const response = await fetch("https://treking.uz/mail-items/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/xml",
//           "Authorization": "Bearer " + token,
//         },
//         body: xmlContent,
//       });

//       if (response.ok) {
//         console.log("XML muvaffaqiyatli yuborildi.");
//         alert("Fayl muvaffaqiyatli yuborildi.");
//       } else {
//         const errorText = await response.text();
//         console.error("Serverdan xatolik:", errorText);
//         alert("Xatolik yuz berdi: " + response.status + "\n" + errorText);
//       }
//     } catch (error) {
//       console.error("Yuborishda istisno:", error);
//       alert("XML yuborishda xatolik yuz berdi.");
//     }
//   }
// };

// Kalendar
const today = new Date();
const currentMonth = ref(today.getMonth());
const currentYear = ref(today.getFullYear());
const monthNames = [
  "Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun",
  "Iyul", "Avgust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"
];
const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
const firstDayOfMonth = computed(() => new Date(currentYear.value, currentMonth.value, 1).getDay());

const daysArray = computed(() => {
  const totalDays = getDaysInMonth(currentYear.value, currentMonth.value);
  const days = [];
  const startDay = (firstDayOfMonth.value + 6) % 7;

  for (let i = 0; i < startDay; i++) {
    days.push(null);
  }
  for (let d = 1; d <= totalDays; d++) {
    days.push(d);
  }
  return days;
});

const prevMonth = () => {
  if (currentMonth.value === 0) {
    currentMonth.value = 11;
    currentYear.value -= 1;
  } else {
    currentMonth.value -= 1;
  }
};
const nextMonth = () => {
  if (currentMonth.value === 11) {
    currentMonth.value = 0;
    currentYear.value += 1;
  } else {
    currentMonth.value += 1;
  }
};


import { ref, onMounted } from "vue";

const stats = ref({
  total_items: { count: 0, percent: "0%" },
  other_items: { count: 0, percent: "0%" },
  on_way_items: { count: 0, percent: "0%" },
  return: { count: 0, percent: "0%" }
});

const fetchStatsData = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    alert("Token topilmadi. Iltimos, qayta kiring.");
    window.location.href = "/login"; // login sahifangiz yo‘li shu bo‘lsa
    return;
  }

  try {
    const response = await fetch("https://ftp.treking.uz/api/v1/dashboard-status/", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    if (response.status === 401) {
      alert("Token muddati tugagan. Iltimos, qayta login qiling.");
      localStorage.removeItem("token");
      window.location.href = "/login"; // foydalanuvchini login sahifasiga yo‘naltirish
      return;
    }

    if (response.ok) {
      const data = await response.json();
      stats.value = data;
    } else {
      console.error("API xatolik:", response.status);
    }
  } catch (error) {
    console.error("Tarmoq xatoligi:", error);
  }
};


onMounted(() => {
  fetchStatsData();
});

</script>


<template>
  <div class="grid grid-cols-12 gap-6">
    <div class="col-span-12 2xl:col-span-9">
      <div class="grid grid-cols-12 gap-6">
        <!-- BEGIN: General Report -->
        <!-- BEGIN: General Report -->
        <div class="col-span-12 mt-8">
          <div class="flex items-center h-10 intro-y">
            <h2 class="mr-5 text-lg font-medium truncate">{{ $t('general_report') }}</h2>
            <button @click="fetchStatsData" class="flex items-center ml-auto text-primary">
              <Lucide icon="RefreshCcw" class="w-4 h-4 mr-3" /> {{ $t('reload_data') }}
            </button>
          </div>
          <div class="grid grid-cols-12 gap-6 mt-5">
            <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y" v-for="(item, key) in [
              { label: $t('all'), icon: 'UsersIcon', data: stats.total_items },
              { label: $t('in_sorting'), icon: 'UserPlusIcon', data: stats.other_items },
              { label: $t('completed'), icon: 'UserCheckIcon', data: stats.on_way_items },
              { label: $t('returned'), icon: 'UserXIcon', data: stats.return }
            ]" :key="key">

              <div
                class="relative zoom-in before:box before:absolute before:inset-x-3 before:mt-3 before:h-full before:bg-slate-50 before:content-['']">
                <div class="p-5 box">
                  <div class="flex">
                    <Lucide :icon="item.icon" class="w-[28px] h-[28px] text-primary" />
                    <div class="ml-auto">
                      <Tippy as="div"
                        class="cursor-pointer bg-success py-[3px] flex rounded-full text-white text-xs pl-2 pr-1 items-center font-medium"
                        :content="item.data.percent + ' o‘zgarish'">
                        {{ item.data.percent }}
                        <Lucide icon="ChevronUp" class="w-4 h-4 ml-0.5" />
                      </Tippy>
                    </div>
                  </div>
                  <div class="mt-6 text-3xl font-medium leading-8">{{ item.data.count }}</div>
                  <div class="mt-1 text-base text-slate-500">{{ item.label }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- END: General Report -->

        <!-- END: General Report -->
        <!-- BEGIN: Sales Report -->
        <div class="col-span-12 mt-8 lg:col-span-9">
          <div class="items-center block h-10 intro-y sm:flex">
            <h2 class="mr-5 text-lg font-medium truncate">{{ $t('monthly_report') }}</h2>
            <!-- <div class="relative mt-3 sm:ml-auto sm:mt-0 text-slate-500">
              <Lucide icon="Calendar" class="absolute inset-y-0 left-0 z-10 w-4 h-4 my-auto ml-3" />
              <Litepicker v-model="salesReportFilter" :options="{
                autoApply: false,
                singleMode: false,
                numberOfColumns: 2,
                numberOfMonths: 2,
                showWeekNumbers: true,
                dropdowns: {
                  minYear: 1990,
                  maxYear: null,
                  months: true,
                  years: true,
                },
              }" class="pl-10 sm:w-56 !box" />
            </div> -->
          </div>
          <div class="p-5 mt-12 intro-y box sm:mt-5">
            <!-- <div class="flex flex-col md:flex-row md:items-center">
              <div class="flex">
                <div>
                  <div class="text-lg font-medium text-primary dark:text-slate-300 xl:text-xl">
                    $15,000
                  </div>
                  <div class="mt-0.5 text-slate-500">This Month</div>
                </div>
                <div
                  class="w-px h-12 mx-4 border border-r border-dashed border-slate-200 dark:border-darkmode-300 xl:mx-5">
                </div>
                <div>
                  <div class="text-lg font-medium text-slate-500 xl:text-xl">
                    $10,000
                  </div>
                  <div class="mt-0.5 text-slate-500">Last Month</div>
                </div>
              </div>
              <Menu class="mt-5 md:ml-auto md:mt-0">
                <Menu.Button :as="Button" variant="outline-secondary" class="font-normal">
                  Filter by Category
                  <Lucide icon="ChevronDown" class="w-4 h-4 ml-2" />
                </Menu.Button>
                <Menu.Items class="w-40 h-32 overflow-y-auto">
                  <Menu.Item>PC & Laptop</Menu.Item>
                  <Menu.Item>Smartphone</Menu.Item>
                  <Menu.Item>Electronic</Menu.Item>
                  <Menu.Item>Photography</Menu.Item>
                  <Menu.Item>Sport</Menu.Item>
                </Menu.Items>
              </Menu>
            </div> -->
            <div :class="[
              'relative',
              'before:content-[\'\'] before:block before:absolute before:w-16 before:left-0 before:top-0 before:bottom-0 before:ml-10 before:mb-7 before:bg-gradient-to-r before:from-white before:via-white/80 before:to-transparent before:dark:from-darkmode-600',
              'after:content-[\'\'] after:block after:absolute after:w-16 after:right-0 after:top-0 after:bottom-0 after:mb-7 after:bg-gradient-to-l after:from-white after:via-white/80 after:to-transparent after:dark:from-darkmode-600',
            ]">
              <VerticalBarChart :height="400" />
            </div>
          </div>
        </div>
        <!-- END: Sales Report -->
        <!-- BEGIN: Weekly Top Seller -->
        <div class="col-span-12 mt-8 sm:col-span-6 lg:col-span-3">
          <div class="flex items-center h-10 intro-y">
            <h2 class="mr-5 text-lg font-medium truncate">{{ $t('report') }}</h2>
            <a href="" class="ml-auto truncate text-primary"> {{ $t('refresh') }} </a>
          </div>
          <div class="p-5 mt-5 intro-y box">
            <div class="mt-3">
              <ReportPieChart :height="213" :data="pieChartData" />
            </div>
            <div class="mx-auto mt-8 w-52 sm:w-auto">
              <div v-for="(item, index) in pieChartData" :key="index" class="flex items-center mt-4"
                :class="{ 'mt-0': index === 0 }">
                <div class="w-2 h-2 mr-3 rounded-full" :class="item.color"></div>
                <span class="truncate">{{ item.label }}</span>
                <span class="ml-auto font-medium">{{ item.percent }}</span>
              </div>
            </div>
          </div>

        </div>
        <!-- END: Weekly Top Seller -->

        <!-- BEGIN: Transactions -->
        <!-- <div class="col-span-12 mt-8 sm:col-span-6 lg:col-span-3">
          <div class="flex items-center h-10 intro-x">
            <h2 class="mr-5 text-lg font-medium truncate">Transactions</h2>
          </div>
          <div class="mt-5">
            <div v-for="(faker, fakerKey) in _.take(fakerData, 5)" :key="fakerKey" class="intro-x">
              <div class="flex items-center px-5 py-3 mb-3 box zoom-in">
                <div class="flex-none w-10 h-10 overflow-hidden rounded-full image-fit">
                  <img alt="Midone Tailwind HTML Admin Template" :src="faker.photos[0]" />
                </div>
                <div class="ml-4 mr-auto">
                  <div class="font-medium">{{ faker.users[0].name }}</div>
                  <div class="text-slate-500 text-xs mt-0.5">
                    {{ faker.dates[0] }}
                  </div>
                </div>
                <div :class="{
                  'text-success': faker.trueFalse[0],
                  'text-danger': !faker.trueFalse[0],
                }">
                  {{ faker.trueFalse[0] ? "+" : "-" }}${{ faker.totals[0] }}
                </div>
              </div>
            </div>
            <a href=""
              class="block w-full py-3 text-center border border-dotted rounded-md intro-x border-slate-400 dark:border-darkmode-300 text-slate-500">
              View More
            </a>
          </div>
        </div> -->
        <!-- END: Transactions -->







        <!-- END: Weekly Top Products -->
      </div>
    </div>
    <div class="col-span-12 2xl:col-span-3">
      <div class="pb-10 -mb-10 2xl:border-l">
        <div class="grid grid-cols-12 2xl:pl-6 gap-x-6 2xl:gap-x-0 gap-y-6">

          <div
            class="col-span-12 mt-3 md:col-span-6 xl:col-span-4 2xl:col-span-12 xl:col-start-1 xl:row-start-2 2xl:col-start-auto 2xl:row-start-auto">
            <div class="flex items-center h-10 intro-x">
              <h2 class="mr-5 text-lg font-medium truncate">{{ $t('calendar') }}</h2>
              <!-- <a href="" class="flex items-center ml-auto truncate text-primary">
                <Lucide icon="Plus" class="w-4 h-4 mr-1" /> Add New Schedules
              </a> -->
            </div>
            <div class="mt-5">
              <div class="intro-x box mt-5">
                <div class="p-5">
                  <div class="flex items-center justify-between">
                    <button @click="prevMonth">
                      <Lucide icon="ChevronLeft" class="w-5 h-5 text-slate-500" />
                    </button>
                    <div class="text-base font-medium">
                      {{ monthNames[currentMonth] }} {{ currentYear }}
                    </div>
                    <button @click="nextMonth">
                      <Lucide icon="ChevronRight" class="w-5 h-5 text-slate-500" />
                    </button>
                  </div>
                  <div class="grid grid-cols-7 gap-4 mt-5 text-center">
                    <div class="font-medium">Du</div>
                    <div class="font-medium">Se</div>
                    <div class="font-medium">Cho</div>
                    <div class="font-medium">Pa</div>
                    <div class="font-medium">Ju</div>
                    <div class="font-medium">Sha</div>
                    <div class="font-medium">Ya</div>

                    <div v-for="(day, index) in daysArray" :key="index" class="py-0.5 rounded relative" :class="{
                      'text-slate-400': day === null,
                      'bg-primary text-white': day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear(),
                    }">
                      {{ day ?? '' }}
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <br>
            <div class="p-10 box intro-x">
              <h2 class="text-xl font-bold mb-4">{{ $t('xml_upload') }}</h2>

              <!-- Fayl tanlash tugmasi -->
              <Button variant="primary" class="mb-4" @click="triggerFileUpload">
                <Lucide icon="Upload" class="w-4 h-4 mr-2" /> {{ $t('upload_file') }}
              </Button>

              <!-- Fayl input (ko‘rinmaydi) -->

              <p class="text-slate-500 mt-2">
                {{ $t('xml_description') }}
              </p>
            </div>

          </div>
          <!-- END: Schedules -->
        </div>
      </div>
    </div>
  </div>
</template>
