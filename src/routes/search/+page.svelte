<script>
import {goto} from  "$app/navigation"
import { onMount } from "svelte";
import {search_store} from  "$lib/pokesave"
import { base } from '$app/paths';

let search;
let last5=[]
onMount(()=>{
if($search_store.length>2){
  last5=JSON.parse($search_store)

}
})

function resetSearch(){
  last5=[]
  $search_store=JSON.stringify(last5)
}




</script>
<img class="pokeLogo" src="https://cdn.freebiesupply.com/images/large/2x/pokemon-logo-black-transparent.png" alt="POkemon">
<form on:submit|preventDefault={()=> goto(base+'/search/'+search)}>
    <input class="Search" type="text" placeholder="Sök upp en pokemon" bind:value={search} />
  </form>
  <footer>
{#each last5 as link}
<a class="lastSearch" href="{link.link}" >{link.name}</a>
{/each}
<button class="reset" on:click={resetSearch}>Reset</button>

</footer> 
<style>

footer {
    width: 100%;
}

.pokeLogo{
  height: 500px;

}
.Search{

color: black;
width: 10vw;

box-sizing: border-box;
border: 3px solid burlywood;
border-radius: 4px;
font-size: 16px;
background-color: white;
padding: 12px 20px 12px ;
transition: width 0.2s ease-in-out;
}
.Search:hover{
width: 100%;}
.Search:focus{
  width: 100%;}
.lastSearch{
  display: flex;
  flex-direction:column;
  background-color:darkcyan;
  width: 20%;
  margin: 10px;
  height: 30px;
  padding-left: 10px;
  margin-left: 40%;
  border-radius: 4px;
  border: solid burlywood 3px;
  text-transform: capitalize;
}
.lastSearch:hover{
  transform: scale(1.2);
}
.reset{
  background-color:crimson;
  width: 10%;
  margin: 10px;
  height: 50px;
  padding-left: 10px;
  margin-left: 45%;
  border-radius: 4px;
  border: solid burlywood 3px;
  text-transform: capitalize;
  
}
.reset:hover{
  transform: scale(1.2);
}
</style>