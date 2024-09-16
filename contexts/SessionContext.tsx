import { UserCredential } from 'firebase/auth';
import { createContext } from 'react';

const SessionContext = createContext<{
  login: (email: string, password: string) => void;
  logout: () => void;
  session?: UserCredential | null;
  isLoading: boolean;
}>({
  login: () => null,
  logout: () => null,
  session: null,
  isLoading: false,
});

export default SessionContext;
