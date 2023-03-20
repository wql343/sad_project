<template>
    <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="text-center lg:text-left">
                <h1 class="text-5xl font-bold">Login now!</h1>
                <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">账号</span>
                        </label>
                        <input type="text" placeholder="account" class="input input-bordered" v-model="form.account" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">名称</span>
                        </label>
                        <input type="text" placeholder="name" class="input input-bordered" v-model="form.name" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">密码</span>
                        </label>
                        <input type="text" placeholder="password" class="input input-bordered" v-model="form.password" />
                        <label class="label">
                            <span class="label-text">身份</span>
                        </label>
                        <select class="select select-bordered w-full max-w-xs" v-model="form.status">
                            <option disabled selected>选择登入身份</option>
                            <option v-for="(item, status) in info" :key="status" :value="status">{{ item.name }}</option>
                        </select>
                        <label class="label">
                            <router-link to="/register" class="label-text-alt link link-hover"
                                v-if="form.status == 0">还未注册？</router-link>
                        </label>
                    </div>

                    <div class="form-control mt-6">
                        <button class="btn btn-primary" @click="login">登录</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useStatusStore } from '../../store/index.js';
import { storeToRefs } from 'pinia';
const router = useRouter();
const statusStore = useStatusStore();
// const status = storeToRefs(statusStore).status.value;
const info = [
    { path: '/student', name: '学员', status: 0 },
    { path: '/company', name: '软件公司', status: 1 },
    { path: '/employee', name: '员工', status: 2 }
];
const form = reactive({
    account: '',
    name:'',
    password: '',
    status: ''
})
const login = () => {
    // console.log(status);
    // localStorage.setItem('token',status);
    // const info = localStorage.getItem('token');
    // console.log(info);
    // switch (statusStore.status) {
    //     case 0: router.push('/student'); break;
    //     case 1: router.push('/company'); break;
    //     case 2: router.push('/employee'); break;
    // }
    localStorage.removeItem('token')
    localStorage.setItem('token', JSON.stringify(form));
    switch (form.status) {
        case 0: router.push('/student'); break;
        case 1: router.push('/company'); break;
        case 2: router.push('/employee'); break;
    }
} 
</script>