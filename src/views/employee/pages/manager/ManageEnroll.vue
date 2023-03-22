<template>
    <div>
        <Table :title="alreadyprops.title" :head="alreadyprops.head" :list="alreadyprops.list" :path="alreadyprops.path" />
        <Table :title="neverprops.title" :head="neverprops.head" :list="neverprops.list" :path="neverprops.path" />
    </div>
</template>

<script setup>
import Table from '../../../../components/common/table.vue';
import { reactive } from 'vue';
const alreadyprops = reactive({
    title: '已处理申请',
    head: ['申请人', '课程方向', '课程名称', '申请时间'],
    list: [
        ['111', '111', '111', '2022'], ['111', '111', '111', '2022'], ['111', '111', '111', '2022'],
    ],
    path:"/employee/addenroll"
})
const neverprops = reactive({
    title: '待处理申请',
    head: ['申请人', '课程方向', '课程名称', '申请时间'],
    list: [
        ['111', '111', '111', '2022'], ['111', '111', '111', '2022'], ['111', '111', '111', '2022'],
    ],
    path:"/employee/addenroll"
})
</script>
