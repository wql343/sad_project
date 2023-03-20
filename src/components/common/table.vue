<template>
    <div class="collapse collapse-arrow rounded-lg mb-4">
        <input type="checkbox" class="peer" checked @click="change" />
        <div class="collapse-title bg-info text-info-content peer-checked:bg-base-200 peer-checked:text-base-content">
            <div class="text-xl font-black">
                {{ props.title }}
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
                            <th v-for="item in props.head">{{ item }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- row 1 -->
                        <tr v-for="(main, index) in props.list " class="hover cursor-pointer">
                            <th>{{ index + 1 }}</th>
                            <td v-for="item in main" :innerHTML="item"></td>
                        </tr>
                        <!-- row 2
                        <tr>
                            <th>2</th>
                            <td>前端</td>
                            <td>javascript入门</td>
                            <td>2022年10月11日</td>
                            <td>成功</td>
                        </tr>
                        row 3
                        <tr>
                            <th>3</th>
                            <td>java</td>
                            <td>java入门</td>
                            <td>2022年11月3日</td>
                            <td>成功</td>
                        </tr> -->
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, defineProps } from "vue"
const isChecked = ref(true)
const change = () => {
    isChecked.value = !isChecked.value
    console.log(isChecked.value)
}
const props = defineProps(['title', 'head', 'list'])
</script>