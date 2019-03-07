// Libraries
import React, { useState } from 'react'
import styled from 'styled-components'

// Components
import Layout from '../components/Layout'
import Top from '../components/Top'
import Map from '../components/Map'
import Cta from '../components/Cta'
import List from '../components/List'
import Footer from '../components/Footer'

// Index
const IndexPage = () => {
  const [currentCity, setCurrentCity] = useState({ value: 'all', label: 'All cities' })

  return (
    <Layout>
      <Header>
        <Top />
        <Map setCurrentCity={setCurrentCity} />
      </Header>
      <Cta />
      <List
        currentCity={currentCity}
        setCurrentCity={setCurrentCity} />
      <Footer />
    </Layout>
  )
}

const Header = styled.div`
  padding: 40px 0 0 0;
  background: ${p => p.theme.purple};
  @media screen and (min-width: 850px) { padding: 64px 0 0 0; }
`

export default IndexPage