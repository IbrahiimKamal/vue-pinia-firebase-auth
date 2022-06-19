import { defineStore } from 'pinia';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../firebase/config';

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    user: null,
  }),

  actions: {
    async getUser({ email, password }) {
      console.log('getUser');
      const res = await createUserWithEmailAndPassword(auth, email, password);

      if (res) {
        this.user = res.user;
        console.log(this.user);
      } else {
        throw new Error('could not complete signup');
      }
    },
  },
});
