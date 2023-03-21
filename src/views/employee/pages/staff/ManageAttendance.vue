<template>
    <div>
        <Table :title="courseprops.title" :head="courseprops.head" :list="courseprops.list" />
    </div>
</template>

<script setup>
import Table from '../../../../components/common/table.vue';
import { reactive } from 'vue';
const courseprops = reactive({
    title: '进行中课程',
    head: ['课程名', '地点', '讲师', '开始时间', '状态'],
    list: [
        ['111', 'M102', 'xxx', '2023/03/20 10:00:00', '未开始签到'], ['222', 'M202', 'xxx', '2023/03/20 10:00:00', '未开始签到'], ['333', 'M302', 'xxx', '2023/03/20 10:00:00', '正在签到'], ['444', 'M402', 'xxx', '2023/03/20 10:00:00', '签到已结束']
    ]
})
</script>
