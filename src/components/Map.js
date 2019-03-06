// Libraries
import React, { useEffect } from 'react'
import styled from 'styled-components'
import Rellax from 'rellax'

// Illustration
import MapIllustration from '../svgs/map.svg'
import BackgroundIllustration from '../svgs/background.svg'
import FlowersIllustration from '../svgs/flowers.svg'

// Map
const Map = () => {

  useEffect(() => {
    new Rellax('.rellax')
  })

  return (
    <Container>
        <Title className="rellax" data-rellax-speed="-3">
          Some Sort of Page Title I Assume Goes Here
        </Title>
        <Dots className="rellax" data-rellax-speed="-4">
          <Dot
            city="Edmonton"
            country="Canada"
            top={180}
            left={140} />

          <Dot
            city="Halifax"
            country="Canada"
            top={240}
            left={270} />

          <Dot
            city="Montreal"
            country="Canada"
            top={230}
            left={250} />

          <Dot
            city="Vancouver"
            country="Canada"
            top={200}
            left={100} />

          <Dot
            city="Atlanta"
            country="USA"
            top={280}
            left={200} />

          <Dot
            city="Austin"
            country="USA"
            top={290}
            left={160} />

          <Dot
            city="Boston"
            country="USA"
            top={240}
            left={260} />

          <Dot
            city="Boulder"
            country="USA"
            top={250}
            left={150} />

          <Dot
            city="Cary"
            country="USA"
            top={270}
            left={225} />

          <Dot
            city="Chicago"
            country="USA"
            top={240}
            left={195} />

          <Dot
            city="Corpus Christi"
            country="USA"
            top={300}
            left={160} />

          <Dot
            city="Dallas Fort Worth"
            country="USA"
            top={280}
            left={162} />

          <Dot
            city="Detroit"
            country="USA"
            top={238}
            left={210} />

          <Dot
            city="Los Angeles"
            country="USA"
            top={290}
            left={105} />

          <Dot
            city="New York"
            country="USA"
            top={250}
            left={250} />

          <Dot
            city="Orlando"
            country="USA"
            top={300}
            left={205} />

          <Dot
            city="Providence"
            country="USA"
            top={245}
            left={255} />

          <Dot
            city="Pittsburgh"
            country="USA"
            top={250}
            left={220} />

          <Dot
            city="Utah"
            country="USA"
            top={255}
            left={130} />

          <Dot
            city="San Francisco"
            country="USA"
            top={275}
            left={95} />

          <Dot
            city="Seattle"
            country="USA"
            top={210}
            left={100} />
        </Dots>

        <Flowers className="rellax" data-rellax-speed="-2" />
        <StyledMap className="rellax" data-rellax-speed="-4" />
        <Background className="rellax" data-rellax-speed="-3" />

    </Container>
  )
}

const Container = styled.div`
  position: relative;
  height: 601px;
  width: 1100px;
  margin: 40px auto 0 auto;
  overflow: hidden;
`

const Title = styled.div`
  position: relative;
  z-index: 10;
  max-width: 500px;
  margin: 64px auto 0 auto;
  text-align: center;
  color: ${p => p.theme.white};
  font-size: 40px;
  font-weight: 600;
  line-height: 48px;
`

const Dots = styled.div`
  position: absolute;
  z-index: 3;
  width: 980px;
  height: 600px;
  top: 0;
`

const Dot = styled.div`
  transition: transform 0.1s ease;
  position: absolute;
  z-index: 4;
  top: ${p => p.top}px;
  left: ${p => p.left}px;
  background-color: ${p => p.theme.white};
  width: 8px;
  height: 8px;
  border-radius: 12px;
  /* border: 2px solid ${p => p.theme.purple}; */

  &:hover {
    transform: scale(3);
    cursor: pointer;
  }
`

const Flowers = styled(FlowersIllustration)`
  position: absolute;
  z-index: 2;
  bottom: -48px;
  left: 0;
`

const StyledMap = styled(MapIllustration)`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
`

const Background = styled(BackgroundIllustration)`
  position: absolute;
  z-index: 0;
  bottom: 0;
`

export default Map