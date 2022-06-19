
let imageBackCards = [`bobrossparrot`,`explodyparrot`,`fiestaparrot`,
`tripletsparrot`,`metalparrot`,
`revertitparrot`,`unicornparrot`];


/*
let bobrossparrot1 = `bobrossparrot`;
let bobrossparrot2 = `bobrossparrot`;
let explodyparrot1 = `explodyparrot`;
let explodyparrot2 = `explodyparrot`;
let tripletsparrot1 = `tripletsparrot`;
let tripletsparrot2 = `tripletsparrot`;
let metalparrot1 =`metalparrot`;
let metalparrot2 =`metalparrot`;
let revertitparrot1 = `revertitparrot`;
let revertitparrot2 = `revertitparrot`;
let unicornparrot1 = `unicornparrot`;
let unicornparrot2 = `unicornparrot`;
let fiestaparrot1 = `fiestaparrot`;
let fiestaparrot2 = `fiestaparrot`;
let imageBackCards =[bobrossparrot1,bobrossparrot2,explodyparrot1,explodyparrot2,
    tripletsparrot1,tripletsparrot2,metalparrot1,metalparrot2,revertitparrot1,
    revertitparrot2,unicornparrot1,unicornparrot2,fiestaparrot1,fiestaparrot2];
*/

let gameArray = [];

imageBackCards.sort(shuffle);


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
                <img src="./img/${gameArray[i]}.gif" onclick="acessArray(this)" >
            </div>
            <div class="frontFace face" onclick="capture(this)">
                <img src="./img/front.png" alt="parrot">
            </div>
        </li>`;
       }
    }

    numberChoice();


    function flip(cardElement){
        let mainCard = cardElement;
        mainCard.classList.toggle("flip");
       // size();
        //console.log(arraySize);
       // console.log(mainCard);
       //console.log(mainCard);  
    }

    function capture(cardCapture){
        let captureCard = cardCapture.parentNode;
        let backCapture = captureCard.querySelector(".backFace img").src;
        //let haveFlip = captureCard.classList.contains("flip");
         //let a = backCapture !== backCapture;
           
       // console.log(captureCard);
        console.log(backCapture);
        //console.log(haveFlip);
        //console.log(a);
    }


    function acessArray(){
       // console.log(imageBackCards);
    }



    function size(){
        for(let k = 0; k < imageBackCards.length; k++){
           // console.log(imageBackCards[k]);
        }    
    }















    

  


 