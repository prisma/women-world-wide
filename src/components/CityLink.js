// Libraries
import React, { forwardRef } from 'react'
import { Link } from 'gatsby'

// Utilities
import { createCityUrl, navigateTo } from '../utils'

const handleClick = event => {
  if (event.ctrlKey || event.metaKey) return
  event.preventDefault()
  return navigateTo(
    event.target.getAttribute('href'),
    { top: 850, behavior: 'smooth' },
  )
}

const allowedProps = ['to', 'style', 'className', 'children', 'tabIndex']
const pass = input => allowedProps.reduce((output, key) => {
  if (input[key] !== undefined) output[key] = input[key]
  return output
},{})

const CityLink = forwardRef(({ country, slug, ...props }, ref) => (
  <Link
    ref={ref}
    to={createCityUrl(country, slug)}
    onClick={handleClick}
    {...pass(props)}
  />
))

export default CityLink