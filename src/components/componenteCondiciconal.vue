<template>
  <div>
    <h2>Condicionales</h2>
    <div>
      <h3>v-show</h3>
      <button @click="changeVisible">alterar</button>
      <p v-show="visible">Hola soy visible con v*show</p>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const visible = ref(true)
const changeVisible = () => {
  visible.value = !visible.value
}
</script>
<style scoped></style>
