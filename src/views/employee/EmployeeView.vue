import { ref, reactive, onMounted } from 'vue';
<template>
    <div class="w-full h-full overflow-hidden flex ">
        <keep-alive>
            <aside class="fixed w-56 h-full">
                <ul class="menu bg-base-200 p-2 h-full  rounded-r-lg">
                    <li class="menu-title">
                        <span>经理</span>
                    </li>
                    <li><a :class="Isactive[0]" @click="go(0)">管理培训申请</a></li>
                    <li><a :class="Isactive[1]" @click="go(1)">查看培训情况</a></li>
                    <li><a :class="Isactive[2]" @click="go(2)">查看办公资料</a></li>
                    <li class="menu-title">
                        <span>执行人</span>
                    </li>
                    <li><a :class="Isactive[3]" @click="go(3)">管理课程</a></li>
                    <li><a :class="Isactive[4]" @click="go(4)">管理讲师</a></li>
                    <li class="menu-title">
                        <span>现场工作人员</span>
                    </li>
                    <li><a :class="Isactive[5]" @click="go(5)">签到</a></li>
                </ul>
            </aside>
        </keep-alive>

        <main class='w-full ml-60 mr-4'>
            <router-view />
        </main>
    </div>
</template>
<script setup>
import { reactive,onMounted } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const paths = [
    "/employee/manageenroll",
    "/employee/managetrain",
    "/employee/managematerial",
    "/employee/managecourse",
    "/employee/manageteacher",
    "/employee/manageattendance"
]
const Isactive = reactive([
    'active', '', '', '', '', ''
])
const go = (index) => {
    if (Isactive[index] != 'active') {
        for (let i = 0; i < Isactive.length; i++)
            Isactive[i] = ''
        Isactive[index] = 'active'
        router.replace(paths[index])
        console.log(paths[index])
    }
}
onMounted(() => {
    router.replace(paths[0])
})
</script>