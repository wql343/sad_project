<template>
    <div>
        <Table :title="alreadyprops.title" :head="alreadyprops.head" :list="alreadyprops.list" :path="alreadyprops.path"
            :idlist="alreadyprops.idlist" />
            <Table :title="neverprops.title" :head="neverprops.head" :list="neverprops.list" :path="neverprops.path"
            :idlist="neverprops.idlist" />
    </div>
</template>

<script setup>
import Table from '../../../../components/common/table.vue';
import axios, { formToJSON } from 'axios';
import { reactive, onMounted } from 'vue';
import { Toast } from '../../../../components/common/toast';
// const courseprops = reactive({
//     title: '我执行的课程',
//     head: ['课程名', '课程方向', '讲师', '课程状态'],
//     list: [
//     ['111', 'frontend', '未分配', '未分配讲师'], ['111', 'frontend', 'xxx', '报名中'], ['222', 'backend', 'xxx', '报名结束'], ['333', 'android', 'xxx', '正在上课'], ['444', 'android', 'xxx', '已完成']
//     ],
//     idlist:[0,0,0,0],
//     path:"/employee/publishcourse"
// })
const alreadyprops = reactive({
    title: "已发布的课程",
    head: ['课程名', '课程方向', '讲师'],
    list: [

    ],
    idlist: [],
    path: "/employee/publishcourse"

})
const neverprops = reactive({
    title: "未发布的课程",
    head: ["课程名", "课程方向","讲师"],
    list: [],
    idlist: [],
    path: "/employee/publishcourse"
})
onMounted(() => {
    axios({
        url: "http://kjum.top:8083/work/getAllCourseUndone",
        method: "get",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            authToken: sessionStorage.getItem('token')
        },

    }).then((response) => {
        console.log(response)
        for (let i in response.data.data) {
            neverprops.list.push([ response.data.data[i].field, response.data.data[i].courseName,"未分配"],)
            neverprops.idlist.push(response.data.data[i].id)

        }

    }).catch((error) => {
        console.log(error)
        Toast('error', error)
    })
    axios({
        url: "http://kjum.top:8083/work/getAllCourseDone",
        method: "get",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            authToken: sessionStorage.getItem('token')
        },

    }).then((response) => {
        console.log(response)
        for (let i in response.data.data) {
            alreadyprops.list.push([response.data.data[i].courseName, response.data.data[i].field, response.data.data[i].teacherId])
            alreadyprops.idlist.push(response.data.data[i].id)

        }
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

        for (let i in alreadyprops.list) {
            for (let j in response.data.data) {
                if (response.data.data[j].id == alreadyprops.list[i][2])
                    alreadyprops.list[i][2] = response.data.data[j].name
            }

        }
        console.log(alreadyprops.list)
    })
        .catch((error) => {
            console.log(error)
            Toast('error', error)
        })
})
</script>
