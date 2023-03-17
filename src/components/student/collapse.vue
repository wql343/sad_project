<template>
    <div class="collapse collapse-arrow rounded-lg my-4">
        <input type="checkbox" class="peer" checked @click="change"/>
        <div class="collapse-title bg-info text-info-content peer-checked:bg-base-200 peer-checked:text-base-content">
            <div class="text-xl font-black">
                前端
            </div>
        </div>
        <div v-if="isChecked"
            class="collapse-content  bg-info text-info-content peer-checked:bg-base-200 peer-checked:text-base-content flex flex-wrap ">
            <card/>
            <card/>
            <card/>
        </div>
    </div>
</template>
<script setup>
import card from './card.vue'
import { ref } from 'vue'
const isChecked = ref(true)
const change = () => {
    isChecked.value = !isChecked.value
    console.log(isChecked.value)
}
</script>