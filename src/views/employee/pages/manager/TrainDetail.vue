<template>
    <div class="mx-auto card bg-base-300 w- mb-8 overscroll-auto p-16">
        <div class="form-control">
            <label class="label">
                <span class="label-text">课程名称</span>
            </label>
            <input disabled class="input input-bordered" v-model="form.courseName" />
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">课程方向</span>
            </label>
            <input disabled class="input input-bordered" v-model="form.field" />
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">分配讲师</span>
            </label>
            <select class="select select-bordered" v-model="form.teacherId" disabled>
                <option :value="-1" disabled selected>请选择讲师</option>
                <option v-for="item in teacherlist" :value="item.id">{{ item.name }}</option>
            </select>
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">执行人</span>
            </label>
            <select class="select select-bordered" v-model="form.executer" disabled>
                <option disabled selected :value="-1">请选择执行人</option>
                <option v-for="item in exelist" :value="item.id">{{ item.name }}</option>
            </select>
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">执行人工作进度</span>
            </label>
            <ul class="steps bg-base-200 rounded-lg pb-2 pt-4">
                <li class="step step-primary">发布中</li>
                <li class="step" :class="form.state != 1 ? 'step-primary' : ''">报名中</li>
                <li class="step" :class="form.state == 3 ? 'step-primary' : ''">通知上课(完成)</li>
            </ul>
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">学员</span>
            </label>
            <Table :title="studentprops.title" :head="studentprops.head" :list="studentprops.list"
                :idlist="studentprops.idlist" />
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">课程收入</span>
            </label>
            <input disabled class="input input-bordered" v-model="form.monney" />
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">调查信息</span>
            </label>
            <Table :title="assessprops.title" :head="assessprops.head" :list="assessprops.list"
                :idlist="assessprops.idlist" />
        </div>
        <div class="flex w-full mt-6 justify-center">
            <button class="btn btn-primary w-full" @click="$router.replace('/employee/managetrain')">返回</button>
        </div>
    </div>
</template>
<script setup>
import Table from '../../../../components/common/table.vue';
import axios from 'axios';
import { useIdStore } from '../../../../store';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { reactive, onMounted } from 'vue';
import { Toast } from '../../../../components/common/toast';
const idStore = useIdStore()
const { id } = storeToRefs(idStore)
const router = useRouter()
const form = reactive({
    courseName: '',
    field: '',
    teacherId: -1,
    executer: -1,
    state: "",
    monney: "",
    rate:0,
    assess:""
})
const studentprops = reactive({
    title: '学员资料汇总',
    head: ['姓名', '账号', '联系方式'],
    list: [

    ],
    idlist: []
})
const assessprops = reactive({
    title: '调查表汇总',
    head: ['姓名', '邮箱', '评分','评价'],
    list: [

    ],
    idlist: []
})
const teacherlist = reactive([])
const exelist = reactive([])
onMounted(() => {
    console.log(id.value)
    axios({
        url: "http://kjum.top:8083/student/getCourseInfo?courseId=" + id.value,
        method: "get",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            authToken: sessionStorage.getItem('token')
        },

    }).then((response) => {
        console.log(response)
        form.courseName = response.data.data.courseName
        form.field = response.data.data.field
        form.teacherId = response.data.data.teacherId
        form.executer = response.data.data.operatorId

        form.state = response.data.data.state
    }).catch((error) => {
        console.log(error)
        Toast('error', error)
    })
    axios({
        url: "http://kjum.top:8083/work/getAllTeachers",
        method: "get",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            authToken: sessionStorage.getItem('token')
        },
    }).then((response) => {
        for (let i in response.data.data) {
            teacherlist.push(response.data.data[i])
        }
    })
        .catch((error) => {
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
        for (let i in response.data.data) {
            exelist.push(response.data.data[i])
        }
    })
        .catch((error) => {
            console.log(error)
            Toast('error', error)
        })
    axios({
        url: "http://kjum.top:8083/work/getStudentsInCourse?courseId=" + id.value,
        method: "get",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            authToken: sessionStorage.getItem('token')
        },
    }).then((response) => {
        console.log(response)
        for (let i in response.data.data) {
            studentprops.list.push([response.data.data[i].name, response.data.data[i].username, response.data.data[i].email])
            studentprops.idlist.push(response.data.data[i].id)
        }
    }).catch((error) => {
        console.log(error)
        Toast('error', error)
    })
    axios({
        url: "http://kjum.top:8083/work/getAllMoney?courseId=" + id.value,
        method: "get",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            authToken: sessionStorage.getItem('token')
        }
    }).then((response) => {
        console.log(response)
        form.monney = response.data.data + "元"
    }).catch((error) => {
        console.log(error)
        Toast('error', error)
    })
    axios({
        url: "http://kjum.top:8083/work/getCourseInvestigation?courseId=" + id.value,
        method: "get",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            authToken: sessionStorage.getItem('token')
        },
    }).then((response) => {
        console.log(response)
        for (let i in response.data.data) {
            assessprops.list.push([response.data.data[i].name,  response.data.data[i].email,response.data.data[i].score,response.data.data[i].idea])
            assessprops.idlist.push(response.data.data[i].id)
        }
    }).catch((error) => {
        console.log(error)
        Toast('error', error)
    })
})
</script>
