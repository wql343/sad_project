<template>
    <div class="mx-auto card bg-base-300 w-3/5 mb-8 overscroll-auto p-16">
        <div class="form-control">
            <label class="label">
                <span class="label-text">姓名</span>
            </label>

            <input class="input input-bordered" placeholder="name" v-model="form.name" />
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">性别</span>
            </label>
            <select class="select select-bordered" v-model="form.gender">
                <option selected value="男">男</option>
                <option value="女">女</option>
            </select>
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">公司名称</span>
            </label>
            <input type="text" placeholder="companyname" class="input input-bordered" v-model="form.companyName" />
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">工作岗位</span>
            </label>
            <input type="text" placeholder="position" class="input input-bordered" v-model="form.post" />
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">技术水平</span>
            </label>
            <input type="text" placeholder="agree" class="input input-bordered" v-model="form.technology" />
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">邮箱</span>
            </label>
            <input type="text" placeholder="e-mail" class="input input-bordered" v-model="form.email" />
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">电话号码</span>
            </label>
            <input type="text" placeholder="phone" class="input input-bordered" v-model="form.phoneNumber" />
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">备注</span>
            </label>
            <input type="text" placeholder="remark" class="input input-bordered" v-model="form.remark" />
        </div>
        <div class="flex w-full mt-6 justify-between">
            <button class="btn btn-primary w-2/5" @click="confirm()">
                确认
            </button>
            <button class="btn  w-2/5" @click="$router.replace('/myinfo')">取消</button>
        </div>
    </div>
</template>
<script setup>
import axios from "axios"
import { onMounted, reactive } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const form = reactive({
    name: '',
    gender: '男',
    companyName: '',
    post: '',
    technology: '',
    email: '',
    phoneNumber: '',
    remark: ''

})
const confirm = () => {
    console.log(form)
    axios({
        url: "http://kjum.top:8083/student/completeMyInfo",
        method: "post",
        data: form,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            authToken: sessionStorage.getItem('token')
        }

    }).then((response) => {
        console.log(response.data)
        router.replace('/myinfo')
    }).catch((error) => {
        console.log(error)
    })
}
onMounted(() => {
    axios({
        url: "http://kjum.top:8083/student/getMyInfo",
        method: "get",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            authToken: sessionStorage.getItem('token')
        }

    }).then((response) => {
        console.log(response.data.data)
        if (response.data.data.id) {
            form.name = response.data.data.name
            form.gender = response.data.data.gender
            form.companyName = response.data.data.companyName
            form.post = response.data.data.post
            form.technology = response.data.data.technology
            form.email = response.data.data.email
            form.phoneNumber = response.data.data.phoneNumber
            form.remark = response.data.data.remark

        }

    }).catch((error) => {
        console.log(error)
    })
})
</script>