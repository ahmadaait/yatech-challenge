'use strict'
import twinBcrypt from 'twin-bcrypt'

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    const hashPassword = twinBcrypt.hashSync('test123')
    return queryInterface.bulkInsert('Users', [
      {
        name: 'Demo User',
        email: 'demouser@gmail.com',
        password: hashPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Users', {
      where: { email: 'demouser@gmail.com' },
    })
  },
}
