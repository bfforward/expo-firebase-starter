import { Slot } from 'expo-router';
import 'react-native-reanimated';
import RootWrapper from '@/components/RootWrapper';

export default function RootLayout() {
  return (
    <RootWrapper>
      <Slot />
    </RootWrapper>
  );
}
