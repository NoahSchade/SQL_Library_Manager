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
    author: DataTypes.STRING,
    genre: DataTypes.STRING,
    year: DataTypes.INTEGER
  }, {});

  Book.prototype.publishedAt = function() {
    return dateFormat(this.createdAt, "dddd, mmmm dS, yyyy, h:MM TT");
  };

  return Book;
};