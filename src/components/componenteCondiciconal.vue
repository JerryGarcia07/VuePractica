<template>
  <div>
    <h2>Condicionales</h2>
    <div>
      <h3>v-show</h3>
      <button @click="changeVisible">alterar</button>
      <p v-show="visible">Hola soy visible con v*show</p>
    </div>
    <div>
      <h3>v-if, v-else y v-else-if</h3>
      <p v-if="visible">Esto es condicional if</p>
      <p v-else>esto es else if</p>
    </div>
    <div>
      <button v-if="loqueado" @click="loqueado = false">Iniciar sesion</button>
      <button v-else @click="loqueado = true">cerara sesion</button>
      <p v-if="loqueado">Bienvenido al iniciar sesion</p>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const visible = ref(true)
const changeVisible = () => {
  visible.value = !visible.value
}
const loqueado = ref(false)
</script>
<style scoped></style>
