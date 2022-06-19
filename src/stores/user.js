import { defineStore } from 'pinia';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import { auth } from '../firebase/config';

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    user: null,
  }),

  actions: {
    async register({ email, password }) {
      console.log('register');
      const res = await createUserWithEmailAndPassword(auth, email, password);

      if (res) {
        this.user = res.user;
        console.log(this.user);
      } else {
        throw new Error('could not complete signup');
      }
    },

    async login({ email, password }) {
      console.log('login');
      const res = await signInWithEmailAndPassword(auth, email, password);

      if (res) {
        this.user = res.user;
        console.log(this.user);
      } else {
        throw new Error('could not complete login');
      }
    },

    async logout() {
      console.log('logout');
      await signOut(auth);
      this.user = null;
      console.log(this.user);
    },
  },
});
