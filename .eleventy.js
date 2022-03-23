const find = require("lodash/fp/find");
const first = require("lodash/fp/first");

const inspect = require("util").inspect;

module.exports = function (eleventyConfig) {
  // Output directory: _site

  eleventyConfig.addPassthroughCopy({ "src/_includes/css": "css" });

  eleventyConfig.addFilter(
    "debug",
    (content) => `<pre>${inspect(content)}</pre>`
  );

  eleventyConfig.addFilter("year", (dateString) => {
    const date = new Date(dateString);
    return date.getFullYear();
  });

  eleventyConfig.addFilter("album-cover-url", (album) => {
    const isAround300 = (image) => Math.abs(image.width - 300) < 25;
    const optimalImage = find(isAround300, album.images);
    const image = optimalImage || first(album.images);
    return image?.url;
  });
};
