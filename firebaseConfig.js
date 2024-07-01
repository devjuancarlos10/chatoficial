import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyDIMA91UZa1skj1YZYbdkzLt2mmibqZo8g",
  authDomain: "myloginalzhivida.firebaseapp.com",
  projectId: "myloginalzhivida",
  storageBucket: "myloginalzhivida.appspot.com",
  messagingSenderId: "232509984982",
  appId: "1:232509984982:web:937818911160307180f977"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export { auth };
