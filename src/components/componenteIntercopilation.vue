<template>
  <div>
    <h2>Esto es directivivas</h2>
  </div>
  <div>
    <h3>Interpolation</h3>
    <p v-text="mensaje"></p>
    <p v-html="equitecas"></p>
    <input v-bind="atributo" />
    <button :disabled="buttonDisable"></button>
  </div>
  <div>
    <h3>v-once</h3>
    <p v-once>EStto no se va renderizar {{ mensaje2 }}</p>
    <p>esto si se va renderizar {{ mensaje2 }}</p>
    <button @click="cambiar">Cambiar</button>
  </div>
  <div v-pre>
    <h2>esto no se va a mostrar al publico</h2>
    <p>{{ noMostrar }}</p>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const mensaje = 'esto es una texto'
const equitecas = '<strong>Hola Mundo</strong>'
const buttonDisable = true
const atributo = {
  type: 'text',
  placeholder: 'escribe tu nombre',
  maxlength: 20,
}

const mensaje2 = ref('esto va cambiar')
const cambiar = () => {
  mensaje2.value = 'Texto cambiado'
}

const noMostrar = ref('no quiero ir a trabajar')
</script>
<style scoped></style>
