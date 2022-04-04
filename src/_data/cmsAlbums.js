const fetch = require("node-fetch");

const cmsHost = process.env.CMS_HOST;
const cmsApiKey = process.env.CMS_API_KEY;

/**
 * @typedef {import('../types/typedefs').Album} Album
 */

const fetchAlbumsFromCms = async function () {
  const url = new URL("/api/albums", cmsHost);
  url.search = new URLSearchParams({
    "populate[0]": "artist",
    "populate[1]": "cover",
    "sort[0]": "releaseYear",
  }).toString();

  const response = await fetch(url, {
    headers: {
      Authorization: `bearer ${cmsApiKey}`,
    },
  });
  const data = await response.json();
  return data;
};

/**
 * Maps a CMS album type to our album type
 * @param {any} item CMS album object
 * @returns {Album}
 */
const toAlbum = (item) => ({
  id: item.id,
  name: item.name,
  releaseYear: item.releaseYear,
  durationMinutes: item.durationMinutes,
  artistName: item.artist.name,
  coverUrl: item.cover?.url,
});

module.exports = async function () {
  try {
    const cmsAlbums = await fetchAlbumsFromCms();
    return cmsAlbums.data.map(toAlbum);
  } catch (e) {
    console.error("Error while building cmsAlbums", e);
    throw e;
  }
};
