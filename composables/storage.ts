export const useStorage = () => {
  const setToLocalStorage = (payload: { imdbID: string }) => {
    const keyName = 'viewed';
    const storagedItems = JSON.parse(localStorage.getItem(keyName) || '[]');

    if (!storagedItems.some((item: { imdbID: string }) => item.imdbID === payload.imdbID)) {
      storagedItems.push(payload);
      localStorage.setItem(keyName, JSON.stringify(storagedItems));
    }
  };

  const getFromLocalStorage = (key: string) => {
    return JSON.parse(localStorage.getItem(key) || 'null');
  };

  return {
    setToLocalStorage,
    getFromLocalStorage
  };
};
