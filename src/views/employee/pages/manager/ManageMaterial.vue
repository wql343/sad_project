<template>
    <div>
        <div class="flex justify-between my-4">
            <div class="text-xl font-black ml-4 mt-8 mb-4">
                导出课程报表
            </div>
            <div class="text-xl font-black mt-8 mb-4">
                <label class="btn btn-square btn-ghost" @click="getcourse" for="my-modal-10">
                    <svg t="1681476676172" class="inline-block w-5 h-5 stroke-current" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="3791" width="16" height="16">
                        <path
                            d="M896 629.333333c-17.066667 0-32 14.933333-32 32v170.666667c0 6.4-4.266667 10.666667-10.666667 10.666667H170.666667c-6.4 0-10.666667-4.266667-10.666667-10.666667v-170.666667c0-17.066667-14.933333-32-32-32s-32 14.933333-32 32v170.666667c0 40.533333 34.133333 74.666667 74.666667 74.666667h682.666666c40.533333 0 74.666667-34.133333 74.666667-74.666667v-170.666667c0-17.066667-14.933333-32-32-32z"
                            fill="#2c2c2c" p-id="3792"></path>
                        <path
                            d="M322.133333 407.466667l157.866667-157.866667V704c0 17.066667 14.933333 32 32 32s32-14.933333 32-32V247.466667l157.866667 157.866666c6.4 6.4 14.933333 8.533333 23.466666 8.533334s17.066667-2.133333 23.466667-8.533334c12.8-12.8 12.8-32 0-44.8l-213.333333-213.333333c-12.8-12.8-32-12.8-44.8 0l-213.333334 213.333333c-12.8 12.8-12.8 32 0 44.8 10.666667 12.8 32 12.8 44.8 2.133334z"
                            fill="#2c2c2c" p-id="3793"></path>
                    </svg>
                </label>
            </div>
        </div>
        <div class="flex justify-between my-4">
            <div class="text-xl font-black ml-4 mt-8 mb-4">
                导入/导出讲师资料
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
                <label class="btn btn-square btn-ghost" @click="expo" for="my-modal-7">
                    <svg t="1681476676172" class="inline-block w-5 h-5 stroke-current" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="3791" width="16" height="16">
                        <path
                            d="M896 629.333333c-17.066667 0-32 14.933333-32 32v170.666667c0 6.4-4.266667 10.666667-10.666667 10.666667H170.666667c-6.4 0-10.666667-4.266667-10.666667-10.666667v-170.666667c0-17.066667-14.933333-32-32-32s-32 14.933333-32 32v170.666667c0 40.533333 34.133333 74.666667 74.666667 74.666667h682.666666c40.533333 0 74.666667-34.133333 74.666667-74.666667v-170.666667c0-17.066667-14.933333-32-32-32z"
                            fill="#2c2c2c" p-id="3792"></path>
                        <path
                            d="M322.133333 407.466667l157.866667-157.866667V704c0 17.066667 14.933333 32 32 32s32-14.933333 32-32V247.466667l157.866667 157.866666c6.4 6.4 14.933333 8.533333 23.466666 8.533334s17.066667-2.133333 23.466667-8.533334c12.8-12.8 12.8-32 0-44.8l-213.333333-213.333333c-12.8-12.8-32-12.8-44.8 0l-213.333334 213.333333c-12.8 12.8-12.8 32 0 44.8 10.666667 12.8 32 12.8 44.8 2.133334z"
                            fill="#2c2c2c" p-id="3793"></path>
                    </svg>
                </label>
            </div>
        </div>
        <div class="flex justify-between my-4">
            <div class="text-xl font-black ml-4 mt-8 mb-4">
                导入/导出学生资料
            </div>
            <div class="text-xl font-black mt-8 mb-4">
                <label class="btn btn-square btn-ghost" for="my-modal-8">
                    <svg t="1679202866068" class="inline-block w-5 h-5 stroke-current" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="2670" width="16" height="16">
                        <path
                            d="M863.488 475.989333h-318.506667V165.546667a35.968 35.968 0 1 0-72.021333 0v310.485333h-311.466667a35.968 35.968 0 1 0 0 72.021333h311.466667v311.466667a35.968 35.968 0 1 0 72.021333 0v-311.466667h318.506667a35.968 35.968 0 1 0 0-72.021333z"
                            fill="#2c2c2c" opacity=".65" p-id="2671"></path>
                    </svg>

                </label>
                <label class="btn btn-square btn-ghost" for="my-modal-9">
                    <svg t="1681476676172" class="inline-block w-5 h-5 stroke-current" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="3791" width="16" height="16">
                        <path
                            d="M896 629.333333c-17.066667 0-32 14.933333-32 32v170.666667c0 6.4-4.266667 10.666667-10.666667 10.666667H170.666667c-6.4 0-10.666667-4.266667-10.666667-10.666667v-170.666667c0-17.066667-14.933333-32-32-32s-32 14.933333-32 32v170.666667c0 40.533333 34.133333 74.666667 74.666667 74.666667h682.666666c40.533333 0 74.666667-34.133333 74.666667-74.666667v-170.666667c0-17.066667-14.933333-32-32-32z"
                            fill="#2c2c2c" p-id="3792"></path>
                        <path
                            d="M322.133333 407.466667l157.866667-157.866667V704c0 17.066667 14.933333 32 32 32s32-14.933333 32-32V247.466667l157.866667 157.866666c6.4 6.4 14.933333 8.533333 23.466666 8.533334s17.066667-2.133333 23.466667-8.533334c12.8-12.8 12.8-32 0-44.8l-213.333333-213.333333c-12.8-12.8-32-12.8-44.8 0l-213.333334 213.333333c-12.8 12.8-12.8 32 0 44.8 10.666667 12.8 32 12.8 44.8 2.133334z"
                            fill="#2c2c2c" p-id="3793"></path>
                    </svg>
                </label>
            </div>
        </div>
        <input type="checkbox" id="my-modal-6" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
            <div class="modal-box">
                <h3 class="font-bold text-lg mb-8">选择excel文件批量导入教师</h3>
                <input type="file" class="file-input file-input-bordered w-full max-w-xs" @change="getteacher($event)" />
                <div class="modal-action">
                    <label for="my-modal-6" class="btn btn-primary" @click="confirm()">确定</label>
                    <label for="my-modal-6" class="btn">取消</label>
                </div>
            </div>
        </div>
        <input type="checkbox" id="my-modal-7" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
            <div class="modal-box">
                <h3 class="font-bold text-lg mb-8">是否确定导出教师名单</h3>
                <div class="modal-action">
                    <label for="my-modal-7" class="btn btn-primary" @click="confirmexp(0)">确定</label>
                    <label for="my-modal-7" class="btn">取消</label>
                </div>
            </div>
        </div>
        <input type="checkbox" id="my-modal-8" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
            <div class="modal-box">
                <h3 class="font-bold text-lg mb-8">选择excel文件批量导入学生</h3>
                <input type="file" class="file-input file-input-bordered w-full max-w-xs" @change="getteacher($event)" />
                <div class="modal-action">
                    <label for="my-modal-8" class="btn btn-primary">确定</label>
                    <label for="my-modal-8" class="btn">取消</label>
                </div>
            </div>
        </div>
        <input type="checkbox" id="my-modal-9" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
            <div class="modal-box">
                <h3 class="font-bold text-lg mb-8">是否确定导出学生名单</h3>
                <div class="modal-action">
                    <label for="my-modal-9" class="btn btn-primary">确定</label>
                    <label for="my-modal-9" class="btn">取消</label>
                </div>
            </div>
        </div>
        <input type="checkbox" id="my-modal-10" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
            <div class="modal-box">
                <h3 class="font-bold text-lg mb-8">是否确定导出课程报表</h3>
                <div class="modal-action">
                    <label for="my-modal-10" class="btn btn-primary" @click="confirmexp(1)">确定</label>
                    <label for="my-modal-10" class="btn">取消</label>
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
import { exportExcel } from '../../../../utils/exportxlsx';
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
const courseprops = reactive({
    head:['课程','方向','申请人','执行人','讲师','学生数','收入'],
    list:[]
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
        url: "http://kjum.top:8083/work/updateTeachersInfo",
        method: 'post',
        data: form,
        headers: {
            'Content-Type': 'application/json',
            authToken: sessionStorage.getItem('token')
        }
    }).then((response) => {
        console.log(response)
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
            Toast('error', error)
        })
    }).catch((error) => {
        console.log(error)
        Toast('error', error)
    })
}
const confirmexp = (i) => {
    if (i === 0)
        exportExcel(teacherprops.list, '教师名单', teacherprops.head, "sheetName")

    else
        exportExcel(courseprops.list, '课程报表', courseprops.head, "sheetName")


}
const getcourse =()=>{
    axios({
        url: "http://kjum.top:8083/work/getReport",
        method: "get",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            authToken: sessionStorage.getItem('token')
        },

    }).then((response) => {
        console.log(response)
        for(let i of response.data.data)
        courseprops.list.push([i.courseName,i.field,i.companyName,i.operaterName,i.teacherName,i.studentNum,i.money+'元'])
    }).catch((error) => {
        console.log(error)
    })
}
onMounted(() => {
    axios({
        url: "http://kjum.top:8083/work/getAllStudents",
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
        Toast('error', error)
    })
})
</script>
