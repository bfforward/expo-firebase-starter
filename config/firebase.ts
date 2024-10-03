import { initializeApp } from 'firebase/app';
import {
  getAuth,
  setPersistence,
  inMemoryPersistence,
  getReactNativePersistence,
} from 'firebase/auth';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

type FirebaseConfigType = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
};

const firebaseConfig: FirebaseConfigType = {
  apiKey: Constants.expoConfig?.extra?.apiKey as string,
  authDomain: Constants.expoConfig?.extra?.authDomain as string,
  projectId: Constants.expoConfig?.extra?.projectId as string,
  storageBucket: Constants.expoConfig?.extra?.storageBucket as string,
  messagingSenderId: Constants.expoConfig?.extra?.messagingSenderId as string,
  appId: Constants.expoConfig?.extra?.appId as string,
};

// initialize firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
setPersistence(
  auth,
  Platform.OS === 'web'
    ? inMemoryPersistence
    : getReactNativePersistence(AsyncStorage),
);

// initialize auth
// const auth = getAuth(app);

export { auth };
