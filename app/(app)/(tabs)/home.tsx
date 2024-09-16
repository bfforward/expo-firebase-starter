import { Image, StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { appAssets } from '@/assets/app';
import { Text } from 'react-native-paper';

export default function HomeScreen() {
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
    </ParallaxScrollView>
  );
}
