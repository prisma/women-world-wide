// Libraries
import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

// Utilities
import { convertToOption, allCitiesOption } from '../utils'

// Components
import Layout from '../components/Layout'
import Top from '../components/Top'
import Map from '../components/Map'
import Cta from '../components/Cta'
import List from '../components/List'
import Footer from '../components/Footer'

// Index
const IndexPage = ({ data: { city }, pageContext: { slug, country } }) => {
  const isCityPage = !!(city && slug && country)
  const currentCity = isCityPage ? convertToOption(city) : allCitiesOption

  return (
    <Layout>
      <Header>
        <Top />
        <Map />
      </Header>
      <Cta />
      <List currentCity={currentCity} />
      <Footer />
    </Layout>
  )
}

const Header = styled.div`
  padding: 40px 0 0 0;
  background: ${p => p.theme.purple};
  @media screen and (min-width: 850px) { padding: 64px 0 0 0; }
`

export const query = graphql`
  query($slug: String, $country: String) {
    city: citiesJson(slug: { eq: $slug }, country: { eq: $country }){
      slug, name, country
    }
  }
`

export default IndexPage