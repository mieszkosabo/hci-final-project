import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = { futura: `'futura-pt', sans-serif` }
const fontWeights = { medium: 500, heavy: 700 }

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})

const theme = extendTheme({
  colors: {
    roseWhite: '#F2E6E6',
  },
  fonts,
  fontWeights,
  breakpoints,
})

export default theme
