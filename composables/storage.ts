import { useUserList } from '~/store/userList';

export const useStorage = () => {
  const { addToList } = useUserList();

  const setToLocalStorage = (payload: { imdbID: string }) => {
    const keyName = 'viewed';
    const storagedItems = JSON.parse(localStorage.getItem(keyName) || '[]');

    if (!storagedItems.some((item: { imdbID: string }) => item.imdbID === payload.imdbID)) {
      storagedItems.push(payload);
      localStorage.setItem(keyName, JSON.stringify(storagedItems));
      addToList(storagedItems);
    }
  };

  const getFromLocalStorage = (key: string) => {
    return JSON.parse(localStorage.getItem(key) || 'null');
  };

  const deleteFromLocalStorage = (id: string) => {
    const keyName = 'viewed';
    const storagedItems = JSON.parse(localStorage.getItem(keyName) || '[]');

    if (storagedItems && storagedItems.length) {
      const newStoragedItems = storagedItems.filter((data) => data.imdbID !== id);
      localStorage.setItem(keyName, JSON.stringify(newStoragedItems));
      addToList(newStoragedItems);
    }
  };

  return {
    setToLocalStorage,
    getFromLocalStorage,
    deleteFromLocalStorage
  };
};
