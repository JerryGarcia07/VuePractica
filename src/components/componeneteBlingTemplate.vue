<template>
  <div>
    <h2>oTROS COMPOENTE INTERACTUABLES</h2>
    <h3>V-ON</h3>
    <button @click="saludar('anna')">Saludando</button>
    <input type="text" @input="mostrando($event)" />
    <br />
    <button @click.once="mostrarOne">solo una vez</button>
    <br />
    <input type="text" @keyup.enter="teclado" />
  </div>
</template>
<script setup>
const saludar = (name) => console.log(`Hola mundo ${name}`)
const mostrando = (event) => console.log(`Mostrando ${event.target.value}`)
const mostrarOne = () => console.log('solo una vez')
const teclado = () => console.log('Mostrando teclado')
</script>
<style scoped></style>
