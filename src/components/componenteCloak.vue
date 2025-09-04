<template>
  <div v-cloak>
    <h2>esto es un cloa</h2>
    <p>{{ mensaje }}</p>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const mensaje = ref('hola vue')
</script>
<style scoped>
[v-cloak] {
  display: none;
}
</style>
