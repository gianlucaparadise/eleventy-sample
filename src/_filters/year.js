module.exports = (dateString) => {
  const date = new Date(dateString);
  return date.getFullYear();
};
