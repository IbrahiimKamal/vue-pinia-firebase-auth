<template>
  <Navbar />

  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
</script>

<style>
@import 'bootstrap/dist/css/bootstrap.min.css';
</style>
