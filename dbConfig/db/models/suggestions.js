'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Suggestions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Suggestions.belongsTo(models.Users, {
        foreignKey: 'userId'
      });
      
      Suggestions.belongsTo(models.Problems,{
        foreignKey: 'problemId'
      })
    }
  }
  Suggestions.init({
    message: DataTypes.STRING(500)
  }, {
    sequelize,
    modelName: 'Suggestions',
    paranoid: true,
  });
  return Suggestions;
};