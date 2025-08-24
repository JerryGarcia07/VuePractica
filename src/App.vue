<script setup>
import { ref } from 'vue'
import ComponenetePropValidacion from './components/componenetePropValidacion.vue'
import ComponenteEvento from './components/componenteEvento.vue'
import ComponenteModel from './components/componenteModel.vue'
import ComponenteProp from './components/componenteProp.vue'
import ComponentesEstados from './components/componentesEstados.vue'
import HelloWork from './components/helloWork.vue'
import ComponeneteModelHijo from './components/componeneteModelHijo.vue'
import ComponenteIntercopilation from './components/componenteIntercopilation.vue'
import ComponenteCondiciconal from './components/componenteCondiciconal.vue'
import ComponeneteBlingTemplate from './components/componeneteBlingTemplate.vue'

const NombreUser = ref('')
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
  <hr />
  <h2>Eventos</h2>
  <ComponenteEvento></ComponenteEvento>
  <hr />
  <h2>Es V-model</h2>
  <ComponenteModel></ComponenteModel>
  <h2>componente v-model</h2>
  <h4>Mi Nombre es {{ NombreUser }}</h4>
  <ComponeneteModelHijo v-model="NombreUser"></ComponeneteModelHijo>
  <hr />
  <ComponenteIntercopilation></ComponenteIntercopilation>
  <hr />
  <ComponenteCondiciconal></ComponenteCondiciconal>
  <hr />
  <ComponeneteBlingTemplate></ComponeneteBlingTemplate>
</template>

<style scoped></style>
