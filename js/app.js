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
//Display card
display = function() {
    this.classList.toggle('open');
    this.classList.toggle('show');
    this.classList.toggle("disabled");
};
//open card cant be more than tow and cheack matching if type is same call match function
function openCard() {
    opCard.push(this);
    var len = opCard.length;
    if (len === 2) {
        moveCounter();
        if (opCard[0].type === opCard[1].type) {
            match();

        } else {
            unmatch();
        }
    }
};
//Add class match
function match() {
    opCard[0].classList.add("match");
    opCard[1].classList.add("match");
    opCard[0].classList.remove("show", "open");
    opCard[1].classList.remove("show", "open");
    opCard = [];
}
//if unmatch card 
function unmatch() { 
    disable();
    setTimeout(function() {
        opCard[0].classList.remove("show", "open");
        opCard[1].classList.remove("show", "open");
        enable();
        opCard = [];
    }, 1100);
    
}

function disable() {
    Array.prototype.filter.call(cards, function(card) {
        card.classList.add('disabled');
    });
}

function enable() {
    Array.prototype.filter.call(cards, function(card) {
        card.classList.remove('disabled');
        for (var i = 0; i < matchCard.length; i++) {
            matchCard[i].classList.add("disabled");
        }
    });
}


