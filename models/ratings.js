'use strict';
module.exports = (sequelize, DataTypes) => {
  var Ratings = sequelize.define('Ratings', {
    product_id: {
        type: DataTypes.UUID, 
        allowNull: false,
        primaryKey: true
    },
    user_id: {
        allowNull: false,
        type: DataTypes.UUID,
        primaryKey: true
    },
    comment: {
        allowNull: true,
        type: DataTypes.STRING
    },
    rating: {
        allowNull: false,
        type: DataTypes.INTEGER  
    },
    verified: {
      allowNull: true,
      type: DataTypes.BOOLEAN
    } 
  });

  return Ratings;
};