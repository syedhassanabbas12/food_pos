const addItem = (key, value) => {
  localStorage.setItem(key, value);
};

const removeItem = (key) => {
  localStorage.removeItem(key);
};

module.exports = {
  addItem,
  removeItem,
};
