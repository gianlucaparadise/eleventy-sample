const first = require("lodash/fp/first");

module.exports = (album) => {
  const isAround300 = (image) => Math.abs(image.width - 300) < 25;
  const optimalImage = album.images.find(isAround300);
  const image = optimalImage || first(album.images);
  return image?.url;
};
