
<script>
    /** @type {import('./$types').PageData} */
    export let data;
    import {base} from "$app/paths"
    import {page} from "$app/stores"
    import { onMount } from 'svelte';
    import {search_store} from "$lib/pokesave";
	import { goto } from "$app/navigation";
    let last5=[]




onMount(() => {



    if($search_store.length>2){
        last5=JSON.parse($search_store)
    }
    


});
function home(){
goto(base+"/search/")
}
async function addLink(nameInfo) {
    await onMount
    let targetMon= $page.params.pokemon
    last5=last5.filter(item => item.name !==targetMon);
    if(last5.length==5){
            last5.shift()
            last5=last5
    }

    last5=[...last5,{link:base+"/search/"+$page.params.pokemon.toLowerCase(),name:nameInfo}]

    $search_store=JSON.stringify(last5)
    
    
}

</script>
{#await data}
    <p>.. waiting</p>
{:then pokemon} 
<button class="home" on:click={home}>Home</button>
<div style="display: none;">{addLink(pokemon.response.name)}</div>
<h1>{pokemon.response.name}</h1>



<article style="transform: scale(.66);">

{#each Object.entries(pokemon.response.sprites) as sprites}
{#if typeof sprites[1] == "string"}

<img style="min-height: 200px;"  src={sprites[1]} alt="hej" />
{/if}       
{/each}

</article>

<div class="Attributes">
    <h2>Types:</h2>
{#each pokemon.response.types as types}
<p class="{types.type.name}">{types.type.name}</p>
{/each}
<h3>Height:</h3>
<p> {pokemon.response.height/10} m</p>
<h4>Weight:</h4>
<p>{pokemon.response.weight/10} Kg</p>
</div>

<h2>Moves:</h2>
<div class="Moves">
{#each pokemon.response.moves as moves}
<div class="Move">
    <p style="text-align: center;">{moves.move.name}</p>
</div>
{/each}
</div>
{/await}  


<style>
article{
    display: flex;
    width: 90%;
    height: 30%;
    gap: 1em;
    justify-content: center;
}
h1,h2,h3,h4
{
    color: black;
    text-transform: capitalize;

}
.home{
background-color: darkcyan;
border-radius: 4px;
border: solid burlywood 3px;
height: 6%;
width: 10%;
margin-bottom: 10px;
margin-top: 4px;

}
.Attributes{
    display: flex;
    width: 80%; 
    height: 20%;
    justify-content: space-evenly;
    align-items: center;

}
.Moves{
    display: grid;
    grid-template-columns: repeat(7, 150px);
    background-color:lightslategray;
    border-radius: 4px;

    overflow-y: scroll;
    

}
.Move{
    background-color: teal;
    border-radius: 4px;
    padding:5px ;
    margin: 5px;
}
h1{
    font-size: xx-large;

}
h2,h3,h4{
    font-size: x-large;
}
p{
    justify-self: center;
    font-size: large;
    color: rgb(0, 0, 0);
}
.water{
    border-radius: 4px;
    padding: 4px;
    background-color: rgb(0, 136, 255)	;
    font-size: x-large;
    font-style:italic;
}
.fire{
    border-radius: 4px;
    padding: 4px;
    background-color: orangered	;
    font-size: x-large;
    font-style:italic;
}
.grass{
    border-radius: 4px;
    padding: 4px;
    background-color: green	;
    font-size: x-large;
    font-style:italic;
}
.ground{
    border-radius: 4px;
    padding: 4px;
    background-color: rgb(169, 136, 92);
    font-size: x-large;
    font-style:italic;
}
.rock{
    border-radius: 4px;
    padding: 4px;
    background-color: rgb(77, 58, 31)	;
    font-size: x-large;
    font-style:italic;
}
.bug{
    border-radius: 4px;
    padding: 4px;
    background-color: rgb(96, 130, 45)	;
    font-size: x-large;
    font-style:italic;
}
.psychic{
    border-radius: 4px;
    padding: 4px;
    background-color: rgb(255, 147, 181)	;
    font-size: x-large;
    font-style:italic;
}
.fairy{
    border-radius: 4px;
    padding: 4px;
    background-color: rgb(236, 26, 177)	;
    font-size: x-large;
    font-style:italic;
}
.dragon{
    border-radius: 4px;
    padding: 4px;
    background-color: rgb(128, 0, 255)	;
    font-size: x-large;
    font-style:italic;
}
.poison{
    border-radius: 4px;
    padding: 4px;
    background-color: rgb(122, 0, 152)	;
    font-size: x-large;
    font-style:italic;
}
.ghost{
    border-radius: 4px;
    padding: 4px;
    background-color: rgb(68, 0, 80)	;
    font-size: x-large;
    font-style:italic;
}
.dark{
    border-radius: 4px;
    padding: 4px;
    background-color: rgb(56, 35, 8)	;
    font-size: x-large;
    font-style:italic;
}
.electric{
    border-radius: 4px;
    padding: 4px;
    background-color: rgb(238, 255, 0)	;
    font-size: x-large;
    font-style:italic;
}
.fighting{
    border-radius: 4px;
    padding: 4px;
    background-color: rgb(183, 85, 0)	;
    font-size: x-large;
    font-style:italic;
}
.flying{
    border-radius: 4px;
    padding: 4px;
    background-color: rgb(159, 219, 219)	;
    font-size: x-large;
    font-style:italic;
}
.ice{
    border-radius: 4px;
    padding: 4px;
    background-color: rgb(103, 255, 255)	;
    font-size: x-large;
    font-style:italic;
}
.normal{
    border-radius: 4px;
    padding: 4px;
    background-color: rgb(112, 105, 92)	;
    font-size: x-large;
    font-style:italic;
}
.steel{
    border-radius: 4px;
    padding: 4px;
    background-color: rgb(86, 104, 104)	;
    font-size: x-large;
    font-style:italic;
}

</style>