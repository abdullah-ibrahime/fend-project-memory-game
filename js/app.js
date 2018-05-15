        //Add vareble to git all element in html
        let card = document.getElementsByClassName("card"); //git select class card
        let cards = [...card] //select all cards
        let deck = document.querySelector(".deck");
        let star = document.querySelectorAll(".fa-star"); //select stars panel
        let count = document.querySelector(".moves"); //select moves number
        let move = 0;
        let restart = document.querySelector(".restart"); //select restart icon
        let modal = document.getElementById("popup1") //select Congratulations popup
        let matchCard = document.getElementsByClassName("match"); //selelct matched cards
        let playAgine = document.getElementById("play-again"); //elect play again boton
        console.log(matchCard);

        let opCard = []; //Open card arry 
        var second = 0,
            minute = 0;
        hour = 0;
        var timer = document.querySelector(".timer");
        var interval;


        //functions 



        function shuffle(array) {
            var currentIndex = array.length,
                temporaryValue, randomIndex;

            while (currentIndex !== 0) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }

            return array;
        }


        document.body.onload = start(); //if page loaded start function will run

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


        //moves counter
        function moveCounter() {
            move++;
            count.innerHTML = move;
            //start timer on first click
            if (move == 1) {
                second = 0;
                minute = 0;
                hour = 0;
                startTimer();
            }
            if (move > 12 && move < 15) {
                for (i = 0; i < 3; i++) {
                    if (i > 1) {
                        star[i].style.visibility = "collapse";
                    }
                }
            } else if (move > 16 && move < 19) {
                for (i = 0; i < 3; i++) {
                    if (i > 0) {
                        star[i].style.visibility = "collapse";
                    }
                }
            }

        }

        //Timer function
        function startTimer() {
            interval = setInterval(function() {
                timer.innerHTML = minute + "mins " + second + "secs";
                second++;
                if (second == 60) {
                    minute++;
                    second = 0;
                }
                if (minute == 60) {
                    hour++;
                    minute = 0;
                }
            }, 1000);
        }

        //congratulations function

        function congratulations() {
            if (matchCard.length == 16) {

                clearInterval(interval);
                finalTime = timer.innerHTML;

                // show congratulations modal
                modal.classList.add("show");

                // declare star rating variable
                var starRating = document.querySelector(".stars").innerHTML;

                //showing move, rating, time on modal
                document.getElementById('finalMove').innerHTML = move;
                document.getElementById('starRating').innerHTML = starRating;
                document.getElementById("totalTime").innerHTML = finalTime;
                //closeicon on modal
                closeModal();
            }

        }
        //To close congratulations model
        function closeModal() {
            let closeicon = document.querySelector(".close");
            closeicon.addEventListener("click", function(e) {
                modal.style.display = "none";

            });
        }
        //Play Again function
        function playAgain() {
            modal.classList.remove("show");
            start();
        }

        //add event every click on card
        for (var i = 0; i < cards.length; i++) {
            card = cards[i];
            card.addEventListener("click", display); //to display card
            card.addEventListener("click", openCard); //cheacking for matchinf
            card.addEventListener("click", congratulations); ////if all cards matching congratulations show
        };
        //for restart agen 
        restart.addEventListener("click", start);