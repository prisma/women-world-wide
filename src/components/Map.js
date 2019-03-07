// Libraries
import React, { useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Rellax from 'rellax'
import Tippy from '@tippy.js/react'

// Illustration
import MapIllustration from '../svgs/map.svg'
import BackgroundIllustration from '../svgs/background.svg'
import FlowersIllustration from '../svgs/flowers.svg'
import YellowTriangle from '../svgs/yellow-triangle.svg'
import BlueTriangle from '../svgs/blue-triangle.svg'
import RedSquare from '../svgs/red-square.svg'
import BlueSquare from '../svgs/blue-square.svg'
import YellowBall from '../svgs/yellow-ball.svg'

// Remove the blue outline
Tippy.defaultProps = { ...Tippy.defaultProps, a11y: false }

// Map
const Map = ({ setCurrentCity }) => {

  const data = useStaticQuery(citiesQuery)
  const cities = data.allCitiesJson.edges

  useEffect(() => { new Rellax('.rellax') }, [])

  const handleDotClick = city => {
    window.scrollTo({ top: 850, behavior: 'smooth' })
    setCurrentCity({ label: city.name, value: city.slug })
  }

  return (
    <Container>
      <Title className="rellax" data-rellax-speed="-5">
        Find incredible, local women in tech groups
      </Title>

      <Dots className="rellax" data-rellax-speed="-4">
        { cities.map(({ node: city }) =>
          <Tippy content={city.name} key={city.id}>
            <Dot {...city} onClick={() => handleDotClick(city)} />
          </Tippy>
        )}
      </Dots>

      <StyledYellowTriangle className="rellax" data-rellax-speed="-7" />
      <StyledBlueTriangle className="rellax" data-rellax-speed="-4" />
      <StyledYellowBall className="rellax" data-rellax-speed="-4" />
      <StyledRedSquare className="rellax" data-rellax-speed="-7" />
      <StyledBlueSquare className="rellax" data-rellax-speed="-3" />

      <Flowers className="rellax" data-rellax-speed="-2" />
      <StyledMap className="rellax" data-rellax-speed="-4" />
      <Background className="rellax" data-rellax-speed="-3" />
    </Container>
  )
}

// Cities Query
const citiesQuery = graphql`
  query {
    allCitiesJson {
      edges {
        node {
          id
          slug
          name
          country
          top
          left
        }
      }
    }
  }
`

// Styles
const Container = styled.div`
  position: relative;
  height: 300px;
  max-width: 1100px;
  margin: 40px auto 0 auto;
  background-image: url('/mobile-flora.svg');
  background-repeat: no-repeat;
  background-position: center top;
  overflow: hidden;

  @media screen and (min-width: 850px) {
    background-image: none;
    height: 650px;
    background: none;
  }
`

const Title = styled.div`
  position: relative;
  z-index: 2;
  max-width: 500px;
  margin: 40px auto 0 auto;
  text-align: center;
  color: ${p => p.theme.white};
  font-size: 40px;
  font-weight: 600;
  line-height: 48px;

  @media screen and (min-width: 500px) {
    margin: 64px auto 0 auto;
  }
`

const StyledYellowTriangle = styled(YellowTriangle)`
  position: absolute;
  z-index: 6;
  top: 50px;
  right: 20px;
`

const StyledBlueTriangle = styled(BlueTriangle)`
  position: absolute;
  z-index: 6;
  top: 20px;
  left: 10px;
`

const StyledYellowBall = styled(YellowBall)`
  position: absolute;
  z-index: 6;
  top: 200px;
  left: 60px;
`

const StyledBlueSquare = styled(BlueSquare)`
  position: absolute;
  z-index: 6;
  top: 0px;
  left: 600px;
`

const StyledRedSquare = styled(RedSquare)`
  position: absolute;
  z-index: 6;
  top: 270px;
  right: 150px;
`

const Dots = styled.div`
  display: none;
  position: absolute;
  z-index: 4;
  width: 980px;
  height: 600px;
  top: 0;
  left: -60px;

  @media screen and (min-width: 850px) { display: block; }
  @media screen and (min-width: 950px) { left: 0px; }
  @media screen and (min-width: 1100px) { left: 60px; }
`

const Dot = styled.div`
  transition: transform 0.1s ease;
  position: absolute;
  z-index: 5;
  top: ${p => p.top}px;
  left: ${p => p.left}px;
  background-color: ${p => p.theme.white};
  width: 8px;
  height: 8px;
  border-radius: 12px;

  &:hover {
    transform: scale(2);
    cursor: pointer;
  }
`

const Flowers = styled(FlowersIllustration)`
  display: none;
  position: absolute;
  z-index: 3;
  bottom: -48px;
  left: -60px;

  @media screen and (min-width: 850px) { display: block; }
  @media screen and (min-width: 950px) { left: 0px; }
  @media screen and (min-width: 1100px) { left: 60px; }
`

const StyledMap = styled(MapIllustration)`
  display: none;
  position: absolute;
  z-index: 1;
  top: 0;
  left: -60px;

  @media screen and (min-width: 850px) { display: block; }
  @media screen and (min-width: 950px) { left: 0px; }
  @media screen and (min-width: 1100px) { left: 60px;}
`

const Background = styled(BackgroundIllustration)`
  display: none;
  position: absolute;
  z-index: 0;
  bottom: 0;

  @media screen and (min-width: 850px) { display: block; }
`

export default Map