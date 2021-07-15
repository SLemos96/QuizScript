<template>
  <div>
    <div v-if="mode === 'questions'">
      <div class="panel question">
        <p class="m5">{{statement}}</p>
        <Cabine
          :options="options"
          @click="vote"
        />
      </div>
    </div>
    <div v-else>
      <div class="panel results">
        <Resultado 
        :questions="questions" 
        :answers="answers" />
      </div>
    </div>
  </div>
</template>

<script>
import Cabine from './Cabine'
import Resultado from './Resultado'

const options= [
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

export default {
  props: ['statement'],
  components: { Cabine, Resultado },
  data: () => ({
    mode: 'questions'
  }),
  methods: {
    vote(index){ // capturando o voto do usuário
        console.log("frase só pra ver se eu to chegando aqui");
        this.options[index].count = this.options[index].count + 1;
        this.mode = 'result';
    }
  },
  computed: {
    options(){
        return options
    },
    option(){
        return options[this.index];
    }
  }
}
</script>


<style>
.panel {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
}
.question {
  background-color: azure;
}
.results {
  background-color: beige;
}
.m5 {
  margin: 5px;
}
.submitBtn {
  margin: 15px;
}
</style>
