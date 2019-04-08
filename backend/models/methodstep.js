'use strict';
module.exports = (sequelize, DataTypes) => {
  const MethodStep = sequelize.define('method_step', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    description: DataTypes.STRING
  }, {});
  MethodStep.associate = function(models) {
    // associations can be defined here
  };
  return MethodStep;
};