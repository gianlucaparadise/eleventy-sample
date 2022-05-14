require("dotenv").config();

const debugFilter = require("./src/_filters/debug");
const extractLogoLabelFilter = require("./src/_filters/extractLogoLabel");

module.exports = function (eleventyConfig) {
  // Output directory: _site

  eleventyConfig.addPassthroughCopy({ "src/_includes/css": "css" });

  eleventyConfig.addFilter("debug", debugFilter);
  eleventyConfig.addFilter("extractLogoLabel", extractLogoLabelFilter);
};
