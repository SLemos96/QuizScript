{#each options as option, index (option)}
<button class="m5" class:selected="{index===selection}" on:click={dispatch('selected', index)}>{option}
</button>
{/each}

<script>
	export let options
	export let selection
	import { createEventDispatcher } from 'svelte'

	const dispatch = createEventDispatcher()
</script>

<style>
  .selected {
    font-weight: bold;
  }
</style>