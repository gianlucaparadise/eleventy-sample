const debugFilter = require("./src/_filters/debug");
const yearFilter = require("./src/_filters/year");
const albumCoverUrlFilter = require("./src/_filters/album-cover-url");

module.exports = function (eleventyConfig) {
  // Output directory: _site

  eleventyConfig.addPassthroughCopy({ "src/_includes/css": "css" });

  eleventyConfig.addFilter("debug", debugFilter);
  eleventyConfig.addFilter("year", yearFilter);
  eleventyConfig.addFilter("album-cover-url", albumCoverUrlFilter);
};
