<template>
  <div>
    <h1>{{ statement }}</h1>
    <button
      v-for="(option, index) in options"
      class="m5"
      :class="{ selected: index == selection }"
      :key="option"
      @click="$emit('vote', index)"
    >{{ option.opcao }}</button>
  </div>
</template>

<script>
export default {
  props: ['options']
}
</script>

<style>
.selected {
  font-weight: bold;
}
</style>