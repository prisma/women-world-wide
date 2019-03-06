// Libraries
import React from 'react'
import styled from 'styled-components'

// Footer
const Footer = () => (
  <Container>
    <Left>
      <Name>Women in Tech</Name>
      <Faded>One sentence description of the site</Faded>
    </Left>

    <Right>Made by <Link href="https://www.prisma.io/">Prisma</Link>, open for everyone</Right>
  </Container>
)

// Styles
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 900px;
  padding: 40px 0;
  margin: 0 auto 64px auto;
  color: ${p => p.theme.gray};
`

const Left = styled.div``

const Name = styled.div`
  font-weight: 700;
`

const Right = styled.div`
  text-align: right;
`

const Faded = styled.div`
  opacity: 0.5;
`

const Link = styled.a`
  color: inherit;
`

export default Footer