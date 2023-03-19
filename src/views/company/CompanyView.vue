<template>
    <div class="mx-auto w-4/5 my-4 overscroll-auto">
        <div class="collapse collapse-arrow rounded-lg">
            <input type="checkbox" class="peer" checked @click="change" />
            <div class="collapse-title bg-info text-info-content peer-checked:bg-base-200 peer-checked:text-base-content">
                <div class="text-xl font-black">
                    已申请培训
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
                                <th>申请时间</th>
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
                                <td>通过，待缴费</td>
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
import { ref } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter();
const isChecked = ref(true)
const change = () => {
    isChecked.value = !isChecked.value
    console.log(isChecked.value)
}
const add = () => router.push('/company/enroll')
</script>