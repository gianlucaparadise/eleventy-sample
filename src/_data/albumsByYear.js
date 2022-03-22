const groupBy = require("lodash/fp/groupBy");

const favoriteAlbums = require("./favoriteAlbums.json");

const getReleaseDecade = (album) => {
  const release = new Date(album.album.release_date);
  const releaseYear = release.getFullYear();
  return Math.floor(releaseYear / 10);
};

module.exports = function () {
  return groupBy(getReleaseDecade, favoriteAlbums.data);
};
