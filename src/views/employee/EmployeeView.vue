import { ref, reactive, onMounted } from 'vue';
<template>
    <div class="w-full h-full overflow-hidden flex ">
        <aside class="fixed w-56 h-full">
            <ul class="menu bg-base-200 p-2 h-full  rounded-r-lg">
                <li class="menu-title">
                    <span>经理</span>
                </li>
                <li><router-link replace :class="$router.currentRoute.value.path===paths[0]?'active':''" :to="paths[0]">管理培训申请</router-link></li>
                <li><router-link replace :class="$router.currentRoute.value.path===paths[1]?'active':''" :to="paths[1]">查看培训情况</router-link></li>
                <li><router-link replace :class="$router.currentRoute.value.path===paths[2]?'active':''" :to="paths[2]">查看办公资料</router-link></li>
                <li class="menu-title">
                    <span>执行人</span>
                </li>
                <li><router-link replace :class="$router.currentRoute.value.path===paths[3]?'active':''" :to="paths[3]">管理课程</router-link></li>
                <li><router-link replace :class="$router.currentRoute.value.path===paths[4]?'active':''" :to="paths[4]">管理讲师</router-link></li>
                <li class="menu-title">
                    <span>现场工作人员</span>
                </li>
                <li><router-link replace :class="$router.currentRoute.value.path===paths[5]?'active':''" :to="paths[5]">签到</router-link></li>
            </ul>
        </aside>
        <main class='w-full ml-60 mr-4'>
            <router-view />
        </main>
    </div>
</template>
<script setup>
const paths = [
    "/employee/manageenroll",
    "/employee/managetrain",
    "/employee/managematerial",
    "/employee/managecourse",
    "/employee/manageteacher",
    "/employee/manageattendance"
]
</script>