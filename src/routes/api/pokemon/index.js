 
 export async function get({ params }) {
     const url=`https://pokeapi.co/api/v2/pokemon`;
     const res= await fetch(url);
     const pmon= await res.json();
   if(pmon){
    return {
      body: { pmon }
    };
   }
 
  return {
    status: 404
  };
}