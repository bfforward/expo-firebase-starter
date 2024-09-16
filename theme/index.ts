import { DefaultTheme } from './Default';

const Theme = DefaultTheme;

export type ThemeType = typeof DefaultTheme;
export type DarkThemeType = typeof DefaultTheme.light;
export type LightThemeType = typeof DefaultTheme.dark;
export default Theme;
