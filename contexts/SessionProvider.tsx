import { useMemo, type PropsWithChildren } from 'react';
import { useStorageState } from '@/hooks/useStorageState';
import {
  signInWithEmailAndPassword,
  signOut,
  UserCredential,
} from 'firebase/auth';
import { auth } from '@/config';
import { router } from 'expo-router';
import SessionContext from './SessionContext';

export function SessionProvider({ children }: PropsWithChildren) {
  const [[isLoading, session], setSession] =
    useStorageState<UserCredential>('user');

  return (
    <SessionContext.Provider
      value={useMemo(
        () => ({
          login: async (email, password) => {
            const response = await signInWithEmailAndPassword(
              auth,
              email,
              password,
            );
            setSession(response);
            router.replace('/home');
          },
          logout: () => {
            signOut(auth).catch((error) =>
              console.log('Error logging out: ', error),
            );
            setSession(null);
          },
          session,
          isLoading,
        }),
        [isLoading, session, setSession],
      )}
    >
      {children}
    </SessionContext.Provider>
  );
}
