import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { PaperProvider } from 'react-native-paper';
import Theme from '@/theme';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { SessionProvider } from '@/contexts/SessionProvider';

const RootWrapper = ({ children }: { children: React.ReactNode }) => {
  const colorScheme = useColorScheme();

  return (
    <SessionProvider>
      <PaperProvider theme={colorScheme === 'dark' ? Theme.dark : Theme.light}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}
        >
          {children}
        </KeyboardAvoidingView>
      </PaperProvider>
    </SessionProvider>
  );
};

export default RootWrapper;
