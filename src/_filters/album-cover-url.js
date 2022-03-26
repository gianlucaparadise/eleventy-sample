const find = require("lodash/fp/find");
const first = require("lodash/fp/first");

module.exports = (album) => {
  const isAround300 = (image) => Math.abs(image.width - 300) < 25;
  const optimalImage = find(isAround300, album.images);
  const image = optimalImage || first(album.images);
  return image?.url;
};
