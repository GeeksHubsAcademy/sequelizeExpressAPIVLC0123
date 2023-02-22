'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rol extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Rol.hasMany(models.User)
    }
  }
  Rol.init({
    privilege: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Rol',
    timestamps: false
  });
  return Rol;
};