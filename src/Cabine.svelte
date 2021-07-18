{#each options as option, index (option)}
<button class="m5" on:click={dispatch('selected', index)}>{option.opcao}
</button>
{/each}

<script>
	export let options
	import { createEventDispatcher } from 'svelte'

	const dispatch = createEventDispatcher()
</script>

<style>
</style>