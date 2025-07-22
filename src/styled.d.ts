import 'styled-components';
import type { MyTheme } from './Stores/ThemeStore/themeStore';

declare module 'styled-components' {
  export interface DefaultTheme extends MyTheme {}
}