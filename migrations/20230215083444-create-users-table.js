'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      surname: {
        allowNull: true,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      contact_no: {
        allowNull: true,
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      gender: {
        allowNull: false,
        type: Sequelize.DataTypes.ENUM('Male', 'Female'),
        defaultValue: 'Male',
      },
      job_title: {
        allowNull: true,
        type: Sequelize.STRING
      },
      country: {
        allowNull: true,
        type: Sequelize.STRING
      },
      city: {
        allowNull: true,
        type: Sequelize.STRING
      },
      description: {
        allowNull: true,
        type: Sequelize.STRING
      },
      web_page: {
        allowNull: true,
        type: Sequelize.STRING
      },
      icq_number: {
        allowNull: true,
        type: Sequelize.STRING
      },
      skypee_id: {
        allowNull: true,
        type: Sequelize.STRING
      },
      aim_id: {
        allowNull: true,
        type: Sequelize.STRING
      },
      yahoo_id: {
        allowNull: true,
        type: Sequelize.STRING
      },
      msn_id: {
        allowNull: true,
        type: Sequelize.STRING
      },
      id_number: {
        allowNull: true,
        type: Sequelize.STRING
      },
      institution: {
        allowNull: true,
        type: Sequelize.STRING
      },
      department: {
        allowNull: true,
        type: Sequelize.STRING
      },
      address: {
        allowNull: true,
        type: Sequelize.STRING
      },
      interests: {
        allowNull: true,
        type: Sequelize.STRING
      },
      profile_photo: {
        allowNull: true,
        type: Sequelize.STRING
      },
      email_verified: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: 0,
      },
      role: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};