let cards = [
`<ul class="card">
    <li class="front-face face">
    <img src="./img/front.png" alt="parrot">
    </li>
    <li class="back-face face">
    <img src="./img/bobrossparrot.gif" >
    </li>
</ul>`,
`<ul class="card">
    <li class="front-face face">
    <img src="./img/front.png" alt="parrot">
    </li>
    <li class="back-face face">
    <img src="./img/explodyparrot.gif" >
    </li>
</ul>`, 
`<ul class="card">
    <li class="front-face face">
    <img src="./img/front.png" alt="parrot">
    </li>
    <li class="back-face face">
    <img src="./img/fiestaparrot.gif">
    </li>
</ul>`,
`<ul class="card">
    <li class="front-face face">
    <img src="./img/front.png" alt="parrot">
    </li>
    <li class="back-face face">
    <img src="./img/tripletsparrot.gif">
    </li>
</ul>`, 
`<ul class="card">
    <li class="front-face face">
    <img src="./img/front.png" alt="parrot">
    </li>
    <li class="back-face face">
    <img src="./img/metalparrot.gif">
    </li>
</ul>`, 
`<ul class="card">
    <li class="front-face face">
    <img src="./img/front.png" alt="parrot">
    </li>
    <li class="back-face face">
    <img src="./img/revertitparrot.gif">
    </li>
</ul>`,
`<ul class="card">
    <li class="front-face face">
    <img src="./img/front.png" alt="parrot">
    </li>
    <li class="back-face face">
    <img src="./img/bobrossparrot.gif" >
    </li>
</ul>`,
`<ul class="card">
    <li class="front-face face">
    <img src="./img/front.png" alt="">
    </li>
    <li class="back-face face">
    <img src="./img/unicornparrot.gif">
    </li>
</ul>`,
`<ul class="card">
    <li class="front-face face">
    <img src="./img/front.png" alt="parrot">
    </li>
    <li class="back-face face">
    <img src="./img/explodyparrot.gif" >
    </li>
</ul>`, 
`<ul class="card">
    <li class="front-face face">
    <img src="./img/front.png" alt="parrot">
    </li>
    <li class="back-face face">
    <img src="./img/fiestaparrot.gif">
    </li>
</ul>`,
`<ul class="card">
    <li class="front-face face">
    <img src="./img/front.png" alt="parrot">
    </li>
    <li class="back-face face">
    <img src="./img/tripletsparrot.gif">
    </li>
</ul>`, 
`<ul class="card">
    <li class="front-face face">
    <img src="./img/front.png" alt="parrot">
    </li>
    <li class="back-face face">
    <img src="./img/metalparrot.gif">
    </li>
</ul>`, 
`<ul class="card">
    <li class="front-face face">
    <img src="./img/front.png" alt="parrot">
    </li>
    <li class="back-face face">
    <img src="./img/revertitparrot.gif">
    </li>
</ul>`,
`<ul class="card">
    <li class="front-face face">
    <img src="./img/front.png" alt="">
    </li>
    <li class="back-face face">
    <img src="./img/unicornparrot.gif">
    </li>
</ul>` ];

let containerCards = document.querySelector(".containerCards");
let amount = prompt('Coloque um número par de 4 a 14 para iniciar o jogo:');
let pair = amount%2;

function numberChoice(){
    if(amount >= 4 && amount <= 14 && pair === 0 && amount!== null && amount !== isNaN(amount)){ 
        for(let i = 0; i < amount; i++){ 
        containerCards.innerHTML += `<div class="card">${cards[i]}</div>`;}
    }else{
        alert("Dados inválidos!");
    }
}  
numberChoice();



