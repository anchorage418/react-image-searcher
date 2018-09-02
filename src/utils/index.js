const setToStorage = (item) => {
  const localStorage = window.localStorage;
  localStorage.setItem('savedImages', JSON.stringify(item));
};

const getFromStorage = () => {
  const localStorage = window.localStorage;
  return (JSON.parse(localStorage.getItem('savedImages')) || []);
};

export {
  setToStorage,
  getFromStorage,
};