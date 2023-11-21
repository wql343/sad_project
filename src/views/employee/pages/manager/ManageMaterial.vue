<template>
    <div>
        <div class="flex justify-between my-4">
            <div class="text-xl font-black ml-4 mt-8 mb-4">
                导入讲师资料
            </div>
            <div class="text-xl font-black mt-8 mb-4">
                <label class="btn btn-square btn-ghost" @click="add" for="my-modal-6">
                    <svg t="1679202866068" class="inline-block w-5 h-5 stroke-current" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="2670" width="16" height="16">
                        <path
                            d="M863.488 475.989333h-318.506667V165.546667a35.968 35.968 0 1 0-72.021333 0v310.485333h-311.466667a35.968 35.968 0 1 0 0 72.021333h311.466667v311.466667a35.968 35.968 0 1 0 72.021333 0v-311.466667h318.506667a35.968 35.968 0 1 0 0-72.021333z"
                            fill="#2c2c2c" opacity=".65" p-id="2671"></path>
                    </svg>

                </label>
            </div>
        </div>
        <input type="checkbox" id="my-modal-6" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
            <div class="modal-box">
                <h3 class="font-bold text-lg mb-8">选择excel文件批量导入讲师</h3>
                <p class="mb-2">文件中的表格需包含<span class="font-bold">工号、姓名、职称、方向、邮箱、电话、备注</span>七列</p>
                <input type="file" class="file-input file-input-bordered w-full max-w-xs" @change="getteacher($event)" />
                <a href="/public/讲师导入表模板.xlsx">
                    <button class="btn btn-ghost">下载模板</button>
                </a>
                <div class="modal-action">
                    <label for="my-modal-6" class="btn btn-primary" @click="confirm()">确定</label>
                    <label for="my-modal-6" class="btn">取消</label>
                </div>
            </div>
        </div>
        <Table :title="teacherprops.title" :head="teacherprops.head" :list="teacherprops.list"
            :idlist="teacherprops.idlist" />
        <Table :title="studentprops.title" :head="studentprops.head" :list="studentprops.list"
            :idlist="studentprops.idlist" />
    </div>
</template>

<script setup>
import * as XLSX from 'xlsx';
import axios from 'axios';
import Table from '../../../../components/common/table.vue';
import { reactive, onMounted } from 'vue';
import { Toast } from '../../../../components/common/toast';
const teacherprops = reactive({
    title: '讲师资料',
    head: ['姓名', '联系方式', '讲授方向', '讲课次数'],
    list: [
    ],
    idlist: []
})
const studentprops = reactive({
    title: '学员资料',
    head: ['账号', '姓名', '邮箱', '上课次数'],
    list: [

    ],
    idlist: []
})
const form = reactive({
    teacherInfoParamBeans: []
})
const getteacher = (e) => {
    var file = e.target.files[0]
    console.log(file)
    const fileReader = new FileReader();
    fileReader.onload = ev => {
        try {
            const data = ev.target.result;
            const workbook = XLSX.read(data, {
                type: "binary"
            });
            const wsname = workbook.SheetNames[0]; //取第一张表
            const ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname]); //生成json表格内容
            // 从解析出来的数据中提取相应的数据
            ws.forEach(item => {
                form.teacherInfoParamBeans.push({
                    id: item['工号'],
                    name: item["姓名"],
                    title: item["职称"],
                    field: item['方向'],
                    email: item["邮箱"],
                    phoneNumber: item['电话'],
                    remark: item['备注'],
                });
            });
            // 给后端发请求
        } catch (e) {
            return false;
        }
    };
    fileReader.readAsBinaryString(file);
    console.log(form.teacherInfoParamBeans)
}
const confirm = () => {
    axios({
        url: "http://127.0.0.1:8083/work/updateTeachersInfo",
        method: 'post',
        data: form,
        headers: {
            'Content-Type': 'application/json',
            authToken: sessionStorage.getItem('token')
        }
    }).then((response) => {
        console.log(response)
        axios({
            url: "http://127.0.0.1:8083/work/getAllTeachers",
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
            Toast('error', error)
        })
    }).catch((error) => {
        console.log(error)
        Toast('error', error)
    })
}


onMounted(() => {
    axios({
        url: "http://127.0.0.1:8083/work/getAllStudents",
        method: "get",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            authToken: sessionStorage.getItem('token')
        },

    }).then((response) => {
        console.log(response)
        for (let i in response.data.data) {
            studentprops.list.push([response.data.data[i].account, response.data.data[i].name, response.data.data[i].email, response.data.data[i].courseNum])
            studentprops.idlist.push(0)
        }
    }).catch((error) => {
        console.log(error)
        Toast('error', error)
    })
    axios({
        url: "http://127.0.0.1:8083/work/getAllTeachers",
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
        Toast('error', error)
    })
})
</script>
