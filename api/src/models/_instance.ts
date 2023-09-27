import Sequelize from 'sequelize'
import tunnel from 'tunnel-ssh'

const env = process.env.NODE_ENV || 'development'
console.log(`Running ENV: ${env}`)

// eslint-disable-next-line import/no-dynamic-require
import dbConfig from 'config/database'

// @ts-ignore
const config = dbConfig[env]
const tunnelConfig = dbConfig.tunnel as any

const sequelize = new Sequelize.Sequelize(
  config.database,
  config.username,
  config.password,
  {
    ...config,
    logQueryParameters: true,
    pool: {
      max: 100,
      min: 0,
      acquire: 60000,
      idle: 10000,
    },
  }
)

if (config.tunnel) {
  tunnel(tunnelConfig, function (error, server) {
    //....
    try {
      // test sequelize connection
      sequelize
        .authenticate()
        .then(function () {
          console.log('connection established')
        })
        .catch(function (err) {
          console.error('unable establish connection', err)
        })
    } catch (error) {
      console.log(error)
    }
  })
}

const db = {
  sequelize: sequelize,
  Sequelize: Sequelize,
}

export default db
