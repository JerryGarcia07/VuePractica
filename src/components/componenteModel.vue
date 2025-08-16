<template>
  <div>
    <h1>Mi nombre es {{ texto }}</h1>
    <input type="text" v-model="texto" placeholder="escribe un nombre" />
  </div>
  <div>
    <select v-model="selecionando">
      <option value="a">Opcion a</option>
      <option value="b">Opcion b</option>
      <option value="c">Opcion c</option>
      <option value="d">Opcion d</option>
    </select>
    <p>sleccionaste : {{ selecionando }}</p>
  </div>
  <div>
    <input type="checkbox" v-model="check" />
    <span>Acepto los termino y condiciones</span>
  </div>
</template>
<script setup>
import { ref } from 'vue'

let texto = ref('NOMBRE')
const selecionando = ref('selecciona')
const check = ref(false)
</script>
<style scoped></style>
