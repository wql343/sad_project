<template>
    <div class="mx-auto w-4/5 my-4 overscroll-auto">
        <Table :title="props.title" :head="props.head" :list="props.list" :idlist="props.idlist"/>
        <div class="flex justify-between">
            <div class="text-xl font-black ml-4 mt-8 mb-4">
                发起新申请
            </div>
            <div class="text-xl font-black mt-8 mb-4">
                <button class="btn btn-square btn-ghost" @click="add">
                    <svg t="1679202866068" class="inline-block w-5 h-5 stroke-current" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="2670" width="16" height="16">
                        <path
                            d="M863.488 475.989333h-318.506667V165.546667a35.968 35.968 0 1 0-72.021333 0v310.485333h-311.466667a35.968 35.968 0 1 0 0 72.021333h311.466667v311.466667a35.968 35.968 0 1 0 72.021333 0v-311.466667h318.506667a35.968 35.968 0 1 0 0-72.021333z"
                            fill="#2c2c2c" opacity=".65" p-id="2671"></path>
                    </svg>

                </button>
            </div>
        </div>
        <div class="alert alert-error shadow-lg">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    class="stroke-current flex-shrink-0 w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>发起申请前，请务必先与经理协商</span>
            </div>
        </div>
    </div>
</template>
<script setup>
import axios from 'axios';
import { ref, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Table from '../../components/common/table.vue';
const router = useRouter();
const add = () => {
    router.replace('/company/enroll')
}
onMounted(()=>{
    axios({
        url: "http://kjum.top:8083/work/getMyApplicationForCompany",
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
                case 0:response.data.data[i].state = "待审批" 
                break;
                case 1:response.data.data[i].state = "通过"
                break;
            }
            props.list.push([ response.data.data[i].field,response.data.data[i].courseName,response.data.data[i].applyDate,response.data.data[i].state])
            props.idlist.push(response.data.data[i].id)
        }
    }).catch((error) => {
        console.log(error)
    })
})
const props = reactive({
    title: '已申请培训',
    head: ['课程类别', '课程名称', '申请时间', '状态'],
    list: [],
    idlist:[]
})
</script>