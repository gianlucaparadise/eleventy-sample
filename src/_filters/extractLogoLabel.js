const getMenuItems = require("../_data/topMenuItems");

module.exports = async (menuTag) => {
  const menuItems = await getMenuItems();
  const menuItem = menuItems.find((m) => m.tag === menuTag);
  return menuItem.logoLabel;
};
