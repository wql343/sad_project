<template>
    <div class="collapse collapse-arrow rounded-lg mb-4 ">
        <input type="checkbox" class="peer" checked @click="change" />
        <div class="collapse-title bg-info text-info-content peer-checked:bg-base-200 peer-checked:text-base-content">
            <div class="text-xl font-black">
                学员列表
            </div>
        </div>
        <div v-if="isChecked"
            class="collapse-content  bg-info text-info-content peer-checked:bg-base-200 peer-checked:text-base-content">
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <!-- head -->
                    <thead>
                        <tr>
                            <th></th>
                            <th v-for="item in table.head">{{ item }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- row 1 -->
                        <tr v-for="(main, index) in table.list" class="hover cursor-pointer" :id="table.idlist[index]">
                            <th>{{ index + 1 }}</th>
                            <td v-for="item in main">
                                <div>{{ item }}</div>

                            </td>
                            <td>
                                <button v-if="main[3] == '待签到'" :id="table.idlist[index]" class="btn btn-accent"
                                    @click="go($event)">签到</button>
                            </td>
                        </tr>
                        <!-- row 2
                            <tr>
                                <th>2</th>
                                <td>前端</td>
                                <td>javascript入门</td>
                                <td>2022年10月11日</td>
                                <td>成功</td>
                            </tr>
                            row 3
                            <tr>
                                <th>3</th>
                                <td>java</td>
                                <td>java入门</td>
                                <td>2022年11月3日</td>
                                <td>成功</td>
                            </tr> -->
                    </tbody>
                </table>
            </div>
        </div>
        <button class="btn btn-primary mt-10" @click="$router.replace('/employee/manageattendance')"> 返回</button>
    </div>
</template>
<script  setup>
import { ref, defineProps, onMounted, reactive, nextTick } from "vue"

import { useRouter } from "vue-router";
import { useIdStore } from "../../../../store";
import { storeToRefs } from "pinia";
import axios from 'axios'
import { Toast } from "../../../../components/common/toast";
const idStore = useIdStore()
const { id } = storeToRefs(idStore)
const { setId } = idStore
const router = useRouter()
const isChecked = ref(true)
const change = () => {
    isChecked.value = !isChecked.value
    console.log(isChecked.value)
}
const table = reactive({

    head: ["账号", "姓名", "邮箱", "状态", ""],
    list: [],
    idlist: [],


})
const go = (e) => {
    const current = e.currentTarget
    console.log(e.currentTarget)
    setId(e.currentTarget.id)
    console.log(id.value)
    axios({
        url: "http://kjum.top:8083/work/doAssign?assignId=" + id.value,
        method: "get",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            authToken: sessionStorage.getItem('token')
        },

    }).then((response) => {
        console.log(response)
        for (let i in table.idlist) {
            if (table.idlist[i] == current.id) {
                table.list[i][3] = "已签到"
                break
            }
        }
        console.log(table.list)
        nextTick()
    }).catch((error) => {
        console.log(error)
    })
}
onMounted(() => {
    axios({
        url: "http://kjum.top:8083/work/getAssignStudentsInCourse?courseId=" + id.value,
        method: "get",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            authToken: sessionStorage.getItem('token')
        },

    }).then((response) => {
        console.log(response)
        if (response.data.code === 10000) {
            Toast('success', '签到成功')
        } else Toast('error', response.data.msg)
        for (let i in response.data.data) {
            if (response.data.data[i].assigned)
                response.data.data[i].assigned = "已签到"
            else response.data.data[i].assigned = "待签到"

            table.list.push([response.data.data[i].username, response.data.data[i].name, response.data.data[i].email, response.data.data[i].assigned])
            table.idlist.push(response.data.data[i].assignId)
            console.log(table)
        }
    }).catch((error) => {
        console.log(error)
    })
})
</script>