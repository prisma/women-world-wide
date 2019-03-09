// Libraries
import React from 'react'
import styled from 'styled-components'
import { transparentize } from 'polished'
import { useStaticQuery, graphql } from 'gatsby'
import Select from 'react-select'

// Utilities
import { createCityUrl, navigateTo, allCitiesOption, convertToOption, unwrapNodes } from '../utils'

// Icons
import LocationIcon from '../svgs/location.svg'
import MeetupIcon from '../svgs/meetup.svg'
import TwitterIcon from '../svgs/twitter.svg'
import TelegramIcon from '../svgs/telegram.svg'
import LinkIcon from '../svgs/link.svg'

// Components
import UnstyledCityLink from './CityLink'

// Styles
import theme from '../styles/theme'
import selectStyles from '../styles/selectStyles'

// Handle City Selection
const setCurrentCity = ({ data = {} }) => navigateTo(data.url)
const getOrgCityUrl = (orgCity, orgCountry) => {
  if(!orgCity || !orgCountry) return null
  return createCityUrl(orgCity.slug, orgCountry.slug)
}

// List
const List = ({ currentCity }) => {

  const data = useStaticQuery(queries)
  const orgs = unwrapNodes(data.allOrgsJson)
  const cities = unwrapNodes(data.allCitiesJson)
  const countries = unwrapNodes(data.allCountriesJson)

  // Select Options
  const groupedCitiesOptions = countries.map(country => ({
    label: country.name,
    data: { url: `/${country.slug}` },
    options: cities
      .filter(city => city.country === country.slug)
      .map(convertToOption)
  }))

  const selectOptions = () => [allCitiesOption, ...groupedCitiesOptions]

  return (
    <Container>
      <Filter>
        <FilterText>
          <FilterPin /> Show me all organizations in
        </FilterText>
        <Select
          onChange={option => setCurrentCity(option)}
          value={currentCity}
          options={selectOptions()}
          styles={selectStyles} />
      </Filter>

      <Card>
        { orgs.map(org => {
          if (currentCity.value !== 'all' && currentCity.value !== org.city) return null

          const orgCity = cities.find(city => city.slug === org.city)
          const orgCountry = countries.find(country => country.slug === org.country)

          return (
            <Row key={org.id}>
              <Image src={org.image}/>
              <Main>
                <Top>
                  <Name href={org.mainLink}>{org.name}</Name>
                  {renderMainLink(org.mainLink)}
                </Top>

                <Bottom>
                  <Meta>
                    <Location>
                      <Pin />
                      { orgCity &&
                        <City>
                          <CityLink to={getOrgCityUrl(orgCountry, orgCity)}>
                            {orgCity.name}
                          </CityLink>,&nbsp;
                        </City>
                      }
                      { orgCountry && <Country>{orgCountry.name}</Country> }
                    </Location>

                    <Topics>
                      { org.topics.map((topic, i) =>
                        <Topic key={i}>{topic}</Topic>
                      )}
                    </Topics>
                  </Meta>

                  <SecondaryLinks>
                    { org.secondaryLinks && org.secondaryLinks.map((link, i) =>
                      <SecondaryLink key={i} href={link.url}>{link.name}</SecondaryLink>
                    )}
                  </SecondaryLinks>
                </Bottom>
              </Main>
            </Row>
          )}
        )}
      </Card>
    </Container>
  )
}

// Render Main Link
const renderMainLink = url => {
  const urlRegex = /([--:\w?@%&+~#=]*\.[a-z]{2,4}\/{0,2})((?:[?&](?:\w+)=(?:\w+))+|[--:\w?@%&+~#=]+)?/g
  const site = urlRegex.exec(url)[1]

  if (site.includes('meetup.com')) return <MainLink color={theme.meetupRed} href={url}><MeetupIcon /> Meetup</MainLink>
  if (site.includes('twitter.com')) return <MainLink color={theme.twitterBlue} href={url}><TwitterIcon /> Twitter</MainLink>
  if (site.includes('t.me') || site.includes('telegram.me')) return <MainLink color={theme.telegramBlue} href={url}><TelegramIcon /> Telegram</MainLink>

  else return <MainLink href={url}><LinkIcon /> Visit</MainLink>
}

// Queries
const queries = graphql`
  query {
    allOrgsJson {
      edges {
        node {
          id
          image
          name
          country
          city
          topics
          mainLink
          secondaryLinks {
            name
            url
          }
        }
      }
    }

    allCitiesJson {
      edges {
        node {
          id
          slug
          name
          country
        }
      }
    }

    allCountriesJson {
      edges {
        node {
          id
          slug
          name
        }
      }
    }
  }
`

// Styles
const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`

const Filter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${p => p.theme.gray};
  margin: 48px 0;
  padding: 0 24px;

  @media screen and (min-width: 650px) {
    flex-direction: row;
  }
`

const FilterPin = styled(LocationIcon)`
  flex-shrink: 0;
  margin-right: 12px;
  height: 24px;
  width: auto;
`

const FilterText = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  margin: 0 0 16px 0;

  @media screen and (min-width: 650px) {
    margin: 0 16px 0 0;
  }
`

const Card = styled.div`
  background: white;
  box-shadow: ${p => p.theme.cardShadow};
`

const Row = styled.div`
  display: flex;
  align-items: top;
  padding: 24px 32px;
  border-bottom: 1px solid ${p => p.theme.lightGray};

  @media screen and (min-width: 650px) {
    align-items: center;
  }
`

const Main = styled.div`
  flex: 1;
`

const Name = styled.a`
  margin-right: 24px;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;

  @media screen and (min-width: 550px) {
    font-size: 24px;
  }
`

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;

  @media screen and (min-width: 550px) {
    align-items: center;
    flex-direction: row;
  }
`

const MainLink = styled.a`
  height: 32px;
  background-color: ${p => p.color ? p.color : p.theme.purple};
  color: ${p => p.theme.white};
  display: flex;
  align-items: center;
  padding: 0 12px;
  text-decoration: none;
  margin: 12px 0 0 0;

  svg {
    display: block;
    height: 16px;
    width: auto;
    margin-right: 8px;
  }

  @media screen and (min-width: 550px) { margin: 0; }
`

const Bottom = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;

  @media screen and (min-width: 650px) {
    flex-direction: row;
    align-items: center;
  }
`

const Meta = styled.div`
  color: ${p => p.theme.gray};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
`

const Location = styled.div`
  display: flex;
  align-items: center;
  line-height: 1.5;
  flex-wrap: wrap;

  @media screen and (min-width: 850px) { line-height: 1; }
`

const Pin = styled(LocationIcon)`
  margin-right: 10px;
`

const City = styled.span``

const CityLink = styled(UnstyledCityLink)`
  white-space: nowrap;
  color: currentColor;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

const Country = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-shrink: 1;
`

const Topics = styled.div`
  color: ${p => p.theme.gray};
  display: flex;
  flex-wrap: wrap;
`

const Topic = styled.div`
  position: relative;
  margin-left: 24px;
  white-space: nowrap;

  &:before {
    content: '';
    position: absolute;
    top: 5px;
    left: -14px;
    background-color: ${p => transparentize(0.5, p.theme.gray)};
    width: 4px;
    height: 4px;
    border-radius: 4px;
  }

  &:first-child:before { display: block; }

  @media screen and (min-width: 650px) {
    &:first-child:before { display: none; }
  }

  @media screen and (min-width: 850px) {
    &:first-child:before { display: block; }
  }
`

const SecondaryLinks = styled.div`
  color: ${p => p.theme.gray};
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  line-height: 1.5;

  @media screen and (min-width: 550px) {
    justify-content: flex-end;
  }
`

const SecondaryLink = styled.a`
  color: ${p => p.theme.gray};
  position: relative;
  margin-left: 24px;

  &:before {
    content: '';
    position: absolute;
    top: 10px;
    left: -14px;
    background-color: ${p => transparentize(0.5, p.theme.gray)};
    width: 4px;
    height: 4px;
    border-radius: 4px;
  }

  &:first-child:before {
    display: none;
  }
`

const Image = styled.div`
  flex-shrink: 0;
  height: 40px;
  width: 40px;
  background-image: url(${p => p.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 64px;
  border: 3px solid ${p => p.theme.purple};
  margin-right: 16px;

  @media screen and (min-width: 650px) {
    width: 64px;
    height: 64px;
    margin-right: 24px;
  }
`

export default List