const groupBy = require("lodash/fp/groupBy");

const getAllAlbums = require("./allAlbums");

const getDurationInTensOfMinutes = (album) => {
  const durationInMinutes = album.durationMinutes;
  return `${Math.floor(durationInMinutes / 10)}0'`;
};

module.exports = function () {
  const allAlbums = getAllAlbums();
  return groupBy(getDurationInTensOfMinutes, allAlbums);
};
