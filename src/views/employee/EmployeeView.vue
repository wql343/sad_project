import { ref, reactive, onMounted } from 'vue';
<template>
    <div class="w-full h-full overflow-hidden flex ">
        <aside class="fixed w-56 h-full">
            <ul class="menu bg-base-200 p-2 h-full  rounded-r-lg">
                <li class="menu-title">
                    <span>经理</span>
                </li>
                <li><a :class="isActive[0]" href="/employee/manageenroll" @click="active(0)">管理培训申请</a></li>
                <li><a :class="isActive[1]" href="/employee/managetrain" @click="active(1)">查看培训情况</a></li>
                <li><a :class="isActive[2]" href="/employee/managematerial" @click="active(2)">查看办公资料</a></li>
                <li class="menu-title">
                    <span>执行人</span>
                </li>
                <li><a :class="isActive[3]" href="/employee/managecourse" @click="active(3)">管理课程</a></li>
                <li><a :class="isActive[4]" href="/employee/manageteacher" @click="active(4)">管理讲师</a></li>
                <li class="menu-title">
                    <span>现场工作人员</span>
                </li>
                <li><a :class="isActive[5]" href="/employee/manageattendance" @click="active(5)">签到</a></li>
            </ul>
        </aside>
        <main class='w-full ml-60 mr-4'>
            <router-view />
        </main>
    </div>
</template>
<script setup>
import { ref, reactive,onUpdated,onMounted} from 'vue'
// import {useActiveStore} from "../../store"
// import { storeToRefs } from 'pinia'
// const store = useActiveStore()
// const {isActive} = storeToRefs(store)
// const {active} = store
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
onMounted(() => {
    console.log(isActive.value)
})
</script>