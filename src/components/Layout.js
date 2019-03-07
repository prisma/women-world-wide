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
        <title>Women World Wide Dev</title>
        <meta name="description" content="DESCRIPTION" />
        <link rel='canonical' href='https://www.womenworldwide.dev/' />
        <meta name='viewport' content='width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover' />
        <meta property='og:url' content='https://www.womenworldwide.dev/' />
        <meta property='og:type' content='website' />
        <meta property='og:locale' content='en' />
        <meta property='og:title' content='Women World Wide Dev' />
        <meta property='og:description' content="DESCRIPTION" />
        <meta property='og:site_name' content='Women World Wide Dev' />
        <meta property='og:image' content='https://www.womenworldwide.dev/social.png' />
        <meta property='og:image:width' content='1012' />
        <meta property='og:image:height' content='506' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name="twitter:creator" content="@prisma" />
      </Helmet>
      <GlobalStyles />
      {children}
    </>
  </ThemeProvider>
)