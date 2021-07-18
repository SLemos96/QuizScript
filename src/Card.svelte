{#if mode === 'open'}
<div class="panel question">
	<p class="m5">{statement}</p>
	<Cabine {options} on:selected={vote} />
</div>
<!-- <button class="submitBtn" on:click={next}>Próxima questão</button> -->

{:else}
<div class="panel results">
	<Resultado {options} />
</div>
{/if}


<script>
  import Cabine from './Cabine.svelte'
  import Resultado from './Resultado.svelte'

  
  let mode = 'open'
  export let statement
  export let options
//   $: statement = `Questão ${current + 1}: ${questions[current].statement}`
//   $: options = questions[current].options

  function vote(event){
    mode = 'closed';
    // alert(event.detail);
    options[event.detail].count = options[event.detail].count + 1;
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
  :global(.m5) {
    margin: 5px;
  }
</style>