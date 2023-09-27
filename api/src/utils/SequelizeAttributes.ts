const sequelize = require('sequelize')
const { MockQueryInterface, read } = require('utils/ReaderMigrationSequelize')

const newMockQueryInterface = new MockQueryInterface()

read(sequelize, newMockQueryInterface, 'src/migrations')

const SequelizeAttributes = {
  current: newMockQueryInterface.attributeTables,
}

export default SequelizeAttributes
