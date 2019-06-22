'use strict';

var dateFormat = require('dateformat');

module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Title is required"
        }
      }
    },
    author: DataTypes.STRING
  }, {});
  Book.associate = function(models) {
    // associations can be defined here
  };

  Book.prototype.publishedAt = function() {
    return dateFormat(this.createdAt, "dddd, mmmm dS, yyyy, h:MM TT");
  };

  Book.prototype.shortDescription = function() { 
    return this.body.length > 30 ? this.body.substr(0, 30) + "..." : this.body;
  };

  return Book;
};