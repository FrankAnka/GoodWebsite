<script>
    import { base } from '$app/paths';
    import {users_store} from "$lib/user"
    let color = "black"
    let namn 
    let epost
    let password 
    let colors=[{namn: "Blå", value: "blue"}, {namn: "Röd", value: "red"},{namn:"Green",value: "green"}]
    let users=[]
    import { onMount } from 'svelte';
    onMount(() => {
        /*Check if has more then 2 characters*/
        if($users_store.length > 2){
            users = JSON.parse($users_store);
        }
    });

    function handleSubmit() {
        if(epost&&password){
        let LoggingUser=users.filter(users=>users.email===epost)
            if (LoggingUser.length>0){
                if (LoggingUser[0].password===password){
                    alert("Välkommen",LoggingUser[0].namn)
                }
                else{
                alert("incorrect password or username")}
            }
            else{
            alert("Account does not exist")}
        }
        else{
        alert("Ett fält är inte ifyllt")}
    }
  

</script>


<main>
<div class="container" >
    <h1>
        Inloggning
    </h1>
<form on:submit|preventDefault={handleSubmit}>
    
    <label for ="e-post">E-post:</label>
    <input class="text" type="email" id="e-post" bind:value={epost}>
   
    <label for="password">Password: </label>
    <input class="text" type="password" id="password" bind:value={password}>
    
    <input type="submit"  value ="Logga in">
    
</form>
<h2>Har du inget konto?<a href="{base}/register">Skapa konto</a></h2>
</div >
</main>

<style>
 main{
        background-image: url("https://t4.ftcdn.net/jpg/05/21/65/59/360_F_521655929_N80d5GaCQJ2VP073PfTXJTe9mkvsNtHE.jpg");
        background-size: cover;
        width: 100%;
        height: 100%;
        padding: 5%;
        min-height: 550px;
    }
 
.container{

        border: solid 5px rosybrown;
        border-radius: 10px;
        width: 35%;
        height: 50%;
        background-color: #282129;
        margin: auto;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        min-width: 300px;
        min-height: 500px;

}
 .text{
    color: black;
}   
        
</style>