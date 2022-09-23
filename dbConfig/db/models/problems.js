'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Problems extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Problems.hasMany(models.Suggestions, {
        foreignKey: 'problemId'
      });
    }
  }
  Problems.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    shortDescription: DataTypes.STRING,
    departament: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Problems',
    paranoid: true,
    defaultScope: {
      where:{
        status: 'active'
      }
    }
  });
  return Problems;
};