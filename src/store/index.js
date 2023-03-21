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
export const useActiveStore = defineStore('active',()=>{
  const isActive = ref([
    'active', '', '', '', '', ''
])
const active = (index) => {
    for (let i = 0; i < isActive.length; i++) {
        isActive.value[i] = ''
    }
    isActive.value[index] = 'active'
    console.log(isActive.value)
}

return {isActive,active}
})