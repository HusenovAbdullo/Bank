<template>
  <div>
    <Slideover :open="themeSwitcherSlideover" @close="() => setThemeSwitcherSlideover(false)">
      <Slideover.Panel>
        <a class="absolute inset-y-0 left-0 right-auto my-auto -ml-[35px] flex h-8 w-8 items-center justify-center rounded-full border border-white/90 bg-white/5 text-white/90 transition-all hover:rotate-180 hover:scale-105 hover:bg-white/10 focus:outline-none sm:-ml-[105px] sm:h-14 sm:w-14"
          @click="(event: MouseEvent) => { event.preventDefault(); setThemeSwitcherSlideover(false); }">
          <Lucide class="h-3 w-3 stroke-[1] sm:h-8 sm:w-8" icon="X" />
        </a>
        <Slideover.Description class="p-0">
          <div class="flex flex-col">
            <div class="border-b border-dashed"></div>
            <div class="px-8 pt-6 pb-8">
              <div class="text-base font-medium">{{ $t('colors') }}</div>
              <div class="mt-0.5 text-slate-500"></div>
              <div class="mt-5 grid grid-cols-2 gap-3.5">
                <div v-for="colorScheme in colorSchemes" :key="colorScheme">
                  <a @click="(event: MouseEvent) => { event.preventDefault(); switchColorScheme(colorScheme) }" 
                     :class="[
                       'h-14 cursor-pointer bg-slate-50 box p-1 border-slate-300/80 block',
                       '[&.active]:border-2 [&.active]:border-theme-1/60',
                       colorSchemeStore.colorSchemeValue == colorScheme ? 'active' : '',
                     ]">
                    <div class="h-full overflow-hidden rounded-md">
                      <div class="flex items-center h-full gap-1 -mx-2">
                        <div :class="['w-1/2 h-[200%] bg-theme-1 rotate-12', colorScheme]"></div>
                        <div :class="['w-1/2 h-[200%] bg-theme-2 rotate-12', colorScheme]"></div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div class="border-b border-dashed"></div>
            <div class="px-8 pt-6 pb-8">
              <div class="text-base font-medium">{{ $t('appearance') }}</div>
              <div class="mt-5 grid grid-cols-2 gap-3.5">
                <div>
                  <a @click="(event: MouseEvent) => { event.preventDefault(); switchDarkMode(false) }"
                     :class="[
                       'h-12 cursor-pointer bg-slate-50 box p-1 border-slate-300/80 block',
                       '[&.active]:border-2 [&.active]:border-theme-1/60',
                       !darkModeStore.darkModeValue ? 'active' : '',
                     ]">
                    <div class="h-full overflow-hidden rounded-md bg-slate-200"></div>
                  </a>
                  <div class="mt-2.5 text-center text-xs capitalize">{{ $t('day') }}</div>
                </div>
                <div>
                  <a @click="(event: MouseEvent) => { event.preventDefault(); switchDarkMode(true) }"
                     :class="[
                       'h-12 cursor-pointer bg-slate-50 box p-1 border-slate-300/80 block',
                       '[&.active]:border-2 [&.active]:border-theme-1/60',
                       darkModeStore.darkModeValue ? 'active' : '',
                     ]">
                    <div class="h-full overflow-hidden rounded-md bg-slate-900"></div>
                  </a>
                  <div class="mt-2.5 text-center text-xs capitalize">{{ $t('day') }}</div>
                </div>
              </div>
              <br>
              <br>
              <div class="question-mark mt-6" style="cursor: default;">
                {{ $t('developers') }}
                <span class="developer" @click="openTelegram('https://t.me/chiko_uz')"
                  style="cursor: pointer; color: #6b476d; text-decoration: underline;">
                  Husenov Abdullo
                </span>
                &nbsp;&nbsp;
                <span class="developer" @click="openTelegram('https://t.me/firuzovic')"
                  style="cursor: pointer; color: #6b476d; text-decoration: underline;">
                  Xalimov Shoxijaxon
                </span>
              </div>
            </div>
          </div>
        </Slideover.Description>
      </Slideover.Panel>
    </Slideover>

    <!-- Sozlamalar tugmasi -->
    <div class="fixed bottom-0 right-0 z-50 flex items-center justify-center mb-5 mr-5 text-white rounded-full shadow-lg cursor-pointer h-14 w-14 bg-theme-1"
      @click="(event: MouseEvent) => { event.preventDefault(); setThemeSwitcherSlideover(true); }">
      <Lucide class="w-5 h-5 animate-spin" icon="Settings" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Slideover } from "@/components/Base/Headless";
import Lucide from "@/components/Base/Lucide";
import { useThemeStore, type Themes } from "@/stores/theme";
import { useColorSchemeStore, type ColorSchemes } from "@/stores/color-scheme";
import { useDarkModeStore } from "@/stores/dark-mode";
import { ref } from "vue";

const themeSwitcherSlideover = ref(false);
const setThemeSwitcherSlideover = (value: boolean) => {
  themeSwitcherSlideover.value = value;
};

const colorSchemeStore = useColorSchemeStore();
const switchColorScheme = (colorScheme: ColorSchemes) => {
  colorSchemeStore.setColorScheme(colorScheme);
  setColorSchemeClass();
};

const darkModeStore = useDarkModeStore();
const switchDarkMode = (darkMode: boolean) => {
  darkModeStore.setDarkMode(darkMode);
  setDarkModeClass();
};

const setColorSchemeClass = () => {
  const el = document.documentElement;
  el.setAttribute("class", colorSchemeStore.colorSchemeValue);
  if (darkModeStore.darkModeValue) el.classList.add("dark");
};

const setDarkModeClass = () => {
  const el = document.documentElement;
  darkModeStore.darkModeValue ? el.classList.add("dark") : el.classList.remove("dark");
};

setColorSchemeClass();
setDarkModeClass();

const colorSchemes: Array<ColorSchemes> = [
  "default",
  "theme-1",
  "theme-2",
  "theme-3",
  "theme-4",
];

function openTelegram(url: string): void {
  window.open(url, '_blank');
}
</script>
