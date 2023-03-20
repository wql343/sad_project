<template>
    <div class="mx-auto w-4/5 my-4 overscroll-auto">
        <div class="collapse collapse-arrow rounded-lg">
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
                        <!-- head -->
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
                            <!-- row 1 -->
                            <tr>
                                <th>1</th>
                                <td>前端</td>
                                <td>html与css</td>
                                <td>2022年9月14日</td>
                                <td>成功</td>
                            </tr>
                            <!-- row 2 -->
                            <tr>
                                <th>2</th>
                                <td>前端</td>
                                <td>javascript入门</td>
                                <td>2022年10月11日</td>
                                <td>成功</td>
                            </tr>
                            <!-- row 3 -->
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
        </div>
        <!-- 分割线 -->
        <div class="text-xl font-black ml-4 mt-8 mb-4">
            可报名课程
        </div>
        <Collapse />
        <Collapse />
        <Collapse />
        <Collapse />
    </div>
</template>
<script setup>
import Collapse from '../../components/student/collapse.vue'
import { ref } from 'vue'
const isChecked = ref(true)
const change = () => {
    isChecked.value = !isChecked.value
    console.log(isChecked.value)
}
</script>