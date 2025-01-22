<script>
    import { base } from '$app/paths';
</script>


<main>
    <slot>
    </slot>
</main>
<div class="backdrop"></div>


<style>
    main{
        display: flex;
        width: 80vw;
        height: 100vh;
        background-color: rgba(173, 255, 243, 0.5);
        margin: 5vh auto;
        border-radius: 10px;
        border: 4px solid burlywood ;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .backdrop{
        background-image:url("https://www.dexerto.com/cdn-image/wp-content/uploads/2023/12/23/pokemon-go-eevee-evolutions-eeveelutions-dexerto-2-1600x900-1.jpg");
        background-size: cover;
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
        filter: blur(5px);
    }
</style>    