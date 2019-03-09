const { resolve } = require('path')
const { createCityUrl, unwrapNodes } = require('./src/utils')

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const { data: { allCitiesJson } } = await graphql(`{
    allCitiesJson { edges { node { country slug } } }
  }`)

  const cities = unwrapNodes(allCitiesJson)

  cities.forEach(({ country, slug }) => createPage({
    path: createCityUrl(country, slug),
    context: { country, slug },
    component: resolve('./src/pages/index.js'),
  }))
}