const inspect = require("util").inspect;

module.exports = (content) => {
  return `<pre>${inspect(content)}</pre>`;
};
