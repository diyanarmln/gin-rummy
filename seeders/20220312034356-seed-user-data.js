const jsSHA = require('jssha');

module.exports = {
  async up (queryInterface, Sequelize) {
    const userPassword = 'qwerty';
    const shaObj = new jsSHA('SHA-512', 'TEXT', { encoding: 'UTF8' });
    shaObj.update(userPassword);
    const hashedPassword = shaObj.getHash('HEX');
    
    const userList = [

      {
        username: 'PlayerX',
        email: 'comp@gmail.com',
        password: hashedPassword,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: 'tom123',
        email: 'tom@gmail.com',
        password: hashedPassword,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]

    const users = await queryInterface.bulkInsert('users', userList, { returning: true });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
