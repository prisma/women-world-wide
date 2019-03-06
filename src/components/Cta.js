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
    <Text>
      <Title>Don't see your organization on the list?</Title>
      <Subtitle>This site is fully open source, submit a PR to add a new resource.</Subtitle>
    </Text>
    <Button href="https://github.com/prisma/women-in-tech">
      <PlusIcon /> Add an org
    </Button>
  </Container>
)

// Styles
const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 10;
  background: ${p => p.theme.white};
  max-width: 900px;
  margin: -40px auto 0 auto;
  box-shadow: ${p => p.theme.cardShadow};
  padding: 32px 40px;
`

const Illustration = styled(Octocat)`
  margin-right: 20px;
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
  margin-left: 24px;
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
`

export default Cta