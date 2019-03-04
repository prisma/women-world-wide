// Libraries
import React from 'react'
import styled from 'styled-components'
import { transparentize } from 'polished'
import { useStaticQuery, graphql } from 'gatsby'

// Icons
import LocationIcon from '../svgs/location.svg'
import DropdownIcon from '../svgs/dropdown.svg'
import MeetupIcon from '../svgs/meetup.svg'
import TwitterIcon from '../svgs/twitter.svg'
import TelegramIcon from '../svgs/telegram.svg'
import LinkIcon from '../svgs/link.svg'
import theme from '../styles/theme'

// List
const List = () => {
  const data = useStaticQuery(groupsQuery)
  const groups = data.allGroupsJson.edges

  return (
    <Container>
      <Filter>
        <FilterPin />
        <FilterText>Show me all groups in</FilterText>
        <Select>
          <SelectText>London</SelectText>
          <SelectDropdown />
        </Select>
      </Filter>

      <Card>
        { groups.map(({ node: group }) =>
            <Row>
              <Image src={group.image}/>
              <Main>
                <Top>
                  <Name href={group.mainLink}>{group.name}</Name>
                  {renderMainLink(group.mainLink)}
                </Top>

                <Bottom>
                  <Meta>
                    <Pin />
                    {group.city && <City>{group.city},&nbsp;</City>}
                    <Country>{group.country}</Country>
                    <Topics>
                      { group.topics.map(topic =>
                        <Topic>{topic}</Topic>
                      )}
                    </Topics>
                  </Meta>

                  <SecondaryLinks>
                    { group.secondaryLinks && group.secondaryLinks.map(link =>
                      <SecondaryLink href={link.url}>{link.name}</SecondaryLink>
                    )}
                  </SecondaryLinks>
                </Bottom>
              </Main>
            </Row>
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
const groupsQuery = graphql`
  query {
    allGroupsJson {
      edges {
        node {
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
  margin: 4rem auto;
`

const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${p => p.theme.gray};
  font-size: 24px;
  margin: 48px 0;
`

const FilterPin = styled(LocationIcon)`
  margin-right: 12px;
  height: 24px;
  width: auto;
`

const FilterText = styled.div``

const Select = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 12px;

  &:hover {
    cursor: pointer;
  }
`

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