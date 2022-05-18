const Eleventy = require("@11ty/eleventy");
const languages = require("../src/_data/lanugages.json");

const build = async function (localeCode) {
  let elev = new Eleventy("src", `_site/${localeCode}`, {
    configPath: ".eleventy.js",
    config: function (eleventyConfig) {
      eleventyConfig.addGlobalData("locale", localeCode);
    },
  });
  await elev.write();
};

(async function () {
  languages.forEach(async (lang) => {
    await build(lang.localeCode);
  });
})();
