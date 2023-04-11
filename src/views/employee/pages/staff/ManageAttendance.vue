<template>
    <div>
        <Table :title="courseprops.title" :head="courseprops.head" :list="courseprops.list" :idlist="courseprops.idlist" :path="courseprops.path"/>
    </div>
</template>

<script setup>
import Table from '../../../../components/common/table.vue';
import { reactive,onMounted } from 'vue';
import axios from 'axios';
const courseprops = reactive({
    title: '可签到课程',
    head: ['课程名', '地点', '讲师', '开始时间'],
    list: [
    ],
    idlist: [],
    path:'/employee/addattendance'
})
onMounted(()=>{
    axios({
        url: "http://kjum.top:8083/work/getAllAssignableCourse",
        method: "get",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            authToken: sessionStorage.getItem('token')
        },

    }).then((response) => {
        console.log(response)
        for(let i in response.data.data)
        {   
            courseprops.list.push([response.data.data[i].courseName, response.data.data[i].place,response.data.data[i].teacherId,response.data.data[i].time])
            courseprops.idlist.push(response.data.data[i].id)
        }
    }).catch((error) => {
        console.log(error)
    })
    axios({
        url: "http://kjum.top:8083/work/getAllTeachers",
        method: "get",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            authToken: sessionStorage.getItem('token')
        },
    }).then((response) => {

        for (let i in courseprops.list) {
            for (let j in response.data.data) {
                if (response.data.data[j].id == courseprops.list[i][2])
                    courseprops.list[i][2] = response.data.data[j].name
            }

        }
        console.log(alreadyprops.list)
    })
        .catch((error) => {
            console.log(error)
        })
})

</script>
