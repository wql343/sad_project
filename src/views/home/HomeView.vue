<template>
  <div class="hero min-h-screen" style="background-image: url(/src/static/home.jpg);">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">选择你的身份</h1>
        <button v-for="(item, status) in info" :key="status" class="btn btn-primary w-24 m-2"
          @click="go(item.status, item.path)">{{ item.name }}</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
import { useStatusStore } from '../../store/index';
const router = useRouter();
const statusStore = useStatusStore();
const info = [
  { path: '/student', name: '学员', status: 0 },
  { path: '/company', name: '软件公司', status: 1 },
  { path: '/employee', name: '员工', status: 2 }
];
const go = (status, path) => {
  statusStore.choose(status)
  if (localStorage.getItem('token') == status) {
    router.replace(path);
  }
  else router.replace('/login');
}
</script>