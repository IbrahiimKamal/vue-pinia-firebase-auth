<template>
  <Navbar />

  <RouterView />
</template>

<script setup>
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import { useUserStore } from '@/stores/user';

import Navbar from '@/components/Navbar.vue';

const storeAuth = useUserStore();

onMounted(() => {
  storeAuth.init();
});
</script>

<style>
@import 'bootstrap/dist/css/bootstrap.min.css';
</style>
