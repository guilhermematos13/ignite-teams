import theme from '@theme/index'
import 'styled-components'

declare module 'styled-components' {
    type ThemeType = typeof theme;

    interface Theme extends ThemeType {}
}