<script lang="ts">
export default {
  inheritAttrs: false,
};

export interface DismissButtonProps
  extends /* @vue-ignore */ ButtonHTMLAttributes {
  as?: string | object;
}
</script>

<script setup lang="ts">
import _ from "lodash";
import { twMerge } from "tailwind-merge";
import { computed, type ButtonHTMLAttributes, useAttrs } from "vue";

const { as = "button" } = defineProps<DismissButtonProps>();

const attrs = useAttrs();

const computedClass = computed(() =>
  twMerge([
    "text-slate-800 py-2 px-3 absolute right-0 my-auto mr-2",
    typeof attrs.class === "string" && attrs.class,
  ])
);
</script>

<template>
  <component
    :is="as"
    type="button"
    aria-label="Close"
    :class="computedClass"
    v-bind="_.omit(attrs, 'class')"
  >
    <slot></slot>
  </component>
</template>
