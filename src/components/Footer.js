// Libraries
import React from 'react'
import styled from 'styled-components'

// Footer
const Footer = () => (
  <Container>
    <Left>
      <Name>Women World Wide Dev</Name>
      <Subline>Thank you to everyone who makes these groups possible! 🙌</Subline>
    </Left>

    <Right>Made with <Emoji>️️❤️</Emoji> by <Link href="https://www.prisma.io/">Prisma</Link></Right>
  </Container>
)

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 900px;
  padding: 40px 16px;
  margin: 0 auto 64px auto;
  color: ${p => p.theme.gray};
  text-align: center;

  @media screen and (min-width: 650px) {
    align-items: flex-end;
    text-align: left;
    flex-direction: row;
  }
`

const Left = styled.div``

const Name = styled.div`
  font-weight: 700;
  margin-bottom: 4px;
`

const Right = styled.div`
  white-space: nowrap;
  color: ${p => p.theme.midGray};
  text-align: center;
  margin: 16px 0 0 0;

  @media screen and (min-width: 650px) {
    text-align: right;
    margin: 0;
  }
`

const Emoji = styled.span`
  font-size: 14px;
`

const Subline = styled.div`
  line-height: 1.25;
  color: ${p => p.theme.midGray};
`

const Link = styled.a`
  color: inherit;
`

export default Footer