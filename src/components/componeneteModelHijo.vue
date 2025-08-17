<script setup>
import { reactive } from 'vue'

defineProps({ modelValue: String })
const emit = defineEmits(['update:modelValue'])

const actualizarValor = (e) => {
  emit('update:modelValue', e.target.value)
}

const numer = reactive(['', ''])
</script>

<template>
  <div>
    <h3>Componente Hijo</h3>
    <input type="text" :value="modelValue" @input="actualizarValor" />
  </div>
  <div>
    <h2>Movel multiples</h2>
    <input type="text" :value="numer[0]" @input="numer[0] = $event.target.value" />
    <input type="text" :value="numer[1]" @input="numer[1] = $event.target.value" />
  </div>
  <div>
    <p>Numer1: {{ numer[0] }}</p>
    <p>Numer2: {{ numer[1] }}</p>
  </div>
</template>
<style scoped></style>
