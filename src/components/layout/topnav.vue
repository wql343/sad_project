
<template>
    <div class="navbar bg-base-100 sticky top-0 z-50 "
        v-if="router.currentRoute.value.path != '/register' && router.currentRoute.value.path != '/login'">
        <div class="flex-none ">
            <button class="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    class="inline-block w-5 h-5 stroke-current">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16">
                    </path>
                </svg>
            </button>
        </div>
        <!-- <div class="w-12" v-if="router.currentRoute.value.path!= '/employee' "></div> -->
        <div class="flex-1">
            <a class="btn btn-ghost normal-case text-xl">浩奇</a>
        </div>
        <div class="flex-none dropdown dropdown-bottom dropdown-end">
            <button class="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    class="inline-block w-5 h-5 stroke-current">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z">
                    </path>
                </svg>
            </button>
            <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-32">
                <li><router-link to="/myinfo" replace>个人信息</router-link></li>
                <li><router-link to="/login" replace>退出登录</router-link></li>
            </ul>
        </div>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { watch, onMounted } from 'vue';
const router = useRouter();
watch(() => router.currentRoute.value.path, (newValue, oldValue) => {
    console.log('watch', newValue);
}, { immediate: true })
</script>