/**
 * @namespace typedefs
 */

/**
 * Album DTO
 * @typedef {Object} Album
 * @property {String} id Id of the album
 * @property {String} name Album name
 * @property {Number} releaseYear Year of the release date
 * @property {Number} durationMinutes Duration of the album in minutes
 * @property {String} artistName Name of the artist
 * @property {String} coverUrl Url of the image for the album cover
 */

/**
 * Menu Item
 * @typedef {Object} MenuItem
 * @property {Number} id Id of the menu item
 * @property {String} label Human readable label of the menu item
 * @property {String} ariaLabel Label to be used for screen readers
 * @property {String} relativeHref Link addressed by the menu item
 * @property {String} logoLabel Label to be displayed next to the Logo
 * @property {String} tag A string tag that identifies this menu item
 * @property {Number} index Index of the menu item in order
 */

/**
 * Eleventy Props
 * @typedef {Object} EleventyProps
 * @property {Album[]} cmsAlbums List of albums retrieved from CMS
 * @property {MenuItem[]} topMenuItems List of menu items for the top menu retrieved from the CMS
 */

exports.unused = {};
