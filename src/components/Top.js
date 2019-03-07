// Libraries
import React from 'react'
import styled from 'styled-components'

// Icons
import GithubIcon from '../svgs/github.svg'

// Layout
const Top = () => (
  <Center>
    <Name>Women World Wide Dev</Name>
    <Nav>
      <NavLink href="https://github.com/prisma/women-world-wide">
        <StyledGithubIcon />
        View on Github
      </NavLink>
    </Nav>
  </Center>
)

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 16px;
  color: ${p => p.theme.white};
`

const Name = styled.div`
  font-weight: 600;
  font-size: 24px;
  letter-spacing: -1px;
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
`

const StyledGithubIcon = styled(GithubIcon)`
  margin-right: 12px;
`

const NavLink = styled.a`
  display: flex;
  align-items: center;
  font-size: 18px;
  color: ${p => p.theme.white};

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

export default Top