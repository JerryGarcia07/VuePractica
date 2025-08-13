<template>
  <p>Nombre {{ Nombre }}</p>
  <p>edad {{ edad }}</p>
  <button @click="sumar">Aceptar</button>
  <h3>Animes favoritos</h3>
  <p>Nombre: {{ anime.name }}</p>
  <p>Episodios: {{ anime.episodios }}</p>
  <button @click="cap">Aceptar</button>
</template>
<script setup>
import { reactive, ref } from 'vue'

const Nombre = ref('Sakura')
let edad = ref(15)
const anime = reactive({
  name: 'naruto',
  episodios: 25,
})

const sumar = () => {
  edad.value++
}

const cap = () => {
  anime.episodios++
}
</script>
<style scoped></style>
