        //Add vareble to git all element in html

let card = document.getElementsByClassName("card");//git select class card
let cards = [...card]//select all cards
let deck = document.querySelector(".deck");
let star = document.querySelectorAll(".fa-star"); //select stars panel
let count = document.querySelector(".moves"); //select moves number
let move = 0;
let restart = document.querySelector(".restart"); //select restart icon
let modal = document.getElementById("popup1")//select Congratulations popup
let matchCard = document.getElementsByClassName("match");//selelct matched cards
let playAgine=document.getElementById("play-again");//elect play again boton
   console.log(matchCard);

let opCard = []; //Open card arry 


function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

