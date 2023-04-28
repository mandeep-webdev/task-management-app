import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyCSFgNOfJGRhIl6bNt9EveNYBwkf3xsVkw',
  authDomain: 'task-management-app-a6a75.firebaseapp.com',
  projectId: 'task-management-app-a6a75',
  storageBucket: 'task-management-app-a6a75.appspot.com',
  messagingSenderId: '412979724293',
  appId: '1:412979724293:web:21710dad44020afa361c6c',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
