$(document).ready(function(){
console.log("test")

	const cards = [
		'<img src="images/monsters-01.png">',
		'<img src="images/monsters-02.png">',
		'<img src="images/monsters-03.png">',
		'<img src="images/monsters-04.png">',
		'<img src="images/monsters-05.png">',
		'<img src="images/monsters-06.png">',
		'<img src="images/monsters-07.png">',
		'<img src="images/monsters-08.png">',
		'<img src="images/monsters-09.png">',
		// '<img src="images/monsters-10.png">',
		'<img src="images/monsters-11.png">',
		// '<img src="images/monsters-12.png">',		
		'<img src="images/monsters-13.png">',		
		'<img src="images/monsters-14.png">',		
		'<img src="images/monsters-15.png">',		
		'<img src="images/monsters-16.png">',				
	];


	var gridSize = 4;
	var cardsToUse = [];

	$('button').click(function(){
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

		// for(let i = 0; i < gridSize; i++){

		// }
		cards.map(function(card){
			cardsToUse.push(card,card) //the SAME card gets pushed onto the array twice, thats how we get two of each image on the 
		})

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
					// these are not a match bc the html is different
					setTimeout(function(){ //waits 2 seconds until it removes the class flip of the card
						cardsUp.removeClass('flip');
					},1000)
				}
			}else{
				// one card up. do nothing

			}

		})

	});



});