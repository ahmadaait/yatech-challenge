require('dotenv').config()

module.exports = {
  development: {
    old: process.env.BASE_URL_OLD_DEVELOPMENT,
    new: process.env.BASE_URL_NEW_DEVELOPMENT,
  },
  staging: {
    old: process.env.BASE_URL_OLD_STAGING,
    new: process.env.BASE_URL_NEW_STAGING,
  },
  production: {
    old: process.env.BASE_URL_OLD_PRODUCTION,
    new: process.env.BASE_URL_NEW_PRODUCTION,
  },
}
