import { ref } from "vue";
import { defineStore } from "pinia";
import piniaPluginPersist from 'pinia-plugin-persist';
// 使用setup模式定义
export const useStatusStore = defineStore("status", () => {
  const status = ref(-1);
  const choose = (num) => {
    status.value =num ;
  };

  return { status, choose }; 
});
