let imageBackCards = [`bobrossparrot`,`explodyparrot`,`fiestaparrot`,`tripletsparrot`,`metalparrot`,
`revertitparrot`,`unicornparrot`,`bobrossparrot`,`explodyparrot`,`fiestaparrot`,`tripletsparrot`,`metalparrot`,
`revertitparrot`,`unicornparrot`];


let arraySize = imageBackCards.length;

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
                <li class="card" onclick="turnCard(this)">
                    <div class="backFace face " >
                        <img src="./img/${imageBackCards[i]}.gif" >
                    </div>
                    <div class="frontFace face"  >
                        <img src="./img/front.png" alt="parrot">
                    </div>
                </li>`;
            }
        }else{
            alert("Dados inválidos!");
        }
    }  

    numberChoice();


    
    function turnCard(cardElement){
        let mainCard = cardElement;
        let haveFlip = mainCard.classList.contains("flip");
        if(haveFlip){
          mainCard.classList.remove("flip");
        }else{
            mainCard.classList.add("flip");
        }
       // console.log(mainCard);
        // console.log(haveFlip);  
    }








  