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
                            <span class="label-text">密码</span>
                        </label>
                        <input type="password" placeholder="password" class="input input-bordered"
                            v-model="form.password" />
                        <label class="label">
                            <span class="label-text">身份</span>
                        </label>
                        <select class="select select-bordered w-full max-w-xs" v-model="form.status">
                            <option selected disabled :value="-1">选择登入身份</option>
                            <option v-for="(item, status) in info" :key="status" :value="status">{{ item.name }}</option>
                        </select>
                        <label class="label">
                            <router-link to="/register" class="label-text-alt link link-hover" v-if="form.status == 0"
                                replace>还未注册？</router-link>
                        </label>
                    </div>

                    <div class="form-control mt-6">
                        <button class="btn btn-primary" @click="login">登录</button>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="false">
            <div class="alert-warning" />
            <div class="alert-success" />
            <div class="alert-info" />
            <svg class="stroke-current flex-shrink-0 w-6 h-6" />
        </div>
    </div>
</template>
<script setup>
import axios from "axios"
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
// import { useStatusStore } from '../../store/index.js';
import { storeToRefs } from 'pinia';
import { Toast } from "../../components/common/toast";
const router = useRouter();
// const statusStore = useStatusStore();
// const status = storeToRefs(statusStore).status.value;
const info = [
    { path: '/student', name: '学员', status: 0 },
    { path: '/company', name: '软件公司', status: 1 },
    { path: '/employee', name: '员工', status: 2 }
];
const form = reactive({
    account: '',
    password: '',
    status: -1
})
const login = () => {
    if (form.status === -1) {
        Toast('warning', '请选择身份')
    } else
    axios({
        url: "http://kjum.top:8083/dologin",
        method: 'post',
        data: {
            account: form.account,
            password: form.password
        },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then((response) => {
        console.log(response)
        if (response.data.data !== null) {
            switch (form.status) {
                case 0: {
                    if (response.data.data.role == 1) {
                        router.replace('/student');
                    }
                };
                    break;
                case 1: {
                    if (response.data.data.forCompany) {
                        router.replace('/company');
                    }
                };
                    break;
                case 2: {
                    if (response.data.data.manager || response.data.data.operater || response.data.data.presenter) {
                        router.replace('/employee');
                    }
                };
                    break;
            }
            sessionStorage.setItem('token', response.data.data.authToken)
            Toast('success', "登录成功")
        } else {
            Toast('error', response.data.msg)
        }
    }).catch((error) => {
        console.log(error)
    })
} 
</script>