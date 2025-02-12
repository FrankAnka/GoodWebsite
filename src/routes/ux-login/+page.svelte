<script>
    import { onMount } from 'svelte';
    let earth;
    let dateButton;
    let datePicker;
    let ellipse;
    let virusTimer = 10000;
    let isPressing = false;
    let NumberVirus=1
    let VirusList=[{top:Math.random()*90,left:Math.random()*90,type:"fakeAnti"}]
    const earthSize = 15;
    const horizontalRadius = 150;
    const verticalRadius = 73;
    const horizontalMargin = 25;
    const verticalMargin = 10;
    let visibility="none"
    let today = new Date();
    let year = today.getFullYear();
    let start = new Date(today.getFullYear(), 0, 0);
    let diff = today - start;
    const oneDay = 1000 * 60 * 60 * 24;
    let dayNumber = Math.floor(diff / oneDay);
    let date = dateFromDay(dayNumber);
    let popupvisibility = "hidden";
    let angle = 2 * Math.asin(((dayNumber - 1) / (182.5 + (isLeapyear() ? 0.5 : 0))) - 1);
    let x = horizontalRadius * Math.cos(angle);
    let y = verticalRadius * Math.sin(angle);

    let stringOfLetters="ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖx"
    let username=""
    let Letters=[]
    randomizeLetters()
    function randomizeLetters(){
        Letters=[]
        
       for(let letter of stringOfLetters){
        let top= Math.random()*90
        let left= Math.random()*90
        Letters.push({letter:letter,top:top,left:left})
       }
       Letters=Letters
    }


    function addLetter(index){
    let letter = Letters[index]
    Letters.splice(index,1)
    if(letter.letter=="x"){
        
        visibility="none"
    }
    if(letter.letter!="x"){
        username += letter.letter
    }
   
    letter.top = Math.random()*90
    letter.left = Math.random()*90

    Letters = Letters

  }
  function write(){
    if(visibility=="none"){
        visibility="block"
        
  }}

    function Antivirus(){
        NumberVirus+=1
        for(let i=0;i<NumberVirus;i++){
            if(NumberVirus%2==0){
                VirusList.push({top:Math.random()*90,left:Math.random()*90,type:"fakeAnti"})
            }
            else{
                VirusList.push({top:Math.random()*90,left:Math.random()*90,type:"adware"})
            }
        popupvisibility = "hidden"
        virusTimer = 400
        }


    }
    setInterval(randomizeLetters, 2000);
    setInterval(virusPopup, Math.random()*virusTimer);  
    onMount(() => {
        popupvisibility = "none";
        earth.setAttribute("x", horizontalRadius + x - earthSize / 2 + horizontalMargin);
        earth.setAttribute("y", verticalRadius - y - earthSize / 2 + verticalMargin);

        dateButton.children[0].innerText = addZero(date.getDate()) + "/" + addZero(date.getMonth() + 1) + "/" + date.getFullYear();

        earth.addEventListener("mousedown", mousedown);
        earth.addEventListener("touchstart", mousedown);

        window.addEventListener("mousemove", mousemove);
        window.addEventListener("touchmove", mousemove);

        window.addEventListener("mouseup", mouseup);
        window.addEventListener("touchend", mouseup);

        let dateButtonRect = dateButton.getBoundingClientRect();
        datePicker.style.top = dateButtonRect.height + "px";
        datePicker.style.right = 0;
        dateButton.style.height = dateButtonRect.height + "px";
    });

    function mousedown(e) {
        isPressing = true;
    }

    function mousemove(e) {
        if (!isPressing) return;

        const { clientX, clientY } = e.touches != null ? e.touches[0] : e;

        const rect = ellipse.getBoundingClientRect();
        const ellipseCenterX = rect.x + rect.width / 2 + horizontalMargin;
        const ellipseCenterY = rect.y + rect.height / 2 + verticalMargin;
        angle = Math.atan2(ellipseCenterY - clientY, clientX - ellipseCenterX);

        let x = horizontalRadius * Math.cos(angle);
        let y = verticalRadius * Math.sin(angle);

        earth.setAttribute("x", horizontalRadius + x - earthSize / 2 + horizontalMargin);
        earth.setAttribute("y", verticalRadius - y - earthSize / 2 + verticalMargin);

        let oldDate = date;

        var dayNumber = ((182.5 + (isLeapyear() ? 0.5 : 0)) * (Math.sin(angle / 2) + 1) + 1);

        date = dateFromDay(dayNumber);

        if (oldDate.getDate() == 1 && oldDate.getMonth() == 0 && date.getDate() == 31 && date.getMonth() == 11) {
            year--;
        } else if (oldDate.getDate() == 31 && oldDate.getMonth() == 11 && date.getDate() == 1 && date.getMonth() == 0) {
            year++;
        }

        dayNumber = ((182.5 + (isLeapyear() ? 0.5 : 0)) * (Math.sin(angle / 2) + 1) + 1);
        date = dateFromDay(dayNumber);

        if (date.getTime() > today.getTime()) {
            dateButton.children[0].classList.add("future");
            dateButton.children[0].innerText = "Future Date";
        } else {
            dateButton.children[0].classList.remove("future");
            dateButton.children[0].innerText = addZero(date.getDate()) + "/" + addZero(date.getMonth() + 1) + "/" + date.getFullYear();
        }
    }

    function mouseup(e) {
        isPressing = false;
    }

    function dateFromDay(day) {
        var date = new Date(year, 0);
        return new Date(date.setDate(day));
    }

    function addZero(num) {
        return num < 10 ? "0" + num : num;
    }

    function isLeapyear() {
        return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
    }

    function virusPopup() {
        popupvisibility = "visible"
    }
    function deleteVirus(){
        NumberVirus=1
        VirusList=[]
        virusTimer = 2000
    }
</script>

<main>
    <h1>Sign Up</h1>
    <div id="signupArea">
        <h2>UserName</h2>
        <p>{username}</p>
        <button on:click={() => write()}></button>
        <h2>Password</h2>
        <input type="password">
        <h2>Email</h2>
        <input type="email">
        <div>
            <h2>Date of Birth</h2>
            <button id="date" bind:this={dateButton}>
                <div></div>
                <input type="checkbox">
                <div id="datePicker" bind:this={datePicker}>
                    <svg viewBox="0 0 350 166">
                        <ellipse id="ellipse" cx="175" cy="83" rx="150" ry="73" style="fill-opacity: 0;stroke:yellow;stroke-width:0.5" bind:this={ellipse} />
                        <image id="earth" height="15" width="15" href="earth.png" bind:this={earth}></image>
                        <image id="sun" x="105" y="68" height="30" width="30" href="sun.png"></image>
                    </svg>
                </div>
            </button>
        </div>
        <button style="background-color: green;" on:click={() => window.location.reload()}>Im Done</button>
        <button style="background-color: red;" on:click={() => window.location.reload()}>Sign Up</button>

    </div>
    
    <section style="display:{visibility};">

        {#each Letters as {letter,top,left},i }
            <button on:click={()=>addLetter(i)} style="top:{top}%; left:{left}%;position:absolute">{letter}</button>

        {/each}
        </section>
            {#each VirusList as virus }
            {#if virus.type=="fakeAnti"}
            <div class="popup-content" style="visibility:{popupvisibility}; top:{virus.top}%; left:{virus.left}%;position:absolute">
                <h1 style="color: red;">Warning</h1> 
                <h2>A virus has been detected on this device</h2>
                <button on:click={()=>Antivirus()}>Download countermeasures?</button>
            </div>
            {/if}
            {#if virus.type=="adware"}
            <div class="popup-content" style="visibility:{popupvisibility}; top:{virus.top}%; left:{virus.left}%;position:absolute">
                <h2>Your computer is slow</h2>
                <h2>Download some ram?</h2>
                <button on:click={()=>Antivirus()}>Download Ram?</button>
            </div>
            {/if}
            
            {/each}
            {#if NumberVirus>6}
            <div>
                <button class="deleteButton" on:click={()=>deleteVirus()}>Remove All viruses</button>
            </div>
            {/if}
        

      

</main>

<style>

.deleteButton{
    z-index: 100;
    position: relative;
    top: 0;
    left: 0;
    background-color: red;
    color: white;
    border-radius: 20%;
    width: 300px;
    height: 100px;

}
.popup-content {
    background-color: gainsboro;
    padding: 20px;
    border-radius: 10px;
    width: 30%;
    margin: auto;
    text-align: center;
}

section{
    position: absolute;
    background-color: rgb(109, 109, 53);
    width: 80vw;
    height: 80vh;
    margin: auto;
  }

    main {
        margin: 0;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        background: #464646;
        font: 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        gap: 1rem;
        height: 100vh;
    }

    h1 {
        color: #b435a7;
        font-size: 6rem;
        font-weight: 3000;
        margin: 0;
    }

    h2 {
        color: #c67979;
        font-size: 1.1rem;
        font-weight: 300;
        margin: 0;
    }

    input {
        outline: 0;
        border: none;
        border-bottom: 1px solid #fff;
        border-radius: 0;
        background: transparent;
        width: 220px;
        padding: 0;
        color: #fff;
        -webkit-text-fill-color: #fff;
        opacity: 1;
    }

    #signupArea {
        display: flex;
        flex-direction: column;
    }

    #signupArea > * {
        margin-top: 15px;
    }

    #signupArea > div {
        display: flex;
        justify-content: space-between;
    }

    #datePicker {
        display: flex;
        gap: 1rem;
        width: 75vw;
        max-width: 400px;
        position: absolute;
        z-index: 99;
        background-color: black;
        border-radius: 60px 0px 60px 60px;
        clip-path: circle(0% at 100% 0%);
        transition: clip-path 0.7s;
        cursor: grab;
    }

    svg {
        width: 100%;
    }

    button {
        border: none;
        background: #fff;
        color: #464646;
        border-radius: 0.3rem;
        padding: 0.5rem;
        cursor: pointer;
        position: relative;
    }

    
    #date {
        width: 50%;
        max-width: 50%;
    }

    #date input {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        margin: 0;
        border: none;
        cursor: pointer;
        appearance: none;
        -webkit-appearance: none;
    }

    #date input:checked ~ #datePicker {
        clip-path: circle(150% at 100% 100%);
    }

    input,
    button {
        font: inherit;
    }
</style>
