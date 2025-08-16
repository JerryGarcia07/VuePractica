<script setup>
import { reactive } from 'vue'

defineProps({ modelValue: String })
const emit = defineEmits(['update:modelValue'])

const actualizarValor = (e) => {
  emit('update:modelValue', e.target.value)
}

const number = reactive(['one', 'two'])
</script>

<template>
  <div>
    <h3>Componente Hijo</h3>
    <input type="text" :value="modelValue" @input="actualizarValor" />
  </div>
  <div>
    <h2>Movel multiples</h2>
    <input type="text" name="Nombre" />
    <input type="text" name="edad" />
  </div>
</template>
<style scoped></style>
