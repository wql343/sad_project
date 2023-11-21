<template>
    <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="text-center lg:text-left">
                <h1 class="text-5xl font-bold">浩奇</h1>
                <p class="py-6">浩奇软件开发技术培训公司承揽各种软件开发技术相关培训业务。课程涵盖Web开发、小程序开发、移动应用开发、分布式软件开发、人工智能应用开发、3D应用软件开发、游戏开发等多个领域。</p>
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
                        <input type="password" placeholder="password" class="input input-bordered" v-model="form.password" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">确认密码</span>
                        </label>
                        <input type="password" placeholder="confirm password" class="input input-bordered"
                            v-model="form.confirmpassword" />
                        <label class="label">
                            <router-link to="/login" class="label-text-alt link link-hover" replace>back</router-link>
                        </label>
                    </div>
                    <div class="form-control mt-6">
                        <button class="btn btn-primary" @click="register">注册</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from "axios"
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { Toast } from "../../components/common/toast";
const router = useRouter();
const form = reactive({
    account: '',
    name: '',
    password: '',
    confirmpassword: ''
})
const register = () => {
    if (form.account && form.name && form.password && form.confirmpassword) {
        if (form.password === form.confirmpassword) {
            axios({
                url: "http://127.0.0.1:8083/doregist",
                method: "post",
                data: {
                    account: form.account,
                    name: form.name,
                    password: form.password
                },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then((response) => {
                console.log(response)
                if (response.data.code === 10000) {
                    Toast('success', '注册成功')
                } else Toast('error', response.data.msg)
                router.replace('/login')
            }).catch((error) => {
                console.log(error)
                Toast('error', error)
            })
        } else Toast('error', '密码不一致')
    } else Toast('warning', '必填项不完整')
}

</script>
