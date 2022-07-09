<script>
	import { pokemon } from '../store/pokestore';
	import PokemanCard from '../components/pokemanCard.svelte';  
	let searchTerm = '';
	/**
* @type {any[]}
*/
	let filteredPokemon = [];
	$: {
		if (searchTerm) {
			filteredPokemon = $pokemon.filter((pokeman) =>
				pokeman.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
		} else {
			filteredPokemon = [...$pokemon];
		}
	}
</script>
<h1 class="text-4xl uppercase text-center my-8">Svelte Poke Kit</h1>
<input
	class="w-full m-2 rounded-md text-lg p-4 border-2 border-gray-200"
	type="text"
	placeholder="Search Pokemon"
	bind:value={searchTerm} />
<div class="grid gap-4 md:grid-cols-2 grid-cols-1">
	{#each filteredPokemon as pokeman}
		<p>
			<PokemanCard {pokeman} />
		</p>
	{/each}
</div>
