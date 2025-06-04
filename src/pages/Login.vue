<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import logoUrl from "@/assets/images/faviconn.png";
import illustrationUrl from "@/assets/images/illustration.svg";
import { FormInput } from "@/components/Base/Form";
import Button from "@/components/Base/Button";

// Login inputlar
const phoneNumber = ref("");
const password = ref("");

// Vue Router
const router = useRouter();

// Xato ko'rsatish flagi
const showError = ref(false);

// Xatolikni ko‘rsatish funksiyasi
const showLoginError = () => {
  showError.value = true;
  setTimeout(() => {
    showError.value = false;
  }, 3000);
};

// Kirish funksiyasi
const login = async () => {
  try {
    const response = await axios.post("https://ftp.treking.uz/api/v1/token/", {
      phone_number: phoneNumber.value,
      password: password.value,
    });

    const token = response.data.access;

    // Tokenni saqlaymiz
    localStorage.setItem("token", token); // <-- bu nom `token` bo'lishi kerak (router guard bilan mos bo'lishi uchun)

    // Bosh sahifaga yo‘naltiramiz
    router.push("/");
  } catch (error) {
    showLoginError();
    console.error(error);
  }
};
</script>

<template>
  <div :class="[
    'p-3 sm:px-8 relative h-screen lg:overflow-hidden bg-primary xl:bg-white dark:bg-darkmode-800 xl:dark:bg-darkmode-600',
    'before:hidden before:xl:block before:content-[\'\'] before:w-[57%] before:-mt-[28%] before:-mb-[16%] before:-ml-[13%] before:absolute before:inset-y-0 before:left-0 before:transform before:rotate-[-4.5deg] before:bg-primary/20 before:rounded-[100%] before:dark:bg-darkmode-400',
    'after:hidden after:xl:block after:content-[\'\'] after:w-[57%] after:-mt-[20%] after:-mb-[13%] after:-ml-[13%] after:absolute after:inset-y-0 after:left-0 after:transform after:rotate-[-4.5deg] after:bg-primary after:rounded-[100%] after:dark:bg-darkmode-700'
  ]">
    <div class="container relative z-10 sm:px-10">
      <div class="block grid-cols-2 gap-4 xl:grid">
        <!-- Chap taraf -->
        <div class="flex-col hidden min-h-screen xl:flex">
          <a href="#" class="flex items-center pt-5 -intro-x">
            <img alt="Logo" class="w-6" :src="logoUrl" />
            <span class="ml-3 text-lg text-white">UzPost</span>
          </a>
          <div class="my-auto">
            <img alt="Illustration" class="w-1/2 -mt-16 -intro-x" :src="illustrationUrl" />
            <div class="mt-10 text-2xl font-medium leading-tight text-white -intro-x">
              {{ $t('welcome_to_system') }}
            </div>
          </div>
        </div>

        <!-- O‘ng taraf: Login form -->
        <div class="flex h-screen py-5 my-10 xl:h-auto xl:py-0 xl:my-0">
          <div class="w-full px-5 py-8 mx-auto my-auto bg-white rounded-md shadow-md xl:ml-20 dark:bg-darkmode-600 xl:bg-transparent sm:px-8 xl:p-0 xl:shadow-none sm:w-3/4 lg:w-2/4 xl:w-auto">
            <h2 class="text-2xl font-bold text-center intro-x xl:text-3xl xl:text-left">
              {{ $t('login') }}
            </h2>
            <div class="mt-2 text-center intro-x text-slate-400 xl:hidden">
              Telefon raqam va parolingizni kiriting
            </div>

            <div class="mt-8 intro-x">
              <FormInput
                v-model="phoneNumber"
                type="text"
                class="block px-4 py-3 intro-x login__input min-w-full xl:min-w-[350px]"
                placeholder="Telefon raqamingiz"
              />
              <FormInput
                v-model="password"
                type="password"
                class="block px-4 py-3 mt-4 intro-x login__input min-w-full xl:min-w-[350px]"
                placeholder="Parolingiz"
              />
            </div>

            <div class="mt-5 text-center intro-x xl:mt-8 xl:text-left">
              <Button variant="primary" class="w-full px-4 py-3 align-top xl:w-32 xl:mr-3" @click="login">
                {{ $t('login') }}
              </Button>
            </div>

            <div class="mt-10 text-center intro-x xl:mt-24 text-slate-600 dark:text-slate-500 xl:text-left">
              <a class="text-primary dark:text-slate-200" href="https://t.me/+998997126000">{{ $t('contact_admin') }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Xatolik popup -->
    <transition name="fade">
      <div v-if="showError" class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white px-6 py-4 rounded shadow-lg z-50">
        Login xatoligi: Telefon raqam yoki parol noto‘g‘ri.
      </div>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
