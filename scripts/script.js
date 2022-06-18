
let imageBackCards = [`bobrossparrot`,`explodyparrot`,`fiestaparrot`,`tripletsparrot`,`metalparrot`,
`revertitparrot`,`unicornparrot`,`bobrossparrot`,`explodyparrot`,`fiestaparrot`,`tripletsparrot`,`metalparrot`,
`revertitparrot`,`unicornparrot`];

imageBackCards.sort(shuffle);

function shuffle() { 
	return Math.random() - 0.5; 
}

    
    let containerCards = document.querySelector(".containerCards");
    let amount = prompt('Coloque um número par de 4 a 14 para iniciar o jogo:');
    let pair = amount%2;
    
    function numberChoice(){
        if(amount >= 4 && amount <= 14 && pair === 0 && amount!== null && amount !== isNaN(amount)){ 
            for(let i = 0; i < amount; i++){     
            containerCards.innerHTML += ` 
                <ul class="card " onclick="check()">
                    <li class="frontFace face " onclick="turnCard(this)">
                    <img src="./img/front.png" alt="parrot">
                    </li>
                    <li class="backFace face " >
                    <img src="./img/${imageBackCards[i]}.gif" >
                    </li>
                </ul>`;
            }
        }else{
            alert("Dados inválidos!");
        }
    }  

    numberChoice();



    function turnCard(cardElement){
        let mainCard = cardElement.parentNode;
        //let ulCard = card.querySelector("ul .card");
        let haveFlip = mainCard.classList.contains("flip");
       // let flipFace = maninCard.classList.contains(".flip .face")
        //let backCard = document.querySelector(".backFace");
        if (haveFlip) {
            mainCard.classList.remove("flip");
            //backCard.classList.add("backFace");
        } else {
            mainCard.classList.add("flip");
            //backCard.classList.remove("backFace");
          }
    }


    function check(){
   
        for(let j = 0; j < imageBackCards.length; j++){
            console.log(imageBackCards[j]);
        }
    }
 /*
    function capture(){
        //captureBack = document.querySelector(".backFace .face img");
        //captureBack = captureBack.innerHTML;
        console.log("oi");
    }
   */ 