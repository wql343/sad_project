<template >
    <div class="card card-compact w-64 shadow-xl m-2 bg-accent" @click="toEnroll($event)" :id="props.id">
        <!-- <figure><img src="http://yun.itheima.com/Upload/Images/20211231/61ce744050fc1.jpg" /></figure> -->
        <!-- <figure><img src=“http://yun.itheima.com/Upload/Images/20230106/63b77a0ed1fb7.jpg”></figure> -->
        <div class="card-body">
            <div class="card-title text-base justify-around">
                <div class="w-1/2">{{props.name}}</div>
                <div class="w-1/2">{{props.time}}</div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
import { useIdStore } from "../../store";
import { storeToRefs } from "pinia";
const idStore = useIdStore()
const { id } = storeToRefs(idStore)
const { setId } = idStore
const router = useRouter();
const toEnroll = (e) => {
    setId(e.currentTarget.id)
    router.replace("/student/enroll");
}

const props = defineProps(['name', 'time','id'])
</script>