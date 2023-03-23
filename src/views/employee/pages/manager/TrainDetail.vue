<template>
    <div class="mx-auto card bg-base-300 w- mb-8 overscroll-auto p-16">
        <div class="form-control">
            <label class="label">
                <span class="label-text">课程名称</span>
            </label>
            <input disabled class="input input-bordered" value="course name" />
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">课程方向</span>
            </label>
            <input disabled class="input input-bordered" value="前端或者后端" />
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">讲师</span>
            </label>
            <input disabled class="input input-bordered" value="某位讲师" />
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">执行人</span>
            </label>
            <input disabled class="input input-bordered" value="某位执行人" />
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">执行人工作进度</span>
            </label>
            <ul class="steps bg-base-200 rounded-lg pb-2 pt-4">
                <li class="step step-primary">发布课程</li>
                <li class="step">完成外部学员报名</li>
                <li class="step">通知上课</li>
            </ul>
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">学员</span>
            </label>
            <Table :title="studentprops.title" :head="studentprops.head" :list="studentprops.list" />
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">课程收入</span>
            </label>
            <input disabled class="input input-bordered" value="￥88888" />
        </div>
        <div class="flex w-full mt-6 justify-center">
            <button class="btn btn-primary w-full" @click="$router.replace('/employee/managetrain')">返回</button>
        </div>
    </div>
</template>
<script setup>
import Table from '../../../../components/common/table.vue';
import { reactive } from 'vue';
const studentprops = reactive({
    title: '学员资料汇总',
    head: ['姓名', '账号', '联系方式'],
    list: [
        ['张三', '2344371', '3224177294@qq.com', ],  ['张三', '2344371', '3224177294@qq.com', ],  ['张三', '2344371', '3224177294@qq.com', ],
    ]
})
</script>
