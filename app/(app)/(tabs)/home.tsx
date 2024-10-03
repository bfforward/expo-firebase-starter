import { Image, StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { appAssets } from '@/assets/app';
import { Button, Text } from 'react-native-paper';
import useSession from '@/hooks/useSession';

export default function HomeScreen() {
  const { logout } = useSession();

  const styles = StyleSheet.create({
    reactLogo: {
      height: 178,
      width: 290,
      bottom: 0,
      left: 0,
      position: 'absolute',
    },
  });

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={<Image source={appAssets.header} style={styles.reactLogo} />}
    >
      <Text>Home</Text>
      <Button mode="contained" onPress={() => logout()}>
        Logout
      </Button>
    </ParallaxScrollView>
  );
}
