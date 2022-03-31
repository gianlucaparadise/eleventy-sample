const debugFilter = require("./src/_filters/debug");

module.exports = function (eleventyConfig) {
  // Output directory: _site

  eleventyConfig.addPassthroughCopy({ "src/_includes/css": "css" });

  eleventyConfig.addFilter("debug", debugFilter);
};
