<template>
    <div class="collapse collapse-arrow rounded-lg my-4">
        <input type="checkbox" class="peer" checked @click="change"/>
        <div class="collapse-title bg-info text-info-content peer-checked:bg-base-200 peer-checked:text-base-content">
            <div class="text-xl font-black">
                {{ props.title }}
            </div>
        </div>
        <div v-if="isChecked"
            class="collapse-content  bg-info text-info-content peer-checked:bg-base-200 peer-checked:text-base-content flex flex-wrap ">
            <Card v-for="item in props.courselist" :id="item.id" :name="item.courseName" :time="item.time"></Card>
           
        </div>
    </div>
</template>
<script setup>
import Card from './card.vue'
import { ref } from 'vue'
const isChecked = ref(true)
const change = () => {
    isChecked.value = !isChecked.value
    console.log(isChecked.value)
}
const props = defineProps(['title','courselist'])
</script>