<script>

let image = "https://picsum.photos/id/70/367/267"
let photo = "https://picsum.photos/id/88/367/267"
let picture = "https://picsum.photos/id/93/367/267"


</script>



<main>
<h1>Photoapp</h1>
<div class="photos">
<div class="image-wrapper">
<img src={image} alt="Flexbox egenskaper">
</div>
<div class="image-wrapper">
<img src={photo} alt = "bild2">
</div>
<div class="image-wrapper">
<img src={picture} alt= "bild3">
</div>


</div>
</main>



<style>

    .photos{
            display: flex;
            max-width: 100vw;
            align-items: center;
            overflow:hidden;
            justify-content: center;
            flex-wrap: wrap;
            background-color:transparent
            
        }
    .photos img{
        border-radius: 20px;

  }
    .image-wrapper img{ width: 100%; 
    box-shadow: 4px 8px 10px rgba(0,0,0,0.2);
    border: 2px solid white;    
    flex-grow:1;
    flex-basis: 300px;
    
}
    
    .image-wrapper:active { transform: scale(0.9);
   
    }
    .image-wrapper:hover { flex-grow:2; 
    transition: flex .5s;}

    
h1{
    text-align: center;
    font-size: 50px;
    margin: 20px;
    color: rgb(166, 166, 166);
}
main{
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1040' height='250' preserveAspectRatio='none' viewBox='0 0 1040 250'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1043%26quot%3b)' fill='none'%3e%3crect width='1040' height='250' x='0' y='0' fill='%230e2a47'%3e%3c/rect%3e%3cpath d='M25 250L275 0L485 0L235 250z' fill='url(%26quot%3b%23SvgjsLinearGradient1044%26quot%3b)'%3e%3c/path%3e%3cpath d='M186.6 250L436.6 0L640.6 0L390.6 250z' fill='url(%26quot%3b%23SvgjsLinearGradient1044%26quot%3b)'%3e%3c/path%3e%3cpath d='M357.2 250L607.2 0L710.7 0L460.7 250z' fill='url(%26quot%3b%23SvgjsLinearGradient1044%26quot%3b)'%3e%3c/path%3e%3cpath d='M542.8 250L792.8 0L834.8 0L584.8 250z' fill='url(%26quot%3b%23SvgjsLinearGradient1044%26quot%3b)'%3e%3c/path%3e%3cpath d='M1026 250L776 0L711.5 0L961.5 250z' fill='url(%26quot%3b%23SvgjsLinearGradient1045%26quot%3b)'%3e%3c/path%3e%3cpath d='M859.4 250L609.4 0L573.4 0L823.4 250z' fill='url(%26quot%3b%23SvgjsLinearGradient1045%26quot%3b)'%3e%3c/path%3e%3cpath d='M680.8 250L430.79999999999995 0L322.79999999999995 0L572.8 250z' fill='url(%26quot%3b%23SvgjsLinearGradient1045%26quot%3b)'%3e%3c/path%3e%3cpath d='M492.20000000000005 250L242.20000000000005 0L143.20000000000005 0L393.20000000000005 250z' fill='url(%26quot%3b%23SvgjsLinearGradient1045%26quot%3b)'%3e%3c/path%3e%3cpath d='M834.4774028736653 250L1040 44.477402873665284L1040 250z' fill='url(%26quot%3b%23SvgjsLinearGradient1044%26quot%3b)'%3e%3c/path%3e%3cpath d='M0 250L205.52259712633472 250L 0 44.477402873665284z' fill='url(%26quot%3b%23SvgjsLinearGradient1045%26quot%3b)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1043'%3e%3crect width='1040' height='250' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='0%25' y1='100%25' x2='100%25' y2='0%25' id='SvgjsLinearGradient1044'%3e%3cstop stop-color='rgba(185%2c 15%2c 179%2c 0.2)' offset='0'%3e%3c/stop%3e%3cstop stop-opacity='0' stop-color='rgba(185%2c 15%2c 179%2c 0.2)' offset='0.66'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='100%25' y1='100%25' x2='0%25' y2='0%25' id='SvgjsLinearGradient1045'%3e%3cstop stop-color='rgba(185%2c 15%2c 179%2c 0.2)' offset='0'%3e%3c/stop%3e%3cstop stop-opacity='0' stop-color='rgba(185%2c 15%2c 179%2c 0.2)' offset='0.66'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
        background-size: cover;
        width: 100%;
        height: 100%;
        padding: 5%;
        min-height: 550px;
}
</style>