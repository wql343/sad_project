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
            <ul class="steps bg-base-200 rounded-lg py-2">
                <li class="step step-primary">分配讲师</li>
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
            <button class="btn btn-primary w-full">返回</button>
        </div>
    </div>
</template>
<script setup>
import Table from '../../../../components/common/table.vue';
import { reactive } from 'vue';
const studentprops = reactive({
    title: '学员资料汇总',
    head: ['申请人', '课程方向', '课程名称', '申请时间'],
    list: [
        ['111', '111', '111', '2022'], ['111', '111', '111', '2022'], ['111', '111', '111', '2022'],
    ]
})
</script>
