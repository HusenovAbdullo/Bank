<script setup lang="ts">
import "@/assets/css/themes/tinker/top-nav.css";
import { useRoute, useRouter } from "vue-router";
import logoUrl from "@/assets/images/faviconn.png";
import MobileMenu from "@/components/MobileMenu";
import fakerData from "@/utils/faker";
import _ from "lodash";
import { useMenuStore } from "@/stores/menu";
import {
  type ProvideForceActiveMenu,
  forceActiveMenu,
  type Route,
  type FormattedMenu,
  nestedMenu,
  linkTo,
} from "./top-menu";
import Lucide from "@/components/Base/Lucide";
import Breadcrumb from "@/components/Base/Breadcrumb";
import { FormInput } from "@/components/Base/Form";
import { Menu, Popover } from "@/components/Base/Headless";
import { TransitionRoot } from "@headlessui/vue";
import { watch, reactive, computed, onMounted, ref, provide } from "vue";

const searchDropdown = ref(false);
const showSearchDropdown = () => {
  searchDropdown.value = true;
};
const hideSearchDropdown = () => {
  searchDropdown.value = false;
};
const route: Route = useRoute();
const router = useRouter();
let formattedMenu = reactive<Array<FormattedMenu | "divider">>([]);
const setFormattedMenu = (
  computedFormattedMenu: Array<FormattedMenu | "divider">
) => {
  Object.assign(formattedMenu, computedFormattedMenu);
};
const menuStore = useMenuStore();
const menu = computed(() => nestedMenu(menuStore.menu("top-menu"), route));

provide<ProvideForceActiveMenu>("forceActiveMenu", (pageName: string) => {
  forceActiveMenu(route, pageName);
  setFormattedMenu(menu.value);
});

watch(menu, () => {
  setFormattedMenu(menu.value);
});

watch(
  computed(() => route.path),
  () => {
    delete route.forceActiveMenu;
  }
);

onMounted(() => {
  setFormattedMenu(menu.value);
});
</script>

<template>
  <div :class="[
    'tinker md:bg-black/[0.15] dark:bg-transparent relative py-5 px-5 md:py-0 sm:px-8 md:px-0',
    'after:content-[\'\'] after:bg-gradient-to-b after:from-theme-1 after:to-theme-2 dark:after:from-darkmode-800 dark:after:to-darkmode-800 after:fixed after:inset-0 after:z-[-2]',
  ]">
    <DarkModeSwitcher />
    <MainColorSwitcher />
    <MobileMenu />
    <!-- BEGIN: Top Bar -->
    <div
      class="h-[70px] z-[51] relative border-b border-white/[0.08] mt-12 md:mt-0 -mx-3 sm:-mx-8 md:mx-0 px-4 sm:px-8 md:px-6 mb-10 md:mb-8">
      <div class="flex items-center h-full">
        <!-- BEGIN: Logo -->
        <RouterLink :to="{ name: 'dashboard-overview-1' }" class="hidden -intro-x md:flex">
          <img alt="Midone Tailwind HTML Admin Template" class="w-6" :src="logoUrl" />
          <span class="ml-3 text-lg text-white"> UzPost </span>
        </RouterLink>
        <!-- END: Logo -->
        <!-- BEGIN: Breadcrumb -->
        <Breadcrumb light class="h-full md:ml-10 md:pl-10 md:border-l border-white/[0.08] mr-auto -intro-x">
          <Breadcrumb.Link to="/">Admin</Breadcrumb.Link>
          <Breadcrumb.Link to="/" :active="true"> Dashboard </Breadcrumb.Link>
        </Breadcrumb>
        <!-- END: Breadcrumb -->
        <!-- BEGIN: Search -->
        <!-- <div class="relative mr-3 intro-x sm:mr-6">
          <div class="hidden sm:block">
            <FormInput type="text"
              class="border-transparent w-56 shadow-none rounded-full bg-slate-200 pr-8 transition-[width] duration-300 ease-in-out focus:border-transparent focus:w-72 dark:bg-darkmode-400/70"
              placeholder="Search..." @focus="showSearchDropdown" @blur="hideSearchDropdown" />
            <Lucide icon="Search"
              class="absolute inset-y-0 right-0 w-5 h-5 my-auto mr-3 text-slate-600 dark:text-slate-500" />
          </div>
          <a class="relative text-white/70 sm:hidden" href="">
            <Lucide icon="Search" class="w-5 h-5 dark:text-slate-500" />
          </a>
          <TransitionRoot as="template" :show="searchDropdown" enter="transition-all ease-linear duration-150"
            enterFrom="mt-5 invisible opacity-0 translate-y-1" enterTo="mt-[3px] visible opacity-100 translate-y-0"
            entered="mt-[3px]" leave="transition-all ease-linear duration-150"
            leaveFrom="mt-[3px] visible opacity-100 translate-y-0" leaveTo="mt-5 invisible opacity-0 translate-y-1">
            <div class="absolute right-0 z-10 mt-[3px]">
              <div class="w-[450px] p-5 box">
                <div class="mb-2 font-medium">Pages</div>
                <div class="mb-5">
                  <a href="" class="flex items-center">
                    <div
                      class="flex items-center justify-center w-8 h-8 rounded-full bg-success/20 dark:bg-success/10 text-success">
                      <Lucide icon="Inbox" class="w-4 h-4" />
                    </div>
                    <div class="ml-3">Mail Settings</div>
                  </a>
                  <a href="" class="flex items-center mt-2">
                    <div class="flex items-center justify-center w-8 h-8 rounded-full bg-pending/10 text-pending">
                      <Lucide icon="Users" class="w-4 h-4" />
                    </div>
                    <div class="ml-3">Users & Permissions</div>
                  </a>
                  <a href="" class="flex items-center mt-2">
                    <div
                      class="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 dark:bg-primary/20 text-primary/80">
                      <Lucide icon="CreditCard" class="w-4 h-4" />
                    </div>
                    <div class="ml-3">Transactions Report</div>
                  </a>
                </div>
                <div class="mb-2 font-medium">Users</div>
                <div class="mb-5">
                  <a v-for="(faker, fakerKey) in _.take(fakerData, 4)" :key="fakerKey" href=""
                    class="flex items-center mt-2">
                    <div class="w-8 h-8 image-fit">
                      <img alt="Midone Tailwind HTML Admin Template" class="rounded-full" :src="faker.photos[0]" />
                    </div>
                    <div class="ml-3">{{ faker.users[0].name }}</div>
                    <div class="w-48 ml-auto text-xs text-right truncate text-slate-500">
                      {{ faker.users[0].email }}
                    </div>
                  </a>
                </div>
                <div class="mb-2 font-medium">Products</div>
                <a v-for="(faker, fakerKey) in _.take(fakerData, 4)" :key="fakerKey" href=""
                  class="flex items-center mt-2">
                  <div class="w-8 h-8 image-fit">
                    <img alt="Midone Tailwind HTML Admin Template" class="rounded-full" :src="faker.images[0]" />
                  </div>
                  <div class="ml-3">{{ faker.products[0].name }}</div>
                  <div class="w-48 ml-auto text-xs text-right truncate text-slate-500">
                    {{ faker.products[0].category }}
                  </div>
                </a>
              </div>
            </div>
          </TransitionRoot>
        </div> -->
        <!-- END: Search -->
        <!-- BEGIN: Notifications -->
        <Popover class="mr-4 intro-x sm:mr-6">
          <Popover.Button
            class="relative text-white/70 outline-none block before:content-[''] before:w-[8px] before:h-[8px] before:rounded-full before:absolute before:top-[-2px] before:right-0 before:bg-danger">
            <Lucide icon="Bell" class="w-5 h-5 dark:text-slate-500" />
          </Popover.Button>
          <Popover.Panel class="w-[280px] sm:w-[350px] p-5 mt-2">
            <div class="mb-5 font-medium">Notifications</div>
            <div v-for="(faker, fakerKey) in _.take(fakerData, 5)" :key="fakerKey" :class="[
              'cursor-pointer relative flex items-center',
              { 'mt-5': fakerKey },
            ]">
              <div class="relative flex-none w-12 h-12 mr-1 image-fit">
                <img alt="Midone Tailwind HTML Admin Template" class="rounded-full" :src="faker.photos[0]" />
                <div
                  class="absolute bottom-0 right-0 w-3 h-3 border-2 border-white rounded-full bg-success dark:border-darkmode-600">
                </div>
              </div>
              <div class="ml-2 overflow-hidden">
                <div class="flex items-center">
                  <a href="" class="mr-5 font-medium truncate">
                    {{ faker.users[0].name }}
                  </a>
                  <div class="ml-auto text-xs text-slate-400 whitespace-nowrap">
                    {{ faker.times[0] }}
                  </div>
                </div>
                <div class="w-full truncate text-slate-500 mt-0.5">
                  {{ faker.news[0].shortContent }}
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Popover>
        <!-- END: Notifications -->
        <!-- BEGIN: Account Menu -->
        <Menu>
          <Menu.Button class="block w-8 h-8 overflow-hidden scale-110 rounded-full shadow-lg image-fit zoom-in intro-x">
            <img alt="Midone Tailwind HTML Admin Template" :src="fakerData[9].photos[0]" />
          </Menu.Button>
          <Menu.Items
            class="w-56 mt-px relative bg-primary/70 before:block before:absolute before:bg-black before:inset-0 before:rounded-md before:z-[-1] text-white">
            <Menu.Header class="font-normal">
              <div class="font-medium">{{ fakerData[0].users[0].name }}</div>
              <div class="text-xs text-white/70 mt-0.5 dark:text-slate-500">
                {{ fakerData[0].jobs[0] }}
              </div>
            </Menu.Header>
            <Menu.Divider class="bg-white/[0.08]" />
        <Menu.Item class="hover:bg-white/5" @click="$router.push('/profile-overview-1')">
          <Lucide icon="User" class="w-4 h-4 mr-2" /> Profil
        </Menu.Item>

        <!-- <Menu.Item class="hover:bg-white/5">
          <Lucide icon="Edit" class="w-4 h-4 mr-2" /> Add Account
        </Menu.Item> -->
        <Menu.Item class="hover:bg-white/5">
          <a href="https://uz.post/tiklash" target="_blank" class="flex items-center">
            <Lucide icon="Lock" class="w-4 h-4 mr-2" /> Parolni tiklash
          </a>
        </Menu.Item>

        <Menu.Item class="hover:bg-white/5">
          <a href="https://t.me/Husenov_Abdullo" target="_blank" rel="noopener noreferrer" class="flex items-center">
            <Lucide icon="HelpCircle" class="w-4 h-4 mr-2" /> {{ $t('help') }}
          </a>
        </Menu.Item>

        <Menu.Divider class="bg-white/[0.08]" />
        <Menu.Item class="hover:bg-white/5">
          <Lucide icon="ToggleRight" class="w-4 h-4 mr-2" /> {{ $t('logout') }}
        </Menu.Item>
          </Menu.Items>
        </Menu>
        <!-- END: Account Menu -->
      </div>
    </div>
    <!-- END: Top Bar -->
    <!-- BEGIN: Top Menu -->
    <nav class="top-nav relative z-50 -mt-[3px] hidden translate-y-[50px] opacity-0 md:block">
      <ul class="flex flex-wrap h-[58px] px-6 xl:px-[50px]">
        <li v-for="(menu, menuKey) in formattedMenu" :key="menuKey">
          <template v-if="menu != 'divider'">
            <a :href="menu.subMenu
                ? '#'
                : ((pageName: string | undefined) => {
                  try {
                    return router.resolve({
                      name: pageName,
                    }).fullPath;
                  } catch (err) {
                    return '';
                  }
                })(menu.pageName)
              " :class="[menu.active ? 'top-menu top-menu--active' : 'top-menu']" @click="(event: MouseEvent) => {
              event.preventDefault();
              linkTo(menu, router);
            }">
              <div class="top-menu__icon">
                <Lucide :icon="menu.icon" />
              </div>
              <div class="top-menu__title">
                {{ menu.title }}
                <Lucide v-if="menu.subMenu" class="top-menu__sub-icon" icon="ChevronDown" />
              </div>
            </a>
            <ul v-if="menu.subMenu" :class="{ 'side-menu__sub-open': menu.activeDropdown }">
              <li v-for="(subMenu, subMenuKey) in menu.subMenu" :key="subMenuKey">
                <a :href="subMenu.subMenu
                    ? '#'
                    : ((pageName: string | undefined) => {
                      try {
                        return router.resolve({
                          name: pageName,
                        }).fullPath;
                      } catch (err) {
                        return '';
                      }
                    })(subMenu.pageName)
                  " class="top-menu" @click="(event: MouseEvent) => {
                  event.preventDefault();
                  linkTo(subMenu, router);
                }">
                  <div class="top-menu__icon">
                    <Lucide :icon="subMenu.icon" />
                  </div>
                  <div class="top-menu__title">
                    {{ subMenu.title }}
                    <Lucide v-if="subMenu.subMenu" class="top-menu__sub-icon" icon="ChevronDown" />
                  </div>
                </a>
                <ul v-if="subMenu.subMenu" :class="{ 'side-menu__sub-open': subMenu.activeDropdown }">
                  <li v-for="(lastSubMenu, lastSubMenuKey) in subMenu.subMenu" :key="lastSubMenuKey">
                    <a :href="lastSubMenu.subMenu
                        ? '#'
                        : ((pageName: string | undefined) => {
                          try {
                            return router.resolve({
                              name: pageName,
                            }).fullPath;
                          } catch (err) {
                            return '';
                          }
                        })(lastSubMenu.pageName)
                      " class="top-menu" @click="(event: MouseEvent) => {
                      event.preventDefault();
                      linkTo(lastSubMenu, router);
                    }">
                      <div class="top-menu__icon">
                        <Lucide :icon="lastSubMenu.icon" />
                      </div>
                      <div class="top-menu__title">
                        {{ lastSubMenu.title }}
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </template>
        </li>
      </ul>
    </nav>
    <!-- END: Top Menu -->
    <!-- BEGIN: Content -->
    <div :class="[
      'rounded-[30px] md:rounded-[35px_35px_0px_0px] min-w-0 min-h-screen max-w-full md:max-w-none bg-slate-100 flex-1 pb-10 px-4 md:px-6 relative mt-8 dark:bg-darkmode-700',
      'before:content-[\'\'] before:w-full before:h-px before:block',
      'after:content-[\'\'] after:z-[-1] after:rounded-[40px_40px_0px_0px] after:w-[97%] after:inset-y-0 after:absolute after:left-0 after:right-0 after:bg-white/10 after:-mt-4 after:mx-auto after:dark:bg-darkmode-400/50',
    ]">
      <RouterView />
    </div>
    <!-- END: Content -->
  </div>
</template>
