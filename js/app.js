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


document.body.onload = start();//if page loaded start function will run

function start() {
    cards = shuffle(cards);
    // remove all exisiting classes from each card
    for (var i = 0; i < cards.length; i++) {
        deck.innerHTML = "";
        [].forEach.call(cards, function(item) {
            deck.appendChild(item);
        });
        cards[i].classList.remove("show", "open", "match", "disabled");
    }
    // reset moves
    move = 0;
    count.innerHTML = move;
    // reset rating
    for (var i = 0; i < star.length; i++) {
        //star[i].style.color = "#FFD700";
        star[i].style.visibility = "visible";
    }
    //reset timer
    second = 0;
    minute = 0;
    hour = 0;
    var timer = document.querySelector(".timer");
    timer.innerHTML = "0 mins 0 secs";
    clearInterval(interval);


}