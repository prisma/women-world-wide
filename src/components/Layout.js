// Libraries
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Helmet } from 'react-helmet'

// Styles
import GlobalStyles from '../styles/globalStyles'
import theme from '../styles/theme'

// Layout
export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <Helmet>
        <html lang='en' />
        <title>Women in Tech</title>
        <meta name="description" content="Site's description" />
        <link rel='canonical' href='https://FIXME.com' />
        <meta name='viewport' content='width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover' />
        <meta property='og:url' content='https://FIXME.com' />
        <meta property='og:type' content='website' />
        <meta property='og:locale' content='en' />
        <meta property='og:site_name' content='Women in Tech' />
        <meta property='og:image' content='/social.png' />
        <meta property='og:image:width' content='1012' />
        <meta property='og:image:height' content='506' />
        <meta name='twitter:card' content='summary' />
      </Helmet>
      <GlobalStyles />
      {children}
    </>
  </ThemeProvider>
)