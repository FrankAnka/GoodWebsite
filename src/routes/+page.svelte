
<!--Delar upp sidan i två delar-->
<main>
  <div>

    <h1 class= "name">  Frank Renberg </h1>
	
    <h2>Här har jag samlat min uppgifter jag gjort i samband med webbutveckling i årskurs 2 på Maja Beskowgymnasiet!</h2>
    <h3>Inspirerade citat för min webbutvecklingsresa:Yes</h3>
    <!--Under denna kommer vi lägga till fler element-->
	
	<p id="inspo">
		"The only way to learn a new programming language is by writing programs in it." - <strong>Dennis Ritchie</strong>, creator of the C programming language.
	</p>
	
	<p style="background-color:pink">
		"Every great developer you know got there by solving problems they were unqualified to solve until they actually did it." - <span>Patrick McKenzie, software engineer and entrepreneur</span>.
	</p>
	
  </div>
    <!--Här kommer vi lägga till en bild senare i uppgiften 1.2.4 Extra styling-->  

    <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
      <path fill="#FF0066" d="M29.5,-44C37.1,-41,41.4,-30.9,43.5,-21.3C45.7,-11.7,45.8,-2.5,46.6,8.2C47.5,19,49.1,31.5,43.9,38.7C38.7,45.9,26.6,47.8,14.3,53.8C1.9,59.9,-10.8,70,-18.4,66.2C-26,62.4,-28.6,44.7,-40.2,33.5C-51.8,22.4,-72.5,17.9,-75.7,9.6C-78.8,1.3,-64.3,-10.7,-56.1,-24.3C-47.8,-37.9,-45.8,-53,-37.5,-55.7C-29.2,-58.3,-14.6,-48.4,-1.8,-45.6C10.9,-42.7,21.9,-46.9,29.5,-44Z" transform=" translate(100,70)"  />
    </svg>
    
</main>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e7008a" fill-opacity="100" d="M0,96L6.2,128C12.3,160,25,224,37,256C49.2,288,62,288,74,272C86.2,256,98,224,111,192C123.1,160,135,128,148,128C160,128,172,160,185,181.3C196.9,203,209,213,222,186.7C233.8,160,246,96,258,80C270.8,64,283,96,295,96C307.7,96,320,64,332,69.3C344.6,75,357,117,369,154.7C381.5,192,394,224,406,208C418.5,192,431,128,443,122.7C455.4,117,468,171,480,181.3C492.3,192,505,160,517,176C529.2,192,542,256,554,282.7C566.2,309,578,299,591,277.3C603.1,256,615,224,628,186.7C640,149,652,107,665,85.3C676.9,64,689,64,702,106.7C713.8,149,726,235,738,250.7C750.8,267,763,213,775,197.3C787.7,181,800,203,812,176C824.6,149,837,75,849,69.3C861.5,64,874,128,886,133.3C898.5,139,911,85,923,80C935.4,75,948,117,960,149.3C972.3,181,985,203,997,181.3C1009.2,160,1022,96,1034,58.7C1046.2,21,1058,11,1071,37.3C1083.1,64,1095,128,1108,176C1120,224,1132,256,1145,234.7C1156.9,213,1169,139,1182,96C1193.8,53,1206,43,1218,42.7C1230.8,43,1243,53,1255,80C1267.7,107,1280,149,1292,176C1304.6,203,1317,213,1329,192C1341.5,171,1354,117,1366,106.7C1378.5,96,1391,128,1403,149.3C1415.4,171,1428,181,1434,186.7L1440,192L1440,320L1433.8,320C1427.7,320,1415,320,1403,320C1390.8,320,1378,320,1366,320C1353.8,320,1342,320,1329,320C1316.9,320,1305,320,1292,320C1280,320,1268,320,1255,320C1243.1,320,1231,320,1218,320C1206.2,320,1194,320,1182,320C1169.2,320,1157,320,1145,320C1132.3,320,1120,320,1108,320C1095.4,320,1083,320,1071,320C1058.5,320,1046,320,1034,320C1021.5,320,1009,320,997,320C984.6,320,972,320,960,320C947.7,320,935,320,923,320C910.8,320,898,320,886,320C873.8,320,862,320,849,320C836.9,320,825,320,812,320C800,320,788,320,775,320C763.1,320,751,320,738,320C726.2,320,714,320,702,320C689.2,320,677,320,665,320C652.3,320,640,320,628,320C615.4,320,603,320,591,320C578.5,320,566,320,554,320C541.5,320,529,320,517,320C504.6,320,492,320,480,320C467.7,320,455,320,443,320C430.8,320,418,320,406,320C393.8,320,382,320,369,320C356.9,320,345,320,332,320C320,320,308,320,295,320C283.1,320,271,320,258,320C246.2,320,234,320,222,320C209.2,320,197,320,185,320C172.3,320,160,320,148,320C135.4,320,123,320,111,320C98.5,320,86,320,74,320C61.5,320,49,320,37,320C24.6,320,12,320,6,320L0,320Z"></path></svg>

<style>
  main{
    /*Styling för att dela upp sidan i två delar. */
    /*Vi kommer gå igenom detta i detalj senare*/
    margin: auto;
    width: 80vw;
    height: 70vh;
    display: grid;
    grid-template-columns: repeat(2,50%);
    overflow: hidden;
  }
  
h1{
    color:yellowgreen;
}
h2{
    color: rgba(38, 146, 97, 0.573);
}
h3{
    color: #75120d;
    font-family: sans-serif;
    font-weight: bold;
}

.name{
    font-family:'Gill Sans';
    font-size: 50px;
}
    

  div{
    /*Styling för att centrera texten i behållaren*/
    margin: auto;
  }
  #inspo{
    font-family: courier;
    font-size: 160%;
}
h1, h2, h3, p {
  display: inline-block;
  /*Ger utrymme mellan element*/
  margin: 10px;
}
span{
    color: green;
}
  </style>
