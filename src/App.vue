<template>
  <Card 
    statement="Welcome to Your Vue.js App?"
  />
</template>

<script>
import Card from './components/Card.vue'

export default {
  name: 'App',
  data: () => ({
    options: [
    {
        count: 0,
        opcao: 'time X'
    },
    {
        count: 0,
        opcao: 'time Y'
    },
    {
        count: 0,
        opcao: 'time Z'
    }
  ]
  }),
  components: {
    Card
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
