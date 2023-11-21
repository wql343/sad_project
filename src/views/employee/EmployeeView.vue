import { ref, reactive, onMounted } from 'vue';
<template>
    <div class="w-full h-full overflow-hidden flex ">
        <!-- <keep-alive>
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
        </main> -->
        <div class="drawer drawer-mobile h-full">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">
                <div class="h-full w-full pr-4 pl-4 overflow-scroll">
                    <label for="my-drawer-2" class="btn drawer-button lg:hidden mb-2">
                        <svg class="h-8 w-8 fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path></svg>
                    </label>
                    <router-view />
                </div>
            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu bg-base-200 p-2 h-full rounded-r-lg w-56">
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
            </div>
        </div>
    </div>
</template>
<script setup>
import { reactive, onMounted } from 'vue';
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