const groupBy = require("lodash/fp/groupBy");

/**
 * @typedef {import('../types/typedefs').Album} Album
 * @typedef {import('../types/typedefs').EleventyProps} EleventyProps
 */

/**
 * Extract the release year of an album
 * @param {Album} a
 * @returns {Number}
 */
const getYear = (a) => a.releaseYear;

/**
 * @param {EleventyProps} eleventyProps
 */
module.exports = async function ({ cmsAlbums }) {
  try {
    const albumsByYear = groupBy(getYear, cmsAlbums);
    return albumsByYear;
  } catch (e) {
    console.error("Error while building freshFinds", e);
    throw e;
  }
};
