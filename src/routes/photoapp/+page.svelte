<script>

let image = "https://picsum.photos/id/70/367/267"
let photo = "https://picsum.photos/id/88/367/267"
let picture = "https://picsum.photos/id/93/367/267"


</script>




<h1>Photoapp</h1>
<p> Denna sida innehåller fina bilder </p> 
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



<style>

    .photos{
            display: flex;
            max-width: 100vw;
            align-items: center;
            overflow:hidden;
            justify-content: center;
            flex-wrap: wrap;
            background-color: rgb(111, 255, 0);
            
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
    color: grey;
}
    
</style>