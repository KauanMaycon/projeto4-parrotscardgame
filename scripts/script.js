let imageBackCards = [`bobrossparrot`,`explodyparrot`,
`fiestaparrot`,`tripletsparrot`,`metalparrot`,
`revertitparrot`,`unicornparrot`];

let gameArray = [];

function shuffle() { 
	return Math.random() - 0.5; 
}
 
    let containerCards = document.querySelector(".containerCards");
    let amount = prompt('Coloque um número par de 4 a 14 para iniciar o jogo:');
    let pair = amount%2;
    
    function numberChoice(){
        if(amount >= 4 && amount <= 14 && pair === 0 && amount!== null && amount !== isNaN(amount)){ 
            for(let i = 0; i < amount/2; i++){         
                gameArray.push(imageBackCards[i]);
                gameArray.push(imageBackCards[i]);
            }
            gameArray.sort(shuffle);
            displayCards();
        }else{
            alert("Dados inválidos!");   
        }
    }  

    function displayCards(){
        for(let i = 0; i < amount; i++){
        containerCards.innerHTML += ` 
        <li class="card" onclick="flip(this)">
            <div class="backFace face" >
                <img src="./img/${gameArray[i]}.gif">
            </div>
            <div class="frontFace face">
                <img src="./img/front.png" alt="parrot">
            </div>
        </li>`;
       }
    }

    numberChoice();

let card = document.querySelector(".card");
let firstCard;
let secondCard;


    function flip(cardElement){
        let mainCard = cardElement;
        let backCapture = cardElement.querySelector(".backFace img").src;
        //let haveFlip = mainCard.classList.contains("flip");  
       mainCard.classList.add("flip");
       counterDoubleClick();
       if(!firstCard){
        firstCard = backCapture;
       }else if(!secondCard){
       secondCard = backCapture;
       }

       console.log(firstCard);
       console.log(secondCard);
       // console.log(haveFlip); 
        //console.log(backCapture); 
         //check();
    }

    let counterA = 0;

    function counterDoubleClick(){
        counterA ++;
        if(counterA > 2){
            counterA = 0;
            firstCard= "";
            secondCard=""; 
            counterA ++;     
        }else if(firstCard !== secondCard){
            card.classList.remove("flip");
        }else if(firstCard === secondCard){
            card.classList.add("flip");
        }
         console.log(counterA);  
    }










//parte do flipCard
      //if(haveFlip !== true){
        //mainCard.classList.add("flip");
        // }else if (haveFlip === true){
           //  mainCard.classList.remove("flip");
         //}
        
        
        
        
    /*
        if(mainCard !== haveFlip){
            mainCard.classList.add("flip");
        }else if(mainCard >= 2 && mainCard.contains("flip")){
            mainCard.classList.remove("flip");
            mainCard.classList.add("backFace");
        }
      console.log(mainCard);
    }
    */



/*

    function acessArray(){
       // console.log(imageBackCards);
    }

    function size(){
        for(let k = 0; k < imageBackCards.length; k++){
           // console.log(imageBackCards[k]);
        }    
    }
*/
 /*
    function capture(cardCapture){
        let captureCard = cardCapture.parentNode;
        let backCapture = captureCard.querySelector(".backFace img").src;
        if(backCapture !== backCapture){
            
        } 
    }
*/


    

  /*


function check(){
    let equal = firstCard === secondCard;
   
    if (!equal){
        disableCards();
    }else{
        return true;
    }
    console.log(equal);
}

function disableCards(){
    card.firstCard.classList.remove("flip");
    card.secondCard.classList.remove("flip");
}
*/