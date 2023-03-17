<template>
    <div class="hero min-h-screen" style="background-image: url(/src/assets/home.jpg);">
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">选择你的身份</h1>
            <button class="btn btn-primary w-36 m-2" @click="student">学员</button>
            <button class="btn btn-primary w-36" @click="employee">员工</button>
          </div>
        </div>
      </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const student = () => router.push('/student')
const employee = () => router.push('/employee')
</script>