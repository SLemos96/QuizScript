{#each options as option, index (option)}
<p class="m5">{option.opcao} - {option.count} votos
</p>
{/each}

<script>
	export let options
</script>

<style>
</style>