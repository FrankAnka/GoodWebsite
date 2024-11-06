<script>

        
    import { onMount } from 'svelte';
    onMount(() => {
        /*Check if has more then 2 characters*/
        if($users_store.length > 2){
            users = JSON.parse($users_store);
        }
    });


    import {users_store} from "$lib/user";
    let users = [];

    import { base } from '$app/paths';
    let color = "black"
    let namn =""
    let epost=""
    let password =""
    let colors=[{namn: "Blå", value: "blue"}, {namn: "Röd", value: "red"},{namn:"Green",value: "green"}]

    function handleSubmit() {
        if ((users.filter(users=> users.username===namn)).length>0) {
            alert("Användrarnamn finn redan, välj annat")
                    }
        else{
            if(namn!=""&&epost!=""&&password!=""){
                alert("Välkommen"+" "+ namn+" " + epost +" " + password)
                let new_user = {username: namn, password: password, email: epost, color: color};
                users = [...users, new_user];
                $users_store = JSON.stringify(users);}
            else;
                alert("Fyll i alla fält för registrerning")
            }
            


        }
       
    

</script>


<main>
<div class="container" >
    <h1>
        Registrerning
    </h1>
    <div style="width: 100px; height: 100px; border-radius: 50%; overflow:hidden; background-color:{color};"></div>
<form on:submit|preventDefault={handleSubmit}>
    
    
    <label for="name">Namn:</label>
    <input class="text" type="text" id="name" bind:value={namn}>
    
    <label for ="e-post">E-post:</label>
    <input class="text" type="email" id="e-post" bind:value={epost}>
   
    <label for="password">Password: </label>
    <input class="text" type="password" id="password" bind:value={password}>
    
    <label for="Favoritfärg">Favoritfärg:</label>
    
    <select name="" id="Favoritfärg" class="text" bind:value={color}>
    {#each colors as c}
        <option value={c.value}>{c.namn}</option>
	{/each}
    </select>
    <input type="submit"  value ="Registrera">
    <h2>Har du redan ett konto?<a href="{base}/login">Logga in</a></h2>
</form>

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
        height: 80%;
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
