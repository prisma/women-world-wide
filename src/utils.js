// using CommonJS because this is imported on gatsby-node.js
// https://github.com/gatsbyjs/gatsby/issues/7810

const { navigate } = require('gatsby')
const { DO_NOT_SCROLL_KEY } = require('../gatsby-constants')

const doNotScroll = () => window[DO_NOT_SCROLL_KEY] = true
const createCityUrl = (countrySlug, citySlug) => `/${countrySlug}/${citySlug}`

exports.createCityUrl = createCityUrl
exports.navigateTo = (url, scrollTo) => {
  if(scrollTo && typeof window !== 'undefined') window.scrollTo(scrollTo)
  if(url) doNotScroll(navigate(url))
}

exports.convertToOption = ({ slug, name, country }) => ({
  value: slug, label: name, data: { url: createCityUrl(country, slug) },
})

exports.allCitiesOption = { value: 'all', label: 'All cities', data: { url: '/' } }

exports.unwrapNodes = data => data ? (data.edges || []).map(edge => edge.node) : []