<template>
    <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="text-center lg:text-left">
                <h1 class="text-5xl font-bold">Register now!</h1>
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
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">确认密码</span>
                        </label>
                        <input type="text" placeholder="confirm password" class="input input-bordered"
                            v-model="form.confirmpassword" />
                        <label class="label">
                            <router-link to="/login" class="label-text-alt link link-hover">back</router-link>
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
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const form = reactive({
    account: '',
    name:'',
    password: '',
    confirmpassword: ''
})
const register = () => router.push('/login')
</script>
