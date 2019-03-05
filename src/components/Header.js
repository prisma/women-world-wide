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

// Styles
const Container = styled.div`
  padding: 64px 0 0 0;
  background: ${p => p.theme.purple};
`

const Title = styled.div`
  position: relative;
  z-index: 10;
  max-width: 500px;
  margin: 64px auto -100px auto;
  text-align: center;
  color: ${p => p.theme.white};
  font-size: 40px;
  font-weight: 600;
  line-height: 48px;
`

export default Header