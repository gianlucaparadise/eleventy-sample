/**
 * @typedef {import('../types/typedefs').MenuItem} MenuItem
 */

/**
 * @param {string} menuTag
 * @param {MenuItem[]} topMenuItems
 * @returns
 */
module.exports = (menuTag, topMenuItems) => {
  const menuItem = topMenuItems.find((m) => m.tag === menuTag);
  return menuItem?.logoLabel;
};
