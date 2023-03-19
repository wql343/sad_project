<template >
    <div class="card card-compact w-72 bg-base-100 shadow-xl m-2" @click="toEnroll">
        <figure><img src="http://yun.itheima.com/Upload/Images/20211231/61ce744050fc1.jpg" /></figure>
        <div class="card-body">
            <div class="card-title text-base justify-around">
                <div>前端web入门</div>
                <div>2022年3月3日</div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const toEnroll = () => router.push("/student/enroll");
</script>