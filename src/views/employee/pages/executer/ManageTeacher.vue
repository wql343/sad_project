<template>
    <div>
        <Table :title="teacherprops.title" :head="teacherprops.head" :list="teacherprops.list" />
    </div>
</template>

<script setup>
import Table from '../../../../components/common/table.vue';
import { reactive } from 'vue';
const teacherprops = reactive({
    title: '讲师资料',
    head: ['姓名', '联系方式', '讲授方向', '讲课次数'],
    list: [
        ['111', '12345678900', '111', '111',], ['111', '12345678900', '111', '111',], ['111', '12345678900', '111', '111',],
    ]
})
</script>
gi