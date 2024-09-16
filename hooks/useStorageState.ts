import { useEffect, useCallback, useReducer } from 'react';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';

type UseStateHook<T> = [[boolean, T | null], (value: T | null) => void];

function useAsyncState<T>(
  initialValue: [boolean, T | null] = [true, null],
): UseStateHook<T> {
  return useReducer(
    (
      state: [boolean, T | null],
      action: T | null = null,
    ): [boolean, T | null] => [false, action],
    initialValue,
  ) as UseStateHook<T>;
}

export async function setStorageItemAsync(key: string, value: string | null) {
  if (Platform.OS === 'web') {
    try {
      if (value === null) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, value);
      }
    } catch (e) {
      console.error('Local storage is unavailable:', e);
    }
  } else if (value == null) {
    await SecureStore.deleteItemAsync(key);
  } else {
    await SecureStore.setItemAsync(key, value);
  }
}

export function useStorageState<T>(key: string): UseStateHook<T> {
  // Public
  const [state, setState] = useAsyncState<T>();

  // Get
  useEffect(() => {
    if (Platform.OS === 'web') {
      try {
        if (typeof localStorage !== 'undefined') {
          const value = localStorage.getItem(key);
          const parsedValue: T | null = value ? (JSON.parse(value) as T) : null;
          setState(parsedValue);
        }
      } catch (e) {
        console.error('Local storage is unavailable:', e);
      }
    } else {
      SecureStore.getItemAsync(key).then((value) => {
        const parsedValue: T | null = value ? (JSON.parse(value) as T) : null;
        setState(parsedValue);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  // Set
  const setValue = useCallback(
    (value: T | null) => {
      setState(value);
      setStorageItemAsync(key, JSON.stringify(value));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [key],
  );

  return [state, setValue];
}
