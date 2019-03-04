// Libraries
import React from 'react'
import styled from 'styled-components'

// Styles

// Layout
const Top = () => (
  <Center>
    <Name>Women in Tech</Name>
    <Nav>
      <NavLink>Github</NavLink>
      <NavLink>Add a resource</NavLink>
    </Nav>
  </Center>
)

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 900px;
  margin: 0 auto;
  color: ${p => p.theme.white};
`

const Name = styled.div`
  font-weight: 700;
  font-size: 24px;
  letter-spacing: -1px;
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
`

const NavLink = styled.a`
  margin: 0 12px;
  font-size: 16px;
  color: ${p => p.theme.white};

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

export default Top