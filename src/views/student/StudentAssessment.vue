<template>
 
    <div class="mx-auto card bg-base-300 w-3/5 my-4 overscroll-auto p-16">
        <div class="text-xl font-black  mt-8 mb-4">
            感谢您的反馈！
        </div>
        <div class="form-control my-4">
            <label class="label">
                <span class="label-text ">评分</span>
            </label>
            <div class="rating gap-1">
                <input type="radio" name="rating-3" class="mask mask-heart bg-red-400" :checked="form.rate==1"/>
                <input type="radio" name="rating-3" class="mask mask-heart bg-orange-400" :checked="form.rate==2"/>
                <input type="radio" name="rating-3" class="mask mask-heart bg-yellow-400" :checked="form.rate==3"/>
                <input type="radio" name="rating-3" class="mask mask-heart bg-lime-400" :checked="form.rate==4"/>
                <input type="radio" name="rating-3" class="mask mask-heart bg-green-400" :checked="form.rate==5"/>
              </div>
        </div>
        <div class="form-control my-4">
            <label class="label">
                <span class="label-text">详情</span>
            </label>
            <textarea type="text" placeholder="main" class="textarea textarea-bordered" v-model="form.assess"  />
        </div>
        <div class="flex w-full mt-6 justify-between">
            <button class="btn btn-primary w-2/5 " @click="confirm">确定</button>
            <button class="btn  w-2/5" @click="$router.replace('/student')">取消</button>
        </div>
    </div>
</template>
<script setup>
import axios from 'axios';
import { reactive } from 'vue';
import { useRouter } from "vue-router";
import { useIdStore } from "../../store";
import { storeToRefs } from "pinia";
import { Toast } from '../../components/common/toast';

const idStore = useIdStore()
const { id } = storeToRefs(idStore)
const { setId } = idStore
const router = useRouter()
const form = reactive({
    rate:5,
    assess:''
})
const confirm =()=>{
    axios({
        url: "http://kjum.top:8083/student/addNewInvestigation",
        method: "post",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            authToken: sessionStorage.getItem('token')
        },
        data:{
            courseId:id.value,
            score:form.rate,
            idea:form.assess
        }
    }).then((response) => {
        console.log(response)
        if (response.data.code === 10000) {
            Toast('success', '评价提交成功')
        } else Toast('error', response.data.msg)
        router.replace("/student")
    }).catch((error) => {
        console.log(error)
    })
}
</script>