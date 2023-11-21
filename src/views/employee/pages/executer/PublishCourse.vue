<template>
    <div class="mx-auto card bg-base-300 w-full mb-8 overscroll-auto p-16">
        <div class="form-control">
            <label class="label">
                <span class="label-text">课程名称</span>
            </label>

            <input class="input input-bordered" v-model="form.courseName" />
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">课程方向</span>
            </label>
            <select class="select select-bordered" v-model="form.field">
                <option disabled selected>请选择方向</option>
                <option value="web前端开发">web前端开发</option>
                <option value="web后端开发">web后端开发</option>
                <option value="移动应用开发">移动应用开发</option>
                <option value="小程序开发">小程序开发</option>
            </select>
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">分配讲师</span>
            </label>
            <select class="select select-bordered" v-model="form.teacherId">
                <option :value="-1" disabled selected>请选择讲师</option>
                <option v-for="item in teacherlist" :value="item.id">{{ item.name }}</option>
            </select>
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">课程内容</span>
            </label>
            <textarea type="text" placeholder="main" class="textarea textarea-bordered" v-model="form.content" />
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">课程时间（系统会自动在开始前一天通知学员并截止报名 格式参考：2023-04-04 17:00）</span>
            </label>
            <input type="text" placeholder="time" class="input input-bordered" v-model="form.time" />
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">上课地点</span>
            </label>
            <input type="text" placeholder="place" class="input input-bordered" v-model="form.place" />
        </div>
        <div class="flex w-full mt-6 justify-between">
            <button class="btn btn-primary w-1/4" @click="confirm">发布课程</button>
            <button class="btn btn-secondary w-1/4" @click="generateHTML">生成HTML</button>
            <button class="btn  w-1/4" @click="$router.replace('/employee/managecourse')">取消</button>
        </div>
    </div>
</template>
<script setup>
import axios from 'axios';
import { useIdStore } from '../../../../store';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { reactive, onMounted } from 'vue';
import { Toast } from '../../../../components/common/toast';
const idStore = useIdStore()
const { id } = storeToRefs(idStore)
const router = useRouter()
const form = reactive({
    courseName: '',
    field: '',
    teacherId: -1,
    content: '',
    time: '',
    place: ''
})
const teacherlist = reactive([])
onMounted(() => {
    axios({
        url: "http://127.0.0.1:8083/student/getCourseInfo?courseId="+id.value,
        method: "get",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            authToken: sessionStorage.getItem('token')
        },

    }).then((response) => {
        console.log(response)
        form.courseName = response.data.data.courseName
        form.field = response.data.data.field
        form.teacherId = response.data.data.teacherId
        form.content = response.data.data.content
        form.time = response.data.data.time
        form.place = response.data.data.place
        console.log(form)

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
        for (let i in response.data.data) {
            teacherlist.push(response.data.data[i])
        }
    })
        .catch((error) => {
            console.log(error)
            Toast('error', error)
        })
})
const confirm = () => {
    axios({
        url: "http://127.0.0.1:8083/work/completeAndLaunchNewCourse",
        method: "post",
        data: {
            content: form.content,
            time: form.time,
            place: form.place,
            courseId: id.value,
            teacherId: form.teacherId,
        },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            authToken: sessionStorage.getItem('token')
        },

    }).then((response) => {
        console.log(response)
        if (response.data.code === 10000) {
            Toast('success', '成功发布课程')
        } else Toast('error', response.data.msg)
        router.replace('/employee/managecourse')
    }).catch((error) => {
        console.log(error)
        Toast('error', error)
    })
}
const generateHTML = () => {
    let teacherStr
    for (let item of teacherlist) {
        if (item.id === form.teacherId)
            teacherStr = item.name
    }
    let html = "<html><body><div>"
    html += `<h1>课程信息</h1>`
    html += `<h2>课程名称</h2><p>${form.courseName}</p>`
    html += `<h2>课程方向</h2><p>${form.field}</p>`
    html += `<h2>讲师</h2><p>${teacherStr}</p>`
    html += `<h2>课程内容</h2><p>${form.content}</p>`
    html += `<h2>课程时间</h2><p>${form.time}</p>`
    html += `<h2>课程地点</h2><p>${form.place}</p>`
    html += "</div></body></html>"

    const link = document.createElement('a');
    link.download = "index.html"
    link.style.display = "none"

    const blob = new Blob([html], { type: "text/html" })
    link.href = window.URL.createObjectURL(blob)
    link.click()
}
</script>