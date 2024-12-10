<script>
import ElizaBot from 'elizabot';
import { enhance } from "$app/forms";
import { onMount } from 'svelte';
import {chat_store} from "$lib/chatsave"
const eliza = new ElizaBot();
let chat = [{ user: 'Eliza', message: eliza.getInitial() }];
let answer=""




onMount(() => {
    chat = JSON.parse($chat_store);
    });

function resetChat(){
    chat = [{ user: 'Eliza', message: eliza.getInitial() }];
    $chat_store = JSON.stringify(chat);
}
async function write(message) {

    
    chat=[...chat,{user:"me",message:answer}]

    // random delay for Eliza's response time

    //Hämta HTML-elementet med id:et visible
    var element = document.getElementById("visible");
    //Ändrar elementets CSS-egenskap display till default
    element.style.display = "flex"; // Visa elementet
            

    await new Promise((r) => setTimeout(r, 1000 + Math.random() * 1000));
    element.style.display = "none";
    chat=[...chat,{user:"Eliza",message:eliza.transform(answer)}]
    answer=""
    $chat_store = JSON.stringify(chat);
};


                


</script>

<main>
<div class="chatbox">
    <section>
        {#each chat as msg}
            <article class:me ={msg.user=="me"}><p>{msg.message}</p></article>
        {/each}
        <article id="visible"> 
            <span class="circle"></span>
            <span class="circle"></span>
            <span class="circle"></span>

        </article>
    </section>

    <form  method="post"
        use:enhance={({ formElement, formData, action, cancel }) => {
        cancel(); //don't post anything to server
        const text = formData.get("text");
        write(text);
        // TODO: reset the form using form.reset()

        }}>
        <input type="text" style="color: black;" bind:value={answer}>
    </form> 
    <button on:click={resetChat}> Reset Chat</button>



        
        



</div>
</main>



<style>
.chatbox{
    width: 60vw;
    height: 70vh;
    padding: 10px;  
    background-color: darkcyan;
    color: black;
    border-radius: 10px;
    justify-self: center;
    align-self: center;
    margin-left: 280px;
    margin-top: 100px;
    border: 4px solid burlywood ;
}
section{
    height: 80%;
    overflow-y: scroll;
}
input{
    margin: 10px;
    margin-left: 10%;
    padding: 10px;
    border-radius: 10px;
    background-color: paleturquoise;
    width: 80%;
}
article{
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    background-color: rgb(82, 140, 168);
    width: 90%;
}
#visible{
    display: none;
    padding: none;
    width: 100px;
    height: 60px;
    align-items: center;
    justify-content: space-evenly   ;
}
.circle{
    width: 10px;
    height: 10px;
    border-radius: 50%;

    background-color:teal;

    animation-name: typing;
    animation-duration: 1000ms; /* Längd på animationen (till exempel 3 sekunder) */
    animation-timing-function: linear; /* Funktion som styr tidsförloppet (till exempel "ease-in-out") */
    animation-iteration-count: infinite;

}
@keyframes typing{
    0%{transform: scale(1);}
    50%{transform: scale(1.4);}
    100%{transform: scale(1);}
}

/* CSS-stilar för .circle med index 1 (den första cirkeln) */
.circle:nth-child(1) {
    animation-delay: 0ms; /* Ingen fördröjning */
}
/* CSS-stilar för .circle med index 2 (den andra cirkeln) */
.circle:nth-child(2) {
    animation-delay: 333ms; /* Starta animationen efter 333 millisekunder (ms) */
}
/* CSS-stilar för .circle med index 3 (den tredje cirkeln) */
.circle:nth-child(3) {
    animation-delay: 666ms; /* Starta animationen efter 666 ms */
}
.me{
padding: 10px;
border-radius: 10px;
background-color: paleturquoise;
width: 75%;
margin-left: 200px;
overflow-x: scroll;
}
button{
    width: 80%;
    height: 50px;
    background-color: tomato;
    border-radius: 10px;
    margin-left: 10%;


}
</style>