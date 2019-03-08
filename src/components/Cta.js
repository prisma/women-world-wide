// Libraries
import React from 'react'
import styled from 'styled-components'

// Illustration
import Octocat from '../svgs/octocat.svg'
import PlusIcon from '../svgs/plus.svg'

// Cta
const Cta = () => (
  <Container>
    <Illustration />
    <Main>
      <Text>
        <Title>Don't see your organization on the list?</Title>
        <Subtitle>This site is fully open source! 🙃 Simply <a href="https://github.com/prisma/women-world-wide">submit a PR on Github</a> to add a new organization.</Subtitle>
      </Text>
      <Button href="https://github.com/prisma/women-world-wide">
        <PlusIcon /> Add an org
      </Button>
    </Main>
  </Container>
)

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  z-index: 10;
  background: ${p => p.theme.white};
  max-width: 900px;
  margin: -40px auto 0 auto;
  box-shadow: ${p => p.theme.cardShadow};
  padding: 32px;

  @media screen and (min-width: 450px) {
    padding: 32px 40px;
    flex-direction: row;
    align-items: center;
  }
`

const Illustration = styled(Octocat)`
  margin: 0 0 16px 0;

  @media screen and (min-width: 450px) { margin: 0 20px 0 0; }
`

const Main = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  flex: 1;

  @media screen and (min-width: 800px) {
    align-items: center;
    flex-direction: row;
  }
`

const Text = styled.div`
  flex: 1;
`

const Title = styled.div`
  color: ${p => p.theme.black};
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 8px;
`

const Subtitle = styled.div`
  color: ${p => p.theme.gray};
  font-size: 18px;
  line-height: 24px;
`

const Button = styled.a`
  display: flex;
  padding: 0 12px;
  margin: 16px 0 0 0;
  height: 32px;
  background-color: ${p => p.theme.purple};
  color: ${p => p.theme.white};
  align-items: center;
  text-decoration: none;

  svg {
    display: block;
    height: 12px;
    width: auto;
    margin-right: 8px;
  }

  @media screen and (min-width: 800px) {
    margin: 0 0 0 24px;
  }
`

export default Cta