import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBTrNHK5d-WzWE4dMTM5Jb5pnHbMdBmxHc',
  authDomain: 'vuex-firebase-auth-61372.firebaseapp.com',
  projectId: 'vuex-firebase-auth-61372',
  storageBucket: 'vuex-firebase-auth-61372.appspot.com',
  messagingSenderId: '99880095300',
  appId: '1:99880095300:web:f8619f37250ba6b2b4f611',
};

// initialize firebase app
initializeApp(firebaseConfig);

// initialize firebase auth
const auth = getAuth();

export { auth };
