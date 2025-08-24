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
    <div>
      <h3>esto es un listado</h3>
      <ul>
        <li v-for="list in lista" :key="list.id">
          {{ list }}
        </li>
      </ul>
      <h3>listado de obejtos</h3>
      <ul>
        <li v-for="anime in objetosAnime" :key="anime.nombre">
          {{ anime.nombre }} : {{ anime.genero }}
        </li>
      </ul>
    </div>
    <h3>Lisado de un obejto</h3>
    <ul>
      <li v-for="(nombre, key) in anime" :key="key">{{ key }} : {{ nombre }}</li>
    </ul>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const visible = ref(true)
const changeVisible = () => {
  visible.value = !visible.value
}
const loqueado = ref(false)

const lista = ['shana', 'hana', 'Kana', 'Anne', 'Anma', 'sakura']
const objetosAnime = [
  { nombre: 'Death Note', genero: 'Suspenso, misterio, sobrenatural' },
  { nombre: 'Espada Tessaiga', genero: 'Fantasía, aventura, acción, romance' },
  { nombre: 'Esferas del Dragón', genero: 'Acción, aventura, fantasía' },
  { nombre: 'Llaves Celestiales', genero: 'Fantasía, aventura, magia, acción' },
  { nombre: 'Guantelete de Alquimia', genero: 'Aventura, acción, drama, fantasía' },
  { nombre: 'Poké Ball', genero: 'Aventura, fantasía, acción' },
  { nombre: 'Kunikida’s Notebook', genero: 'Acción, misterio, sobrenatural' },
]
const anime = {
  nombre: 'Death Note',
  genero: 'Suspenso, misterio, sobrenatural',
  autor: 'Tsugumi Ōba',
  estudio: 'Madhouse',
  anio: 2006,
  episodios: 37,
}
</script>
<style scoped></style>
