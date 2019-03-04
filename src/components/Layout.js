// Libraries
import React from 'react'
import { ThemeProvider } from 'styled-components'

// Styles
import GlobalStyles from '../styles/globalStyles'
import theme from '../styles/theme'

// Layout
export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      {children}
    </>
  </ThemeProvider>
)