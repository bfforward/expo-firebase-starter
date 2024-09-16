import { ImageSourcePropType } from 'react-native';

import adaptiveBackground from './adaptive-background.png';
import adaptiveForeground from './adaptive-foreground.png';
import favicon from './favicon.png';
import icon from './icon.png';
import logo from './logo.png';
import splash from './splash.png';
import header from './header.png';

type AssetTypes = {
  adaptiveBackground: ImageSourcePropType;
  adaptiveForeground: ImageSourcePropType;
  favicon: ImageSourcePropType;
  icon: ImageSourcePropType;
  logo: ImageSourcePropType;
  splash: ImageSourcePropType;
  header: ImageSourcePropType;
};

export const appAssets: AssetTypes = {
  adaptiveBackground: adaptiveBackground as ImageSourcePropType,
  adaptiveForeground: adaptiveForeground as ImageSourcePropType,
  favicon: favicon as ImageSourcePropType,
  icon: icon as ImageSourcePropType,
  logo: logo as ImageSourcePropType,
  splash: splash as ImageSourcePropType,
  header: header as ImageSourcePropType,
};
