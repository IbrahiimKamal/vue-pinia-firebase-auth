<template>
  <div class="d-flex justify-content-center align-items-center vh-100">
    <div class="card py-3" style="width: 25rem">
      <div class="card-body">
        <form @submit.prevent="handleSubmit">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >Email address</label
            >
            <input
              v-model="userEmail"
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Password</label
            >
            <input
              v-model="userPassword"
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
/* ##### imports ##### */
import { ref } from 'vue';
// import { useRouter } from 'vue-router';

import { useUserStore } from '@/stores/user';

/* ##### store ##### */
const userStore = useUserStore();

/* ##### refs ##### */
const userEmail = ref('');
const userPassword = ref('');

const handleSubmit = async () => {
  try {
    await userStore.getUser({
      email: userEmail.value,
      password: userPassword.value,
    });
  } catch (error) {
    console.log(error);
  }
};
</script>
