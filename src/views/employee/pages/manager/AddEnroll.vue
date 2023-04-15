<template>
    <div class="mx-auto card bg-base-300 w-3/5 mb-8 overscroll-auto p-16">
        <div class="form-control">
            <label class="label">
                <span class="label-text">课程名称</span>
            </label>

            <input class="input input-bordered" v-model="form.courseName" disabled />
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">课程方向</span>
            </label>
            <select disabled class="select select-bordered" v-model="form.field">
                <option disabled selected>请选择方向</option>
                <option value="web前端">web前端</option>
                <option value="后端">后端</option>
                <option value="App开发">App开发</option>
                <option value="小程序开发">小程序开发</option>
            </select>
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">申请人</span>
            </label>
            <input type="text" placeholder="software company" class="input input-bordered" v-model="form.companyName"
                disabled />
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">申请时间</span>
            </label>
            <input type="text" placeholder="time" class="input input-bordered" v-model="form.applyDate" disabled />
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">执行人</span>
            </label>
            <select class="select select-bordered" v-model="form.executer">
                <option disabled selected :value="-1">请选择执行人</option>
                <option v-for="item in exelist" :value="item.id">{{ item.name }}</option>
            </select>
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">课程费用(单位 元/人）</span>
            </label>
            <input type="text" placeholder="请输入每名学生的培训费价格" class="input input-bordered" v-model="form.cost" />
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">课程描述</span>
            </label>
            <textarea type="text" placeholder="desc" class="textarea textarea-bordered" v-model="form.remark" disabled  />
        </div>
        <div class="flex w-full mt-6 justify-between">
            <button class="btn btn-primary w-2/5" @click="confirm">添加课程</button>
            <button class="btn  w-2/5" @click="$router.replace('/employee/manageenroll')">取消</button>
        </div>
    </div>
</template>
<script setup>
import axios from 'axios';
import { useIdStore } from '../../../../store';
import { storeToRefs } from 'pinia';
import { reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { Toast } from '../../../../components/common/toast';
const router = useRouter()
const idStore = useIdStore()
const { id } = storeToRefs(idStore)
const form = reactive({
    courseName: '',
    field: '',
    companyName: '',
    applyDate: '',
    remark: '',
    executer: '-1',
    cost: ''
})
const exelist = reactive([])
onMounted(() => {
    axios({
        url: "http://kjum.top:8083/work/getApplicationInfo?id=" + id.value,
        method: "get",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            authToken: sessionStorage.getItem('token')
        },

    }).then((response) => {
        console.log(response)
        form.companyName = response.data.data.companyName
        form.courseName = response.data.data.courseName
        form.field = response.data.data.field
        form.remark = response.data.data.remark
        form.applyDate = response.data.data.applyDate
        form.cost = response.data.data.cost
        form.executer = response.data.data.operatorId

    }).catch((error) => {
        console.log(error)
        Toast('error', error)
    })

    axios({
        url: "http://kjum.top:8083/work/getAllOperators",
        method: "get",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            authToken: sessionStorage.getItem('token')
        },

    }).then((response) => {
        console.log(response)
        for (let i in response.data.data) {
            exelist.push(response.data.data[i])
        }

    }).catch((error) => {
        console.log(error)
        Toast('error', error)
    })
})
const confirm = () => {

axios({
    url: "http://kjum.top:8083/work/addNewCourse",
    method: "post",
    data: {
        applicationId: id.value,
        operatorId: form.executer,
        cost: form.cost
    },
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        authToken: sessionStorage.getItem('token')
    },

}).then((response) => {
    console.log(response)
    if (response.data.code === 10000) {
        Toast('success', '添加课程成功')
    } else Toast('error', response.data.msg)
    router.replace("/employee/manageenroll")
}).catch((error) => {
    console.log(error)
    Toast('error', error)
})

}
</script>
