<template>
  <div>
    <P>Mi nombre es: {{ nombre }}</P>
    <p>Mi edad es {{ edad }}</p>
    <p>mi genero {{ genero ? 'Mujer' : 'Hombre' }}</p>
    <p>mis animes favoritos {{ animes }}</p>
  </div>
</template>
<script setup>
defineProps(['nombre', 'edad', 'genero', 'animes'])
</script>
<style scoped></style>
