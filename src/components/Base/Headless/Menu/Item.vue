<script lang="ts">
export default {
  inheritAttrs: false,
};

export interface ItemProps
  extends /* @vue-ignore */ ExtractProps<typeof HeadlessMenuItem> {
  as?: string | object;
}
</script>

<script setup lang="ts">
import _ from "lodash";
import { twMerge } from "tailwind-merge";
import { MenuItem as HeadlessMenuItem } from "@headlessui/vue";
import { useAttrs, computed } from "vue";

const { as = "a" } = defineProps<ItemProps>();

const attrs = useAttrs();
const computedClass = computed(() =>
  twMerge([
    "cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400",
    typeof attrs.class === "string" && attrs.class,
  ])
);
</script>

<template>
  <HeadlessMenuItem as="template">
    <component :is="as" :class="computedClass" v-bind="_.omit(attrs, 'class')">
      <slot></slot>
    </component>
  </HeadlessMenuItem>
</template>
