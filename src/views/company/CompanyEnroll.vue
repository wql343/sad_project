<template>
    <div class="mx-auto card bg-base-200 w-3/5 my-8 overscroll-auto p-16">

        <div class="form-control">
            <label class="label">
                <span class="label-text">课程类别</span>
            </label>
            <select class="select select-bordered w-full" v-model="form.field">
                <option disabled selected value="-1">选择类别</option>
                <option value="web前端开发">web前端</option>
                <option value="后端开发">后端</option>
                <option value="App开发">App开发</option>
                <option value="小程序开发">小程序开发</option>
            </select>
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">课程名称</span>
            </label>
            <input type="text" placeholder="name" class="input input-bordered" v-model="form.courseName" />
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">详细需求</span>
            </label>
            <textarea class="textarea textarea-bordered" placeholder="description" v-model="form.remark"></textarea>
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">学员资料</span>
            </label>
            <input type="file" class="file-input file-input-bordered w-full " @change="getStuinfo($event)"
                accept=".xls,.xlsx" />
        </div>
        <div class="flex w-full mt-6 justify-between">
            <button class="btn btn-primary w-2/5 " @click="confirm">申请</button>
            <button class="btn  w-2/5" @click="$router.replace('/company')">取消</button>
        </div>
    </div>
</template>
<script setup>
import axios from 'axios';
import * as XLSX from 'xlsx';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
const form = reactive({
    field: '-1',
    courseName: '',
    remark: '',
    studentInfoSummaryBeans: []
})
const getStuinfo = (e) => {
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
                form.studentInfoSummaryBeans.push({
                    username: item["账号"],
                    name: item["姓名"],
                    email: item["邮箱"]
                });
            });
            // 给后端发请求
        } catch (e) {
            return false;
        }
    };
    fileReader.readAsBinaryString(file);
    console.log(form.studentInfoSummaryBeans)
}
const router = useRouter()
const confirm = () => {
    console.log(form)
    axios({
            url: "http://kjum.top:8083/work/addApplicationForCompany",
            method:'post',
            data:form,
            headers: {
            'Content-Type': 'application/json',
            authToken: sessionStorage.getItem('token')
        }
    }).then((response)=>{
        console.log(response)
       router.replace('/company')
    }).catch((error)=>{
        console.log(error)
    })
}

</script>
