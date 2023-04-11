import { ref } from "vue";
import { defineStore } from "pinia";

import piniaPluginPersist from "pinia-plugin-persist";
// 使用setup模式定义
// export const useStatusStore = defineStore("status", () => {
//   const status = ref(-1);
//   const choose = (num) => {
//     status.value =num ;
//   };

//   return { status, choose };
// });
// export const useActiveStore = defineStore('active',()=>{
//   const isActive = ref([
//     'active', '', '', '', '', ''
// ])
// const active = (index) => {
//     for (let i = 0; i < isActive.length; i++) {
//         isActive.value[i] = ''
//     }
//     isActive.value[index] = 'active'
//     console.log(isActive.value)
// }

// return {isActive,active}
// })
export const useIdStore = defineStore("id", () => {
  const id = ref(0);
  const courseId = ref('')
  const info1 = ref([])
  const info2 = ref([])
  const setId = (num) => {
    id.value = num;
  };
  const setInfo1 = (data)=>{
    info1.value=data;
  }
  const setInfo2 = (data)=>{
    info2.value=data;
  }
  return{id,setId,info1,setInfo1,info2,setInfo2}
});
