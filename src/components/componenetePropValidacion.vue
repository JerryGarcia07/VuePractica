<template>
  <p>El nombre de un personaje</p>
  <p>
    Mi nombre es <strong>{{ Nombre }}</strong>
  </p>
  <p>Mi edad es {{ Edad }}</p>
</template>
<script setup>
defineProps({
  Nombre: { type: String, required: true, default: 'Shana' },
  Edad: { type: Number, default: 0 },
})
</script>
<style scoped></style>
