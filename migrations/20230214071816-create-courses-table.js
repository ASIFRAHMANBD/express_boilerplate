'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('courses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      course_category_id:{
        allowNull: true,
        type: Sequelize.INTEGER
      },
      user_id:{
        allowNull: true,
        type: Sequelize.INTEGER
      },
      title:{
        allowNull: true,
        type: Sequelize.STRING
      },
      description:{
        allowNull: true,
        type: Sequelize.STRING
      },
      price:{
        allowNull: true,
        type: Sequelize.STRING
      },
      thumbnail:{
        allowNull: true,
        type: Sequelize.STRING
      },
      privacy:{
        allowNull: true,
        type: Sequelize.STRING
      },
      duration:{
        allowNull: true,
        type: Sequelize.STRING
      },
      duration:{
        allowNull: true,
        type: Sequelize.STRING
      },
      course_url:{
        allowNull: true,
        type: Sequelize.STRING
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
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('courses');
  }
};
