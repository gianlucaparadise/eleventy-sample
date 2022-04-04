const fetchCmsAlbums = require("./cmsAlbums");
const groupBy = require("lodash/fp/groupBy");

const getYear = (a) => a.releaseYear;

module.exports = async function () {
  try {
    const albums = await fetchCmsAlbums();
    const albumsByYear = groupBy(getYear, albums);
    return albumsByYear;
  } catch (e) {
    console.error("Error while building freshFinds", e);
    throw e;
  }
};
