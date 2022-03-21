module.exports = function (eleventyConfig) {
    // Output directory: _site

    eleventyConfig.addPassthroughCopy({ "src/_includes/css": "css" });
};