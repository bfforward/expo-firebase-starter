import { initializeApp } from 'firebase/app';
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from 'firebase/auth';
import Constants from 'expo-constants';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

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
initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

// initialize auth
const auth = getAuth(app);

export { auth };
