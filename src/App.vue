
<template>
  <RouterView />
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";

// Token muddati tugaganini aniqlovchi funksiya
function isTokenExpired(token: string): boolean {
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const now = Math.floor(Date.now() / 1000);
    return payload.exp && payload.exp < now;
  } catch (e) {
    return true;
  }
}

const router = useRouter();

onMounted(() => {
  setInterval(() => {
    const token = localStorage.getItem("token");
    if (token && isTokenExpired(token)) {
      localStorage.removeItem("token");
      router.push("/login");
    }
  }, 60000); // Har 60 soniyada tekshiradi
});
</script>
