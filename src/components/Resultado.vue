<template>
  <div>
    <h1>{{ statement }}</h1>
    <p
      v-for="(option) in options"
      class="m5"
      :key="option"
    >{{ option.opcao }} - {{option.count}} votos</p>
  </div>
</template>

<script>
export default {
  name: 'Resultado',
  props: ['options']
}
</script>

<style>
.selected {
  font-weight: bold;
}
</style>