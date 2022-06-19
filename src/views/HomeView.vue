<template>
  <div v-if="!userStore.user" class="container">
    <h1>Home Page</h1>
  </div>
  <div v-if="userStore.user" class="container">
    <h3>You Can See this if you are loged in</h3>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();
</script>
