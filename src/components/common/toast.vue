<template>
  <div class="toast toast-top toast-center z-50" v-if="msg!==undefined">
    <div :class="'w-max max-w-xl alert alert-'+type">
      <div>
        <span class="break-all">{{ msg }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['type', 'msg'])
</script>