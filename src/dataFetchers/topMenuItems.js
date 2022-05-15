const EleventyFetch = require("@11ty/eleventy-fetch");

const cmsHost = process.env.CMS_HOST;
const cmsApiKey = process.env.CMS_API_KEY;

/**
 * @typedef {import('../types/typedefs').MenuItem} MenuItem
 */

const fetchMenuFromCms = async function () {
  const url = new URL("/api/top-menu", cmsHost);
  url.search = new URLSearchParams({
    "populate[0]": "menu_items",
    "sort[0]": "menu_items.index",
  }).toString();

  const opts = {
    headers: {
      Authorization: `bearer ${cmsApiKey}`,
    },
  };

  console.info("fetchMenuFromCms - Fetching from:", url, "with opts:", opts);

  const response = await EleventyFetch(url.toString(), {
    duration: "30m",
    type: "json",
    fetchOptions: opts,
  });

  if (response.error) {
    console.error("Error while fetching topMenu:", response.error);
    throw new Error("Error while fetching topMenu");
  }

  console.info("fetchMenuFromCms - Fetched:", response);

  return response;
};

module.exports = async function () {
  try {
    const topMenu = await fetchMenuFromCms();
    if (!topMenu?.data) {
      console.info("topMenu - Empty Top Menu", topMenu);
      return [];
    }

    /** @type {MenuItem[]} */
    const menuItems = topMenu.data.menu_items;
    if (!menuItems) {
      console.info("topMenu - Empty Menu Items", topMenu);
      return [];
    }

    return menuItems;
  } catch (e) {
    console.error("Error while building topMenu", e);
    throw e;
  }
};
