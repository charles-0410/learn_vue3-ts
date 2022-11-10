import { defineStore } from 'pinia';

export const useStore = defineStore({
  id: 'globalState',
  state: () => ({
    count: 1,
    data: {
      name: 'Charles',
      sex: '男',
    },
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    updateData(newData, count) {
      this.data = { ...newData };
      this.count = count;

      // 使用 $patch 修改多个值
      // this.$patch({
      //   data: { ...newData },
      //   count,
      // });
    },
  },
});
