<script setup>
import ComponenetePropValidacion from './components/componenetePropValidacion.vue'
import ComponenteProp from './components/componenteProp.vue'
import ComponentesEstados from './components/componentesEstados.vue'
import HelloWork from './components/helloWork.vue'
</script>

<template>
  <h1>Curso de Vue.js</h1>
  <h2>Componentes</h2>
  <hello-work></hello-work>
  <hr />
  <h2>componentes global</h2>
  <AnimeOld></AnimeOld>
  <hr />
  <h2>componente com props</h2>
  <componente-prop
    nombre="shana"
    :edad="15"
    :genero="true"
    :animes="['naruto', 'bleach', 'one piece']"
  ></componente-prop>
  <hr />
  <ComponenetePropValidacion -nombre="Ana" :-edad="15"></ComponenetePropValidacion>
  <ComponenetePropValidacion -edad="14"></ComponenetePropValidacion>
  <hr />
  <h2>esto es una estado</h2>
  <ComponentesEstados></ComponentesEstados>
</template>

<style scoped></style>
