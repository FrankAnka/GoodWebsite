<script>
let varor=[{}];
let nyvara
import { fade, slide } from "svelte/transition";
function AddItem() {
    nyvara=nyvara.trim()
    if (nyvara.length>0)
        varor=[...varor,{name:nyvara,type:"köpa",prio:20}]
        nyvara=""

}

function MoveUp(target){
    if(target.prio>0){
    target.prio-=1
    varor=varor
}
}
function MoveDown(target){
    if(target.prio<10);
        target.prio+=1    
    varor=varor }

function MoveItem(target){
if (target.type==="köpa"){
    target.type="köpt";

}
else{
    target.type="köpa";}
varor=varor
}


function RemoveItem(target){
    varor.splice(varor.indexOf(target),1)
    varor=varor
}


$:varor.sort(function(a,b){
return a.prio-b.prio
}
)
</script>

<main class="container">
    <h1>ShoppingList</h1>
<div class="catagories_container">

<section> 

<h2>Varor att köpa</h2>

<ol>
    {#each varor as vara}
    {#if (vara.type== "köpa")}
<li transition:slide> 
    <input class="Remove" type="submit" value="X" on:click={RemoveItem(vara)}>
    {vara.name} 
    <input class="Move" type= "submit" value = "→" on:click={MoveItem(vara)}>
    <input class="Move" type="submit" value="↑" on:click={MoveUp(vara)}>  
    <input class="Move" type="submit" value="↓" on:click={MoveDown(vara)}>  

</li>

    {/if}
    {/each}

</ol>

</section>

<section> 

<h2>Köpta varor</h2>

<ul>
    {#each varor as vara}
    {#if (vara.type== "köpt")}
<li transition:slide>
    <input class="Move" type= "submit" value = ← on:click={MoveItem(vara)}>     
    {vara.name}
    <input class="Remove" type="submit" value="X" on:click={RemoveItem(vara)}>  



</li>
    {/if}
    {/each}
</ul>

</section>
<form on:submit|preventDefault={AddItem}>
    <input class="InputField" type="text" id="vara" bind:value={nyvara}>
    <input class="button" type="submit"  value ="Lägg till vara">
</form>
</div>


</main>


<style>
main{
    border: 5px solid burlywood ;
}
.container h1{
    justify-self: center;
    background-color: darkslategrey;
    border-radius: 5px;
    align-self: center;
    padding: 5px;
    font-size: larger;

}
.button{
    background-color: darkslategray;
    border-radius: 10px;
    height: 40px;
    border: 3px solid burlywood ;
}
.container{
    
    display: grid;
    grid-template-rows: 1fr 9fr 1fr;      
    background-color:cadetblue;
    width: 90vw;    
    height: 90vh;
    border-radius: 20px;
    margin-left: 7vw;
    margin-top: 2.5vh;
    
}
.catagories_container section{
    width: 100%;
    height: 100%;
}
.catagories_container{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    height: 100%;
    grid-gap:10px;  
    background-color: #CCCCFF;

}
        
.catagories_container section ul{
    list-style-type: disc;
    padding: 20px;
}
.catagories_container section ol{
    list-style-type: decimal;
    padding: 20px;
}

.catagories_container section:first-child{  /* vilket barn vill vi styla? */
    background-color: rgba(3, 94, 137, 0.3) /* svart bakgrund med 10% opacitet */
}
.catagories_container section:nth-child(2){  /* vilket barn vill vi styla? */
    background-color: rgba(3, 94, 137, 0.3) /* svart bakgrund med 10% opacitet */
}

.catagories_container h2{
background-color:darkslategray;
text-align: center;
font-size: medium;
padding: 5px;
}
.catagories_container li{
    margin-left: 10px;
}
.Remove:hover{
    color: red;
}

.Move:hover{
    color: blue;
}
.InputField{
    margin-left: 5vw;
    color: black;

}
li{
    border-bottom:1px dotted white ;
}
</style>