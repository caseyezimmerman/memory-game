$(document).ready(function(){
console.log("test")

	const cards = [
		'<img src="newimages/falcons.png">',
		'<img src="newimages/football.png">',
		'<img src="newimages/mattryan.png">',
		'<img src="newimages/juliojones.png">',
		'<img src="newimages/sanu.png">',
		'<img src="newimages/helmet.png">',
		'<img src="newimages/statue.png">',
		'<img src="newimages/braves.png">',
		'<img src="newimages/atlunited.png">',
		// '<img src="images/monsters-10.png">',
		'<img src="newimages/almiron.png">',
		// '<img src="images/monsters-12.png">',		
		'<img src="newimages/asad.png">',		
		'<img src="newimages/guzan.jpeg">',		
		'<img src="newimages/soccerball.png">',		
		'<img src="newimages/hawks.png">',				
	];
	
	var freshCards = cards.slice()

	var gridSize = 4;
	var cardsToUse = [];





	//MAKING A COUNT UP TIMER TO TIME THE USER ONN HOW LONG IT TAKES THEM TO FINISH
	//STARTS ONCE THEY CHOOSE THEIR DIFFICULTY
	var test;
	$("button").click(function(){
		var totalSeconds = 0;

		test = setInterval(function(){
			++totalSeconds;
			var seconds = totalSeconds
			$("#timer").html(seconds)
		}, 1000);

	});
	//STOPS ONCE THEY CLICK ON STOP TIMER
	$("#stop-timer").click(function(event){
		clearInterval(test);
		console.log("click")
	});

	

	
	//TELLING THE DOM WHAT TO DO WHEN EACH BUTTON IS CLICKED
	$('button').click(function(){
		console.log(freshCards)
		// console.log("user clicked button")
		var userAnswer = $(this).html();
		// console.log(userAnswer)
		if(userAnswer === "Easy"){
			gridSize = 4;
		}else if(userAnswer === "Medium"){
			gridSize = 12;
		}else if(userAnswer === "Hard"){
			gridSize = 28
		}


		//PUTTING 2 RANDOM CARD INTO THE CARDS TO USE ARRAY
		for(let i = 0; i < gridSize/2; i++){
			var rand = cards[Math.floor(Math.random()*cards.length)];
			cardsToUse.push(rand, rand)
			// console.log(cardsToUse)
		}
		//SHUFFLING THE CARDS WE JUST TOLD IT TO PUT IN CARDS TO USE ARRAY
		cardsToUse = shuffleCards(cardsToUse);


		//THE SHUFFLE CARD FUNCTION
		function shuffleCards(cardsToShuffle){
			for(let i = 0; i < 5000; i++){
				rand1 = Math.floor(Math.random()*cardsToShuffle.length);
				rand2 = Math.floor(Math.random()*cardsToShuffle.length);
				var temp = cardsToShuffle[rand1];
				cardsToShuffle[rand1] = cardsToShuffle[rand2];
				cardsToShuffle[rand2] = temp;

			}
			return cardsToShuffle
		}

		


		// }
		// cards.map(function(card){
		// 	cardsToUse.push(card, card) //the SAME card gets pushed onto the array twice, thats how we get two of each image on the 
		// })




		var memoryHTML = "";
		// ---adds the memoryHTML as many times as grid size
		for(let i = 0; i < gridSize; i++){    
			memoryHTML += `<div class="card col-sm-3">`;
				memoryHTML += `<div class="card-holder">`;
					memoryHTML += `<div class="card-front">${cardsToUse[i]}</div>`;
					memoryHTML += `<div class="card-back"></div>`;
				memoryHTML += `</div>`;
			memoryHTML += `</div>`;
		}
		// console.log(memoryHTML);
		$('.mg-stuff').html(memoryHTML);

		// ADD A CLICK LISTENER TO ALL CARD HOLDERS WHICH WE JUST PUT IN THE DOM PREVIOUSLY WITH MEMORYHTML
		$('.card-holder').click(function(){
			// $(this) will target the card holder that was clicked
			$(this).addClass('flip');
			// a card just flipped over
			// ***1. is there another card flipped over already
			// ***-if not do nothing
			// ***-if so..check and see if they match!!!

			// go get all elemnts of a class of flip
			var cardsUp = $('.flip');
			if(cardsUp.length === 2){
				// two cards are cardsUp
				var card1 = cardsUp[0]
				var card2 = cardsUp[1]
				// console.dir(card1)
				if(card1.innerHTML === card2.innerHTML){
					// these are a match, they are the same picture
					cardsUp.each(function(){
						$(this).addClass('matched')
						cardsUp.removeClass('flip'); //removes class of flip from matched
					})
					// cardsUp.addClass('matched'); can use this unstead of function bc we assigned cardsUp to as array of elemnts with the class flip
				}else{
					cardsUp.removeClass("flip");
					cardsUp.addClass('temp-flip')
					// these are not a match bc the html is different
					setTimeout(function(){ //waits 2 seconds until it removes the class flip of the card
						cardsUp.removeClass('temp-flip');
					},1000)
				}
			}else{
				// one card up. do nothing

			}

		})

	});



});