// Arquivo de definição de tipos, somente para tipagem 
import 'styled-components';
import { defaultTheme } from '../styles/themes/default' 

type ThemeType = typeof defaultTheme;

// Definindo uma tipagem 
declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}
}