<template>
  <div>
    <h1>esto es un evento</h1>
    <button @click="alerta">esto es una alerta</button>
    <button @click="mostrarMensaje('Hola shana')">Mensaje personalisado</button>
  </div>
  <div>
    <input type="text" @input="textoInput($event)" />
  </div>
</template>
<script setup>
const alerta = () => {
  alert('esto es mensaje')
}
const mostrarMensaje = (mensaje) => {
  alert(mensaje)
}

const textoInput = (event) => {
  console.log(event.target.value)
}
</script>
<style scoped></style>
