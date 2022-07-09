 
<script context="module" >
export async function load({ params, fetch, session, stuff }) {
    const {id} = params;
        
    const url=`https:\\pokeapi.co/api/v2/pokemon/${params.id}`;
    const res= await fetch(url);
    return {
      props: {
        pokeman: res.ok && (await res.json())
      }    
  }
 
  return {
    status: 404
  };

}
</script>
<script>
export let pokeman;
</script>
<div class="flex flex-col items-center">
<h1 class="text-4xl text-center uppercase my-8"> {pokeman.name }</h1>
<p> Type: <strong>{pokeman.types[0].type.name}</strong> | Height: <strong>{pokeman.height}</strong>
| Weight: <strong>{pokeman.weight}</strong></p>
<img class="w-60 h-60 card-image" src={pokeman.sprites['front_default'] } alt={pokeman.name}/>
</div>