'use strict';
module.exports = (sequelize, DataTypes) => {
  const Link = sequelize.define('link', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    display_text: DataTypes.STRING,
    url: DataTypes.STRING
  }, {});
  Link.associate = function(models) {
    // associations can be defined here
  };
  return Link;
};