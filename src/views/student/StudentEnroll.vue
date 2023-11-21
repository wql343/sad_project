<template>
    <div class="h-full overflow-scroll">
        <div class="mx-auto card bg-base-300 w-3/5 my-8 overscroll-auto p-16">

            <div class="form-control">
                <label class="label">
                    <span class="label-text ">课程名称</span>
                </label>
                <input class="input input-bordered bg-base-100" disabled placeholder="You can't touch this"
                    v-model="form.courseName" />
            </div>
            <div class="form-control">
                <label class="label">
                    <span class="label-text">课程方向</span>
                </label>
                <input class="input input-bordered bg-base-300" disabled placeholder="You can't touch this"
                    v-model="form.field" />
            </div>
            <div class="form-control">
                <label class="label">
                    <span class="label-text">课程内容</span>
                </label>
                <textarea type="text" placeholder="main" class="textarea textarea-bordered" v-model="form.content"
                    disabled />
            </div>
            <div class="form-control">
                <label class="label">
                    <span class="label-text">费用</span>
                </label>
                <input class="input input-bordered bg-base-300" disabled placeholder="You can't touch this"
                    v-model="form.cost" />
            </div>
            <div class="form-control">
                <label class="label">
                    <span class="label-text">上课时间（系统会自动在课前通过邮箱提醒上课）</span>
                </label>
                <input class="input input-bordered bg-base-300" disabled placeholder="You can't touch this"
                    v-model="form.time" />
            </div>
            <div class="form-control">
                <label class="label">
                    <span class="label-text">姓名</span>
                </label>
                <input type="text" placeholder="name" class="input input-bordered " v-model="myform.name" />
            </div>
            <div class="form-control">
                <label class="label">
                    <span class="label-text">联系方式</span>
                </label>
                <input type="text" placeholder="email" class="input input-bordered" v-model="myform.email" />
            </div>
            <div class="flex w-full mt-6 justify-between">
                <button class="btn btn-primary w-2/5 " @click="confirm">申请</button>
                <button class="btn  w-2/5" @click="$router.replace('/student')">取消</button>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted, reactive } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import { useIdStore } from "../../store";
import { storeToRefs } from "pinia";
import { Toast } from "../../components/common/toast";
const router = useRouter()
const idStore = useIdStore()
const { id } = storeToRefs(idStore)
const form = reactive({
    courseName: '',
    field: '',
    cost: '',
    content: '',
    time: '',

})
const myform = reactive({
    id: id.value,
    name: '',
    email: ''
})
onMounted(() => {
    axios({
        url: "http://127.0.0.1:8083/student/getCourseInfo?courseId=" + id.value,
        method: "get",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            authToken: sessionStorage.getItem('token')
        },

    }).then((response) => {
        console.log(response)
        form.courseName = response.data.data.courseName
        form.field = response.data.data.field
        form.content = response.data.data.content
        form.time = response.data.data.time
        form.cost = response.data.data.cost + '元'
    }).catch((error) => {
        console.log(error)
        Toast('error', error)
    })
})
const confirm = () => {
    if (myform.email && myform.name) {
        axios({
            url: "http://127.0.0.1:8083/student/chooseNewCourse",
            method: "post",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                authToken: sessionStorage.getItem('token')
            },
            data: {
                courseId: myform.id,
                nameForCompany: myform.name,
                emailForCompany: myform.email,
            }
        }).then((response) => {
            console.log(response)
            if (response.data.code === 10000) {
                Toast('success', '选课成功')
            } else Toast('error', response.data.msg)
            router.replace('/student')
        }).catch((error) => {
            console.log(error)
            Toast('error', error)
        })
    } else Toast('warning', '必填项不完整')
}
</script>
