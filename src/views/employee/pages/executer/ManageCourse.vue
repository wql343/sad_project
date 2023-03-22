<template>
    <div>
        <Table :title="courseprops.title" :head="courseprops.head" :list="courseprops.list" />
    </div>
</template>

<script setup>
import Table from '../../../../components/common/table.vue';
import { reactive } from 'vue';
const courseprops = reactive({
    title: '我执行的课程',
    head: ['课程名', '课程方向', '讲师', '课程状态'],
    list: [
    ['111', 'frontend', '未分配', '未分配讲师'], ['111', 'frontend', 'xxx', '报名中'], ['222', 'backend', 'xxx', '报名结束'], ['333', 'android', 'xxx', '正在上课'], ['444', 'android', 'xxx', '已完成']
    ]
})
</script>
