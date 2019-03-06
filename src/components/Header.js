// Libraries
import React from 'react'
import styled from 'styled-components'

// Components
import Top from './Top'
import Map from './Map'

// Header
const Header = () => (
  <Container>
    <Top />
    <Map />
  </Container>
)

// Styles
const Container = styled.div`
  padding: 64px 0 0 0;
  background: ${p => p.theme.purple};
`

export default Header