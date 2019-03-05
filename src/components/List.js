// Libraries
import React, { useState } from 'react'
import styled from 'styled-components'
import { transparentize } from 'polished'
import { useStaticQuery, graphql } from 'gatsby'
import Select from 'react-select'

// Icons
import LocationIcon from '../svgs/location.svg'
import DropdownIcon from '../svgs/dropdown.svg'
import MeetupIcon from '../svgs/meetup.svg'
import TwitterIcon from '../svgs/twitter.svg'
import TelegramIcon from '../svgs/telegram.svg'
import LinkIcon from '../svgs/link.svg'
import theme from '../styles/theme'

// Cities
const cities = [
  {
    value: 'all',
    label: 'All cities'
  },
  {
    label: 'USA',
    options: [
      { value: 'atlanta', label: 'Atlanta' },
      { value: 'austin', label: 'Austin' },
      { value: 'boston', label: 'Boston' },
      { value: 'boulder', label: 'Boulder' },
      { value: 'cary', label: 'Cary' },
      { value: 'chicago', label: 'Chicago' },
      { value: 'corpus-christi', label: 'Corpus Christi' },
      { value: 'dallas-fort-worth', label: 'Dallas Fort Worth' },
      { value: 'detroit', label: 'Detroit' },
      { value: 'los-angeles', label: 'Los Angeles' },
      { value: 'new-york', label: 'New York' },
      { value: 'orlando', label: 'Orlando' },
      { value: 'providence', label: 'Providence' },
      { value: 'pittsburgh', label: 'Pittsburgh' },
      { value: 'utah', label: 'Utah' },
      { value: 'san-francicso', label: 'San Francisco' },
      { value: 'seattle', label: 'Seattle' }
    ]
  },
  {
    label: 'Canada',
    options: [
      { value: 'edmonton', label: 'Edmonton' },
      { value: 'halifax', label: 'Halifax' },
      { value: 'montreal', label: 'Montreal' },
      { value: 'vancouver', label: 'Vancouver' },
    ]
  },
  {
    label: 'Mexico',
    options: [{ value: 'merida', label: 'Merida' }]
  },
  {
    label: 'Brazil',
    options: [
      { value: 'rio-de-janeiro', label: 'Rio de Janeiro' },
      { value: 'sao-paulo', label: 'Sao Paulo' },
    ]
  },
  {
    label: 'United Kingdom',
    options: [
      { value: 'london', label: 'London' },
      { value: 'oxford', label: 'Oxford' },
    ]
  },
  {
    label: 'Ireland',
    options: [{ value: 'dublin', label: 'Dublin' }]
  },
  {
    label: 'France',
    options: [{ value: 'paris', label: 'Paris' }]
  },
  {
    label: 'Germany',
    options: [{ value: 'berlin', label: 'Berlin' }]
  },
  {
    label: 'Austria',
    options: [{ value: 'vienna', label: 'Vienna' }]
  },
  {
    label: 'Sweden',
    options: [{ value: 'stockholm', label: 'Stockholm' }]
  },
  {
    label: 'Spain',
    options: [{ value: 'madrid', label: 'Madrid' }]
  },
  {
    label: 'Italy',
    options: [{ value: 'milan', label: 'Milan' }]
  },
  {
    label: 'Israel',
    options: [{ value: 'tel-aviv', label: 'Tel Aviv' }]
  },
  {
    label: 'India',
    options: [
      { value: 'new-delhi', label: 'New Delhi' },
      { value: 'bangalore', label: 'Bangalore' },
      { value: 'bhopal', label: 'Bhopal' },
      { value: 'chennai', label: 'Chennai' },
      { value: 'delhi', label: 'Delhi' },
      { value: 'pune', label: 'Pune' },
    ]
  },
  {
    label: 'Japan',
    options: [{ value: 'tokyo', label: 'Tokyo' }]
  },
  {
    label: 'Kenya',
    options: [{ value: 'nairobi', label: 'Nairobi' }]
  },
  {
    label: 'Nigeria',
    options: [{ value: 'lagos', label: 'Lagos' }]
  },
  {
    label: 'Poland',
    options: [
      { value: 'poznan', label: 'Poznan' },
      { value: 'trojmiasto', label: 'Trojmiasto' }
    ]
  },
  {
    label: 'Switzerland',
    options: [{ value: 'zurich', label: 'Zurich' }]
  },
  {
    label: 'Bolivia',
    options: [{ value: 'cochabamba', label: 'Cochabamba' }]
  },
  {
    label: 'Argentia',
    options: [
      { value: 'buenos-aires', label: 'Buenos Aires' },
      { value: 'la-paz', label: 'La Paz' },
    ]
  },
  {
    label: 'Australia',
    options: [{ value: 'melbourne', label: 'Melbourne' }]
  },
]

// const formatGroupLabel = data => (
//   <div style={groupStyles}>
//     <span>{data.label}</span>
//     <span style={groupBadgeStyles}>{data.options.length}</span>
//   </div>
// )

const customStyles = {
  menu: (provided) => ({
    ...provided,
    boxShadow: theme.cardShadow,
    borderRadius: 0
  }),
  // singleValue: (provided) => console.log({ provided }),
  singleValue: (provided) => ({
    ...provided,
    color: theme.black,
    padding: 2
  }),
  input: (provided) => ({
    ...provided,
    color: theme.black,
    fontSize: 24
  }),
  groupHeading: (provided) => ({
    ...provided,
    color: theme.gray,
    fontSize: 14,
    fontWeight: 600,
  }),
  control: (provided, state) => ({
    ...provided,
    width: 300,
    border: `none`,
    boxShadow: state.menuIsOpen ? `none` : theme.cardShadowSmall,
    borderRadius: 0,
    minHeight: `none`,
    background: state.menuIsOpen ? `transparent` : theme.white,
    fontSize: 24
  }),
  option: (provided, state) => ({
    ...provided,
    borderBottom: `1px solid ${theme.lightGray}`,
    color: state.isSelected ? theme.white : theme.black,
    backgroundColor: state.isSelected ? theme.purple : state.isFocused ? theme.lightGray : theme.white,
    padding: `8px 12px`,
    fontSize: 16
  })
}


// List
const List = () => {
  const [city, setCity] = useState({ value: 'all', label: 'All cities' })

  const data = useStaticQuery(orgsQuery)
  const orgs = data.allOrgsJson.edges

  return (
    <Container>

      <Filter>
        <FilterPin />
        <FilterText>Show me all organizations in</FilterText>
        {/* <Select>
          <SelectText>London</SelectText>
          <SelectDropdown />
        </Select> */}
        <Select
          onChange={option => setCity(option)}
          defaultValue={city}
          options={cities}
          styles={customStyles} />
      </Filter>

      <Card>
        { orgs.map(({ node: org }) => {
          if (city.label !== 'All cities' && city.label !== org.city) return null

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
                    <Pin />
                    { org.city && <City>{org.city},&nbsp;</City> }
                    <Country>{org.country}</Country>
                    <Topics>
                      { org.topics.map(topic =>
                        <Topic>{topic}</Topic>
                      )}
                    </Topics>
                  </Meta>

                  <SecondaryLinks>
                    { org.secondaryLinks && org.secondaryLinks.map(link =>
                      <SecondaryLink href={link.url}>{link.name}</SecondaryLink>
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
  if (site.includes('t.me')) return <MainLink color={theme.telegramBlue} href={url}><TelegramIcon /> Telegram</MainLink>

  else return <MainLink href={url}><LinkIcon /> Visit</MainLink>
}

// Groups Query
const orgsQuery = graphql`
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
  }
`

// Styles
const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`

const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${p => p.theme.gray};
  margin: 48px 0;
`

const FilterPin = styled(LocationIcon)`
  margin-right: 12px;
  height: 24px;
  width: auto;
`

const FilterText = styled.div`
  font-size: 24px;
  margin-right: 16px;
`

// const Select = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-left: 12px;

//   &:hover {
//     cursor: pointer;
//   }
// `

const SelectText = styled.div`
  color: ${p => p.theme.purple};
  text-decoration: underline;
`

const SelectDropdown = styled(DropdownIcon)`
  margin-left: 8px;
  display: block;
`

const Card = styled.div`
  background: white;
  box-shadow: ${p => p.theme.cardShadow};
`

const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 24px 32px;
  border-bottom: 1px solid ${p => p.theme.lightGray};
`

const Main = styled.div`
  flex: 1;
`

const Name = styled.a`
  margin-right: 24px;
  font-size: 24px;
  font-weight: 600;
  text-decoration: none;
`

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const MainLink = styled.a`
  height: 32px;
  background-color: ${p => p.color ? p.color : p.theme.purple};
  color: ${p => p.theme.white};
  display: flex;
  align-items: center;
  padding: 0 12px;
  text-decoration: none;

  svg {
    display: block;
    height: 16px;
    width: auto;
    margin-right: 8px;
  }
`

const Bottom = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Meta = styled.div`
  color: ${p => p.theme.gray};
  display: flex;
  align-items: center;
`

const Pin = styled(LocationIcon)`
  margin-right: 10px;
`

const City = styled.span``
const Country = styled.span``

const Topics = styled.div`
  color: ${p => p.theme.gray};
  display: flex;
`
const Topic = styled.div`
  position: relative;
  margin-left: 24px;

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
`

const SecondaryLinks = styled.div`
  color: ${p => p.theme.gray};
  display: flex;
`
const SecondaryLink = styled.a`
  color: ${p => p.theme.gray};
  position: relative;
  margin-left: 24px;

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

  &:first-child:before {
    display: none;
  }
`

const Image = styled.div`
  flex-shrink: 0;
  height: 64px;
  width: 64px;
  background-image: url(${p => p.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 64px;
  border: 3px solid ${p => p.theme.purple};
  margin-right: 24px;
`

export default List