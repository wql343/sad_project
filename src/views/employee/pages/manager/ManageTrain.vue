<template>
    <div>
        <Table :title="courseprops.title" :head="courseprops.head" :list="courseprops.list" :path="courseprops.path" :idlist="courseprops.idlist"/>
    </div>
</template>

<script setup>
import axios from 'axios';
import Table from '../../../../components/common/table.vue';
import { reactive, onMounted } from 'vue';
import { Toast } from '../../../../components/common/toast';
const courseprops = reactive({
    title: '培训课程总表',
    head: ['课程名', '课程方向', '讲师', '课程进度'],
    list: [
        
    ],
    idlist:[],
    path:'/employee/traindetail'
})
onMounted(()=>{
    axios({
        url: "http://kjum.top:8083/work/getAllCourse",
        method: "get",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            authToken: sessionStorage.getItem('token')
        },

    }).then((response) => {
        console.log(response)
        for(let i in response.data.data)
        {   switch(response.data.data[i].state)
            {
                case 1:response.data.data[i].state = "未发布" 
                break;
                case 2:response.data.data[i].state = "报名中"
                break;
                case 3 :response.data.data[i].state = "已结束"
            }
            courseprops.list.push([response.data.data[i].courseName, response.data.data[i].field,response.data.data[i].teacherId,response.data.data[i].state])
            courseprops.idlist.push(response.data.data[i].id)
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

        for (let i in courseprops.list) {
            for (let j in response.data.data) {
                if (response.data.data[j].id == courseprops.list[i][2])
                    courseprops.list[i][2] = response.data.data[j].name
            }

        }
    })
        .catch((error) => {
            console.log(error)
            Toast('error', error)
        })
})
</script>
