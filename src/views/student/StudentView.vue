<template>
    <div class="mx-auto w-4/5 my-4 overscroll-auto">
        <!-- <div class="collapse collapse-arrow rounded-lg">
            <input type="checkbox" class="peer" checked @click="change" />
            <div class="collapse-title bg-info text-info-content peer-checked:bg-base-200 peer-checked:text-base-content">
                <div class="text-xl font-black">
                    已报名课程
                </div>
            </div>
            <div v-if="isChecked"
                class="collapse-content  bg-info text-info-content peer-checked:bg-base-200 peer-checked:text-base-content">
                <div class="overflow-x-auto">
                    <table class="table w-full">
                    
                        <thead>
                            <tr>
                                <th></th>
                                <th>课程类别</th>
                                <th>课程名称</th>
                                <th>报名时间</th>
                                <th>状态</th>
                            </tr>
                        </thead>
                        <tbody>
                         
                            <tr>
                                <th>1</th>
                                <td>前端</td>
                                <td>html与css</td>
                                <td>2022年9月14日</td>
                                <td>成功</td>
                            </tr>
                         
                            <tr>
                                <th>2</th>
                                <td>前端</td>
                                <td>javascript入门</td>
                                <td>2022年10月11日</td>
                                <td>成功</td>
                            </tr>
                          
                            <tr>
                                <th>3</th>
                                <td>java</td>
                                <td>java入门</td>
                                <td>2022年11月3日</td>
                                <td>成功</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div> -->
        <Table :title="studentprops.title" :head="studentprops.head" :list="studentprops.list" :idlist="studentprops.idlist"
            :path="studentprops.path"></Table>
        <!-- 分割线 -->
        <div class="text-xl font-black ml-4 mt-8 mb-4">
            可报名课程
        </div>
        <Collapse :title="webprops.title" :courselist="webprops.courselist" />
        <Collapse :title="backendprops.title" :courselist="backendprops.courselist" />
        <Collapse :title="appprops.title" :courselist="appprops.courselist" />
        <Collapse :title="miniprops.title" :courselist="miniprops.courselist" />
    </div>
</template>
<script setup>
import axios from 'axios';
import Collapse from '../../components/student/collapse.vue'
import Table from '../../components/common/table.vue';
import { ref, reactive, onMounted } from 'vue'
import { Toast } from '../../components/common/toast';
const studentprops = reactive({
    title: '已报名课程',
    head: ['课程类别', '课程名称', '报名时间', '状态'],
    list: [

    ],
    idlist: [],
    path: "assess"

})
const webprops = reactive({
    title: 'web前端',
    courselist: []
})
const backendprops = reactive({
    title: '后端',
    courselist: []
})
const appprops = reactive({
    title: 'App开发',
    courselist: []
})
const miniprops = reactive({
    title: '小程序开发',
    courselist: []
})
onMounted(() => {
    axios({
        url: "http://kjum.top:8083/student/getMyCourse",
        method: "get",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            authToken: sessionStorage.getItem('token')
        },

    }).then((response) => {
        console.log(response)
        for (let i of response.data.data) {
            if (!i.situation)
                i.situation = "已结束"
            else
                i.situation = "待开始"
            studentprops.list.push([i.field, i.courseName, i.applyTime, i.situation])
            studentprops.idlist.push(i.courseId)
        }

    }).catch((error) => {
        console.log(error)
        Toast('error', error)
    })
    axios({
        url: "http://kjum.top:8083/student/getAllOptionalCourse",
        method: "get",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            authToken: sessionStorage.getItem('token')
        },

    }).then((response) => {
        console.log(response.data.data)
        webprops.courselist = response.data.data.webFrontList
        backendprops.courselist = response.data.data.backendList
        appprops.courselist = response.data.data.appList
        miniprops.courselist = response.data.data.miniProgramList
    }).catch((error) => {
        console.log(error)
        Toast('error', error)
    })
})
</script>