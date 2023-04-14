<template>
    <div>
        <Table :title="alreadyprops.title" :head="alreadyprops.head" :list="alreadyprops.list" :path="alreadyprops.path" :idlist="alreadyprops.idlist" />
        <Table :title="neverprops.title" :head="neverprops.head" :list="neverprops.list" :path="neverprops.path" :idlist="neverprops.idlist" />
    </div>
</template>

<script setup>
import Table from '../../../../components/common/table.vue';
import { useIdStore } from '../../../../store';
import { reactive, onMounted } from 'vue';
import { Toast } from '../../../../components/common/toast';
import axios from 'axios';
const idStore = useIdStore()
const {setInfo1,setInfo2}=idStore
const alreadyprops = reactive({
    title: '已处理申请',
    head: ['申请人', '课程方向', '课程名称', '申请时间'],
    list: [
    ],
    path: "/employee/addenroll",
    idlist:[]
})
const neverprops = reactive({
    title: '待处理申请',
    head: ['申请人', '课程方向', '课程名称', '申请时间'],
    list: [
    ],
    path: "/employee/addenroll",
    idlist:[]
})
onMounted(() => {
    axios({
        url: "http://kjum.top:8083/work/getAllApplicationUndone",
        method: "get",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            authToken: sessionStorage.getItem('token')
        },

    }).then((response) => {
        console.log(response)
        for(let i in response.data.data)
        {   
            neverprops.list.push([response.data.data[i].companyName, response.data.data[i].field,response.data.data[i].courseName, response.data.data[i].applyDate])
           neverprops.idlist.push(response.data.data[i].id)
            setInfo1(response.data.data)
        }

    }).catch((error) => {
        console.log(error)
        Toast('error', error)
    })
    axios({
        url: "http://kjum.top:8083/work/getAllApplicationDone",
        method: "get",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            authToken: sessionStorage.getItem('token')
        },

    }).then((response) => {
        console.log(response)
        for(let i in response.data.data)
        {   
            alreadyprops.list.push([response.data.data[i].companyName, response.data.data[i].field,response.data.data[i].courseName, response.data.data[i].applyDate])
            alreadyprops.idlist.push(response.data.data[i].id)
        }
    }).catch((error) => {
        console.log(error)
        Toast('error', error)
    })
})
</script>
