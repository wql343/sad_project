<template>
    <div>
        <Table :title="teacherprops.title" :head="teacherprops.head" :list="teacherprops.list" :idlist="teacherprops.idlist"/>
    </div>
</template>

<script setup>
import axios from 'axios';
import Table from '../../../../components/common/table.vue';
import { reactive, onMounted } from 'vue';
const teacherprops = reactive({
    title: '讲师资料',
    head: ['姓名', '联系方式', '讲授方向', '讲课次数'],
    list: [
    ],
    idlist: []
})
onMounted(()=>{
    axios({
        url: "http://kjum.top:8083/work/getAllTeachers",
        method: "get",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            authToken: sessionStorage.getItem('token')
        },

    }).then((response) => {
        console.log(response)
        for (let i in response.data.data) {
            teacherprops.list.push([response.data.data[i].name, response.data.data[i].phoneNumber, response.data.data[i].field, response.data.data[i].courseNumber])
            teacherprops.idlist.push(response.data.data[i].id)
        }
    }).catch((error) => {
        console.log(error)
    })
})
</script>
gi