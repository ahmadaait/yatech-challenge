exports.migrate = (tableName, newColumns) => {
  return {
    up: (queryInterface, Sequelize) => {
      const columns = newColumns(Sequelize)

      return Promise.all(
        columns.map((item) =>
          queryInterface.addColumn(tableName, item.key, {
            type: item.type,
          })
        )
      )
    },

    down: (queryInterface, Sequelize) => {
      const columns = newColumns(Sequelize)

      return Promise.all(
        columns.map((item) => queryInterface.removeColumn(tableName, item.key))
      )
    },
  }
}

exports.rename = (tableName, newColumns) => {
  return {
    up: (queryInterface, Sequelize) => {
      const columns = newColumns(Sequelize)

      return Promise.all(
        columns.map((item) =>
          queryInterface.renameColumn(
            tableName,
            item.nameBefore,
            item.nameAfter
          )
        )
      )
    },

    down: (queryInterface, Sequelize) => {
      const columns = newColumns(Sequelize)

      return Promise.all(
        columns.map((item) =>
          queryInterface.renameColumn(
            tableName,
            item.nameAfter,
            item.nameBefore
          )
        )
      )
    },
  }
}
