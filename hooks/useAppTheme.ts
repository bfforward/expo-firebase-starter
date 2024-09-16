import { LightThemeType, DarkThemeType } from '@/theme';
import { useTheme } from 'react-native-paper';

export type AppThemeType = LightThemeType | DarkThemeType;

const useAppTheme = () => useTheme<AppThemeType>();

export default useAppTheme;
