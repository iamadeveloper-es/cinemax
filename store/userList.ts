import { defineStore } from 'pinia';

export const useUserList = defineStore('userList-store', () => {
  const userList: Ref<Array<T>> = ref([]);

  function addToList (payload: Array<T>) {
    userList.value = payload;
  }

  return {
    userList,
    addToList
  };
});
