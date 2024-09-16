import useAppTheme from '@/hooks/useAppTheme';
import { Link, Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

export default function NotFoundScreen() {
  const theme = useAppTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      backgroundColor: theme.colors.background,
    },
    link: {
      marginTop: 15,
      paddingVertical: 15,
    },
  });
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View style={styles.container}>
        <Text>This screen doesn't exist.</Text>
        <Link href="/login" style={styles.link}>
          <Text>Go to login!</Text>
        </Link>
      </View>
    </>
  );
}
