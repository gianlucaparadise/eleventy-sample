const groupBy = require("lodash/fp/groupBy");

const favoriteAlbums = require("./favoriteAlbums.json");

const getDurationInTensOfMinutes = (item) => {
  const tracks = item.album.tracks.items;
  const durationSum = tracks.reduce((acc, track) => acc + track.duration_ms, 0);
  const durationInMinutes = durationSum / 60000;
  return `${Math.floor(durationInMinutes / 10)}0'`;
};

module.exports = function () {
  return groupBy(getDurationInTensOfMinutes, favoriteAlbums.data);
};
