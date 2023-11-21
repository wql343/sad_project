<template>
  <div class="h-screen overflow-hidden flex flex-col">
    <topnav />
    <router-view />
  </div>
</template>
<script setup>
import topnav from './components/layout/topnav.vue';

</script>


