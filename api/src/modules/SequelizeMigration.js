const { DataTypes } = require('sequelize')

exports.changeColumns = (tableName, changeColumns) => {
  return {
    up: (queryInterface, Sequelize) => {
      const columns = changeColumns(Sequelize)

      return Promise.all(
        columns.map((item) => {
          const { key, ...dataTypeOrOptions } = item

          return queryInterface.changeColumn(
            tableName,
            key,
            {
              ...dataTypeOrOptions,
            },
            null
          )
        })
      )
    },

    down: async (queryInterface, Sequelize) => {
      return true
    },
  }
}

exports.renameColumns = (tableName, newColumns) => {
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

exports.renameTables = (changeTables) => {
  return {
    up: (queryInterface, Sequelize) => {
      const columns = changeTables(Sequelize)

      return Promise.all(
        columns.map((item) =>
          queryInterface.renameTable(item.nameBefore, item.nameAfter)
        )
      )
    },

    down: (queryInterface, Sequelize) => {
      const columns = changeTables(Sequelize)

      return Promise.all(
        columns.map((item) =>
          queryInterface.renameTable(item.nameAfter, item.nameBefore)
        )
      )
    },
  }
}

const getDefaultNameColumns = (obj) => {
  const entries = Object.entries(obj)
  return entries.map((x) => x[0])
}

const getCreateTableColumns = (newColumns) => {
  const columns = newColumns(DataTypes)
  const defaultColumn = {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    // id: {
    //   allowNull: false,
    //   primaryKey: true,
    //   type: DataTypes.UUID,
    //   defaultValue: DataTypes.UUIDV4,
    // },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }

  const defNameColumns = getDefaultNameColumns(defaultColumn)
  for (let i = 0; i < defNameColumns.length; i += 1) {
    const name = defNameColumns[i]
    if (columns[name]) {
      defaultColumn[name] = columns[name]
      delete columns[name]
    }
  }

  return {
    ...defaultColumn,
    ...columns,
  }
}

exports.createTable = (tableName, newColumns) => {
  const columns = getCreateTableColumns(newColumns)
  return {
    columns,
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable(tableName, columns)
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable(tableName)
    },
  }
}

exports.addNewColumns = (tableName, newColumns) => {
  const columns = newColumns(DataTypes)
  const keys = Object.keys(columns)
  return {
    columns,
    async up(queryInterface, Sequelize) {
      const txn = await queryInterface.sequelize.transaction()

      try {
        await Promise.all(
          keys.map((key) => {
            return queryInterface.addColumn(tableName, key, columns[key], {
              transaction: txn,
            })
          })
        )
        await txn.commit()
      } catch (e) {
        await txn.rollback()
      }
    },

    async down(queryInterface, Sequelize) {
      const txn = await queryInterface.sequelize.transaction()

      try {
        await Promise.all(
          keys.map((key) => {
            return queryInterface.removeColumn(tableName, key, {
              transaction: txn,
            })
          })
        )
        await txn.commit()
      } catch (e) {
        await txn.rollback()
      }
    },
  }
}

exports.changeNewColumns = (tableName, newColumns) => {
  const columns = newColumns(DataTypes)
  const keys = Object.keys(columns)
  return {
    columns,
    async up(queryInterface, Sequelize) {
      const txn = await queryInterface.sequelize.transaction()

      try {
        await Promise.all(
          keys.map((key) => {
            return queryInterface.changeColumn(tableName, key, columns[key], {
              transaction: txn,
            })
          })
        )
        await txn.commit()
      } catch (e) {
        console.log(e)
        await txn.rollback()
      }
    },

    async down(queryInterface, Sequelize) {},
  }
}

exports.removeNewColumns = (tableName, newColumns) => {
  const upDown = exports.addNewColumns(tableName, newColumns)

  return {
    columns: upDown.columns,
    up: upDown.down,
    down: upDown.up,
  }
}
