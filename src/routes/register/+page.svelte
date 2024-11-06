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
            else{
                alert("Fyll i alla fält för registrerning")}
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
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1040' height='560' preserveAspectRatio='none' viewBox='0 0 1040 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1037%26quot%3b)' fill='none'%3e%3crect width='1040' height='560' x='0' y='0' fill='%230e2a47'%3e%3c/rect%3e%3cpath d='M225.112%2c518.396C253.105%2c516.285%2c270.546%2c491.299%2c284.499%2c466.939C298.335%2c442.783%2c311.478%2c414.91%2c298.493%2c390.286C284.875%2c364.461%2c254.275%2c352.938%2c225.112%2c354.321C198.237%2c355.595%2c177.185%2c373.936%2c162.871%2c396.717C147.302%2c421.496%2c134.55%2c451.192%2c147.877%2c477.245C162.116%2c505.081%2c193.935%2c520.748%2c225.112%2c518.396' fill='rgba(28%2c 142%2c 139%2c 0.77)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M124.217%2c507.915C158.998%2c506.524%2c189.554%2c488.165%2c208.436%2c458.922C229.342%2c426.544%2c241.768%2c386.84%2c224.711%2c352.279C205.873%2c314.108%2c166.77%2c289.308%2c124.217%2c288.274C79.864%2c287.197%2c36.094%2c308.208%2c14.896%2c347.182C-5.526%2c384.73%2c3.43%2c430.815%2c27.468%2c466.157C48.64%2c497.286%2c86.6%2c509.419%2c124.217%2c507.915' fill='rgba(28%2c 142%2c 139%2c 0.77)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M217.422%2c533.337C257.196%2c533.835%2c295.595%2c515.221%2c315.607%2c480.844C335.735%2c446.268%2c332.334%2c403.996%2c313.153%2c368.886C293.063%2c332.114%2c259.202%2c304.322%2c217.422%2c301.125C169.353%2c297.446%2c115.02%2c309.403%2c92.436%2c351.996C70.649%2c393.085%2c97.015%2c440.142%2c123.408%2c478.436C145.481%2c510.462%2c178.529%2c532.85%2c217.422%2c533.337' fill='rgba(28%2c 142%2c 139%2c 0.77)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1037.858637514101 283.99358187972143L1006.0575021576867 233.1011269061435 945.6193873755269 306.2490574275539z' fill='rgba(28%2c 142%2c 139%2c 0.77)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1028.3062613495767 347.57611759687995L933.3606629022916 445.8951629500307 1126.6253067027274 442.5217160441652z' fill='rgba(28%2c 142%2c 139%2c 0.77)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M619.87910346117 400.252371415974L613.0242757975136 302.22376875074804 514.9956731322877 309.07859641440444 521.8505007959441 407.10719907963033z' fill='rgba(28%2c 142%2c 139%2c 0.77)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M471.302%2c626.261C504.391%2c626.387%2c522.754%2c592.024%2c539.282%2c563.359C555.786%2c534.736%2c575.799%2c501.929%2c559.592%2c473.137C543.22%2c444.051%2c504.67%2c441.832%2c471.302%2c442.591C439.672%2c443.31%2c405.118%2c449.371%2c389.704%2c477C374.55%2c504.163%2c389.297%2c535.551%2c404.217%2c562.843C420.038%2c591.783%2c438.32%2c626.135%2c471.302%2c626.261' fill='rgba(28%2c 142%2c 139%2c 0.77)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1009.3274332240675 323.519039288249L920.558056294761 213.8979881308602 810.9370051373721 302.6673650601668 899.7063820666787 412.2884162175556z' fill='rgba(28%2c 142%2c 139%2c 0.77)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M688.9442470758589 455.8089797183111L824.3130665547178 432.0728026152231 748.7071493669935 338.7072704628777z' fill='rgba(28%2c 142%2c 139%2c 0.77)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M437.43420364811806 609.5767107422913L541.0095394485786 528.6547896207849 356.5122825266116 506.00137494183076z' fill='rgba(28%2c 142%2c 139%2c 0.77)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M107.81798578613562 434.0532025562304L86.00302194191529 510.1310225584316 211.02723386732723 504.8145583236615z' fill='rgba(28%2c 142%2c 139%2c 0.77)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M736.3965141226987 451.89084884537306L814.4762106829291 397.2188567327729 681.7245220100986 373.81115228514255z' fill='rgba(28%2c 142%2c 139%2c 0.77)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M145.018%2c300.046C182.437%2c298.301%2c213.188%2c275.38%2c233.623%2c243.985C256.621%2c208.651%2c276.027%2c165.81%2c256.816%2c128.282C236.358%2c88.318%2c189.826%2c68.081%2c145.018%2c70.897C104.394%2c73.45%2c75.386%2c105.626%2c55.172%2c140.956C35.135%2c175.976%2c21%2c217.843%2c40.841%2c252.975C60.925%2c288.538%2c104.22%2c301.949%2c145.018%2c300.046' fill='rgba(28%2c 142%2c 139%2c 0.77)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M605.1677009103446 515.5423803128188L754.0635213888881 531.1919616584714 620.8172822559973 366.6465598342752z' fill='rgba(28%2c 142%2c 139%2c 0.77)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M798.8434495446281 121.94449821480579L752.2769363398128 249.88494174777162 880.2173798727786 296.45145495258697 926.7838930775939 168.51101141962118z' fill='rgba(28%2c 142%2c 139%2c 0.77)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M544.3877364485666 454.5374425952145L680.6424299221696 404.94478989175747 494.79508374510954 318.28274912161146z' fill='rgba(28%2c 142%2c 139%2c 0.77)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M484.0617050163088 251.58101297217948L323.74364150404836 288.5933543000082 360.7559828318771 448.9114178122686 521.0740463441375 411.8990764844399z' fill='rgba(28%2c 142%2c 139%2c 0.77)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M373.4713587346246 378.0064908122669L408.2886454300126 282.34678181001044 312.6289364277561 247.52949511462242 277.8116497323681 343.1892041168789z' fill='rgba(28%2c 142%2c 139%2c 0.77)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M86.51939114577011 561.9087247825216L207.72152150093552 480.1568555985165 125.96965231693035 358.95472524335105 4.767521961764942 440.7065944273562z' fill='rgba(28%2c 142%2c 139%2c 0.77)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M189.2185257003574 234.08835324952378L303.60570976502026 305.56539882274257 260.6955712735762 119.70116918486089z' fill='rgba(28%2c 142%2c 139%2c 0.77)' class='triangle-float3'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1037'%3e%3crect width='1040' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");
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
