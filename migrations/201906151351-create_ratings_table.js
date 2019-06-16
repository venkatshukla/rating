"use strict";
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("Ratings", {
            product_id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID
            },
            user_id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            comment: {
                allowNull: true,
                type: Sequelize.STRING
            },
            rating: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            verified: {
                allowNull: true,
                type: Sequelize.BOOLEAN
            }
        }); /* .then(() => {
        return queryInterface.addConstraint('Ratings', ['product_id', 'user_id'], {
            type: 'primary key',
            name: 'ratings_pkey'
          });
      }) */
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("Ratings");
    }
};
