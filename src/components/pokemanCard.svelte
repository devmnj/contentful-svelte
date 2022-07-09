<script>
	export /**
* @type {{ id: any; image: string | null | undefined; name: string | null | undefined; }}
*/
	 let pokeman;
</script>

<a
	class="p-6 bg-gray-100 text-gray-1100 text-center rounded-md shadow-md hover:shadow-lg flex
	flex-col items-center"
	href={`/pokemon/${pokeman.id}`}>
	<img class="h-40 w-40 " src={pokeman.image} alt={pokeman.name} />
	<h2 class="uppercase text-2xl">{pokeman.id}. {pokeman.name}</h2>
</a>
