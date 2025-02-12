<script>
import { flip } from "svelte/animate";
import Page from "../+page.svelte";

let cards=[]
let bluePoints=0
let redPoints=0
let blueTurn=true
let ClickedCards=[]
let redWin =false
let blueWin = false
let draw=false
let Images=["https://cdnb.artstation.com/p/assets/images/images/025/254/251/large/niall-skinner-hollowknight-fanart-final-artwork.jpg?1585176727","https://cdnb.artstation.com/p/assets/images/images/025/254/251/large/niall-skinner-hollowknight-fanart-final-artwork.jpg?1585176727","https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/76c3b78e-30f0-44cf-ab32-dd70a05147dc/ddaocuy-20a7ec72-deec-4f0b-b069-651fc874e9c9.png/v1/fill/w_1024,h_923,q_80,strp/hollow_knight_fan_art___hornet_by_goldenyak_ddaocuy-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTIzIiwicGF0aCI6IlwvZlwvNzZjM2I3OGUtMzBmMC00NGNmLWFiMzItZGQ3MGEwNTE0N2RjXC9kZGFvY3V5LTIwYTdlYzcyLWRlZWMtNGYwYi1iMDY5LTY1MWZjODc0ZTljOS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.CRKHP1DYTYeKcTxmel4ayT_9bNQyHR_VtSlnEqMTSHs","https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/76c3b78e-30f0-44cf-ab32-dd70a05147dc/ddaocuy-20a7ec72-deec-4f0b-b069-651fc874e9c9.png/v1/fill/w_1024,h_923,q_80,strp/hollow_knight_fan_art___hornet_by_goldenyak_ddaocuy-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTIzIiwicGF0aCI6IlwvZlwvNzZjM2I3OGUtMzBmMC00NGNmLWFiMzItZGQ3MGEwNTE0N2RjXC9kZGFvY3V5LTIwYTdlYzcyLWRlZWMtNGYwYi1iMDY5LTY1MWZjODc0ZTljOS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.CRKHP1DYTYeKcTxmel4ayT_9bNQyHR_VtSlnEqMTSHs","https://i.redd.it/gaqtck61wkx61.jpg","https://i.redd.it/gaqtck61wkx61.jpg","https://cdna.artstation.com/p/assets/images/images/048/634/298/large/thibaud-pourplanche-2020-hollowknight-03d.jpg?1650537305","https://cdna.artstation.com/p/assets/images/images/048/634/298/large/thibaud-pourplanche-2020-hollowknight-03d.jpg?1650537305","https://steamuserimages-a.akamaihd.net/ugc/93855430116984721/B2421B5E6F03ED08F761ACC57EB648B334DCC3CC/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false","https://steamuserimages-a.akamaihd.net/ugc/93855430116984721/B2421B5E6F03ED08F761ACC57EB648B334DCC3CC/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false","https://i.pinimg.com/originals/2e/9b/4e/2e9b4e53ff5277fe0c4b642b985e62d6.png","https://i.pinimg.com/originals/2e/9b/4e/2e9b4e53ff5277fe0c4b642b985e62d6.png"]
let totalPoints=Number
function shuffleList(array){
    for (let i = array.length - 1; i > 0; i--) {

// Generate Random Index
    const j = Math.floor(Math.random() * (i + 1));

// Swap elements
    [array[i], array[j]] = [array[j], array[i]];
    }
return array;
}
function Restart(){
    for (let i = 0; i < cards.length; i++) {
        cards[i].matched=false
        cards[i].flipped=false
    }
    shuffleList(cards)
    redPoints=0
    bluePoints=0
    redWin=false
    blueWin=false
    draw=false
}

function MatchCards(){
    if(ClickedCards.length==2){

        if(ClickedCards[1].image===ClickedCards[0].image){
        ClickedCards[1].matched=true
        ClickedCards[0].matched=true
        if(blueTurn===true){
            bluePoints+=1;
        } 
        if(blueTurn===false){
            redPoints+=1
        }
        }
        
        
        

    //Vänder tillbaka alla icke matchade kort
    setTimeout(() => {
        cards.forEach((card) => {
        card.flipped = card.matched;
        });
        ClickedCards = [];
        cards = cards;
        blueTurn=!blueTurn;

        }, 600);
    }


    if(redPoints+bluePoints==6){
        if(redPoints>bluePoints){
            redWin=true;}
        if(bluePoints>redPoints){
            blueWin=true;}
        if(bluePoints==redPoints){
            draw=true;}
    }   
        
    }   


    






function flipCard(target){ 
    if(ClickedCards.length<2){
    target.flipped=!target.flipped
    ClickedCards.push(target)
    cards=cards
    MatchCards()
}
}
for (let i = 0; i <12; i++) {
    cards.push({image:Images[i],flipped:false,matched:false,matched:false})
    cards=shuffleList(cards)
}
let cardBack="https://i.pinimg.com/originals/fd/7a/48/fd7a48f23082646b4a827a733daecd6e.jpg"

</script>


<main>
    <h1>Memory</h1>
    <div class=playArea>
    {#each cards as card}
        
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class=card class:flipped= { card.flipped } on:click={()=>flipCard(card)}>    
            <img class=Front src={card.image} alt="Bild">
            <img class=Back src={cardBack} alt="Bild">
        </div> 
    {/each} 

</div>
<button on:click={Restart}>
<p>New Game</p>
</button>

{#if (redWin)}

    <div style="background-color: red;" class="win">Red Won</div>
{/if}

{#if (blueWin)}

    <div style="background-color: blue;" class="win"> Blue Won</div>
{/if}

{#if (draw)}

    <div style="background-color: green;" class="win"> Draw </div>
{/if}

</main>

<aside class=blue><p>{bluePoints}</p></aside>
<aside><p>{redPoints}</p></aside>
<aside class="turn" class:blue={ blueTurn }></aside>



<style>
main{
    display: grid;
    height: 100vh;  
    width: 100vw;  
    justify-content: center;
    align-items: center;
    background-image: url("https://preview.redd.it/cmo0ctosk0i11.png?auto=webp&s=b48db0ddbad691ccf2e32330d6e70304aa5b95a5");
}
.playArea{
    display: grid;
    justify-self:  center;

}
.turn{
    box-shadow: 0 0 10px 10px yellowgreen;
    z-index: 0;
}
.card{
    height: 100%;
    width: 100%;
    border: 1px solid burlywood ;
    position: relative;
    backface-visibility: hidden;
    transition: transform 0.5s;
    transform-style: preserve-3d;
    
}

.card:not(.flipped) :hover{
    transform: scale(1.1);
    border: 1px solid burlywood ;
}

.win{
    display: flex;
    justify-content: center;
    align-content: center;
}
button{
font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
justify-self: center;
align-self: center ;
width: 100px;
font-size: large;
}
h1{
    display: flex;
    align-self:center;
    justify-self: center;
    font-size: large;
}
.Front{
    height: 100%;
    width: 100%;
    position: absolute;
    transform: rotateY(180deg);

}
.Back{
    height: 100%;
    width: 100%;
    position: absolute;

}



aside{
    width: 100px;
    height: 100px;
    position: fixed;
    bottom: 10px;
    right: 10px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
}

p{
    font-size: 25px;
}
.blue{
    background-color: blue;
    left:10px;
}


.flipped{
    transform: rotateY(180deg);
}

@media (min-height: 500px){
  .playArea{
    grid-template-columns: repeat(4, 250px);
    grid-template-rows: repeat(3, 200px);
  }
}
@media (max-height: 500px){
  .playArea{
    grid-template-columns: repeat(6, 250px);
    grid-template-rows: repeat(2, 200px);
  }
}
          

</style>