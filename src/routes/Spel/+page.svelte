<script>
    let gameOver=false;
    let gridList=[{id:1,type:"full",moved:false,score:false}];
    let score=0;

for (let i = 0; i < 47; i++) {
    gridList.push({id: i,type: "empty",moved: false,score:false});
    

}


function onKeyDown(e) {
    switch(e.keyCode) {
        case 38:
            gridList[41].score="true"
            setTimeout(() => {
                gridList[41].score="false"
            }, 1000);
            break;
        case 40:
        gridList[42].score="true"
        setTimeout(() => {
                gridList[42].score="false"
            }, 1000);
            break;
        case 37:
        gridList[40].score="true"
        setTimeout(() => {
                gridList[40].score="false"
            }, 1000);
            break;
        case 39:
        gridList[43].score="true"
        setTimeout(() => {
                gridList[43].score="false"
            }, 1000);
            break;
    }
	}



function MoveDown(){
    for (let i = 0; i < 4; i++) {
    gridList[44+i].type="death"
    gridList[44+i].score="death"

}
    if(gameOver !=true){
    for (let i = 0; i < 44; i++) {
        if (gridList[i].type === "full") {
            gridList[i].type = "empty";
            gridList[i+4].type = "full";
                if(gridList[i+4].type==="full" && gridList[i+4].score==="true"){
                    score+=1;
                    gridList[i+4].type="empty";
                }
                if(gridList[i+4].type==="full" && gridList[i+4].score==="death"){
                    score-=1;
                    gridList[i+4].type="empty";
                    if(score<0){
                        gameOver=true;
                    }
                }
                break;
            
        }
        
    }}
}
function spawnNew(){

    let random=Math.floor(Math.random()*4);
    if(gameOver !=true){
    gridList[random].type="full";
    gridList[random].moved=true;
    
}}
setInterval(MoveDown,400)
setInterval(spawnNew,4400)


</script>

<main>
    <h1>Score: {score}</h1>
    <h2 class="thingy">Score when here</h2>
    {#if gameOver}
            <div>Game Over</div>
        {/if}
    <div class="playArea">
        
        {#each gridList as square}
            <div class="{square.type}"></div>
        {/each}

    </div>
</main>



<svelte:window on:keydown|preventDefault={onKeyDown}/>
<style>
.playArea {
    display: grid;
    grid-template-columns: repeat(4,23%);
    justify-content: center;
    grid-template-rows:repeat(12,8%);
    background-color:antiquewhite;
    width: 50vw;
    height: 90vh;
    padding: 10px;
    margin-left: 25%;
}
.empty {
    border: 1px solid black;

}
.full {
    background-color: aqua;

}
.death{
    background-color: red;

}
.true{
    border: solid 2px green;
}
.thingy{
    position: absolute;
    top: 700px;
    left: 200px;
    z-index: 1;
}
</style>