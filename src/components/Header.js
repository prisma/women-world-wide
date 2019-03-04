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
    <Title>Some Sort of Page Title I Assume Goes Here</Title>
    <Map />
  </Container>
)

const Container = styled.div`
  padding-top: 64px;
  background: ${p => p.theme.purple};
`

const Title = styled.div`
  color: ${p => p.theme.white};
`

export default Header