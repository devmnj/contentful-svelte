import { writable } from "svelte/store";
export const pokemon=writable([]);
const fetchPokemon=async()=>{
    const ur=`https://pokeapi.co/api/v2/pokemon`;
    const res= await fetch(ur);
    const data= await res.json();
    const loaded=data.results.map((data,index)=>{
        return{
            name:data.name,
            id:index+1,
            image:`https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/${index+1}.png` 
        };
    })
    
    pokemon.set(loaded);
};
fetchPokemon();