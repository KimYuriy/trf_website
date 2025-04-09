<template>
  <v-app class="bg">
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
</script>

<style scoped>
.bg {
  background: url('/images/background.jpg');
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
}
</style>