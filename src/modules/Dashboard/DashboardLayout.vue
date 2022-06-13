<template>
  <q-layout view="lHh lpR lFf">
    <Sidebar v-if="$q.screen.gt.sm" v-model="showSideBar" />
    <MobileSidebar v-else />
    <q-page-container class="q-mx-sm">
      <router-view />
    </q-page-container>
    <Footer />
  </q-layout>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Footer from "@/shared/layout/Footer.vue";
import Sidebar from "@/shared/layout/Sidebar.vue";
import MobileSidebar from "@/shared/layout/MobileSidebar.vue";

const showSideBar = ref(false);
</script>
