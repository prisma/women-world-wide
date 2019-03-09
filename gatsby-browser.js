// hacks for skipping scroll on navigation
const { DO_NOT_SCROLL_KEY } = require('./gatsby-constants')

exports.shouldUpdateScroll = () => !window[DO_NOT_SCROLL_KEY]
exports.onRouteUpdate = () => delete window[DO_NOT_SCROLL_KEY]