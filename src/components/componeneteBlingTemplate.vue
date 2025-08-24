<template>
  <div>
    <h2>oTROS COMPOENTE INTERACTUABLES</h2>
    <h3>V-ON</h3>
    <button @click="saludar('anna')">Saludando</button>
    <input type="text" @input="mostrando($event)" />
  </div>
</template>
<script setup>
const saludar = (name) => console.log(`Hola mundo ${name}`)
const mostrando = (event) => console.log(`Mostrando ${event.target.value}`)
</script>
<style scoped></style>
