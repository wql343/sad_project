<template>
  <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
  <div class="min-h-screen">
    <topnav />
    <router-view />
  </div>
</template>
<script setup>
import topnav from './components/layout/topnav.vue';

</script>


