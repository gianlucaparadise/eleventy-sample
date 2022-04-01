const groupBy = require("lodash/fp/groupBy");

const getAllAlbums = require("./allAlbums");

/**
 * @typedef {import('../types/typedefs').Album} Album
 */

/**
 * @param {Album} album
 * @returns {String}
 */
const getReleaseDecade = (album) => {
  const releaseYear = album.releaseYear;
  return `${Math.floor(releaseYear / 10)}0`;
};

module.exports = function () {
  const allAlbums = getAllAlbums();
  return groupBy(getReleaseDecade, allAlbums);
};
