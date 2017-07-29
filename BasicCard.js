var inquirer = require("inquirer");
var cards = [];
var cardCount = 0;

var BasicCard = function(front, back) {
	this.front = front
	this.back = back
}

var card1 = new BasicCard("Who is the best dog in the world?", "wrigley");
var card2 = new BasicCard("What is Wrigley's favorite toy?", "tennis ball");
var card3 = new BasicCard("What do labs do more than most dogs?", "shed");
var card4 = new BasicCard("On a scale of 1 to 10 (1 being the ugliest), what is Wrigley?", "100");

cards.push(card1);
cards.push(card2);
cards.push(card3);
cards.push(card4);

function studyCards() {
	//recursion loop to prompt each question individually with inquirer
	if(cardCount < cards.length) {

		inquirer.prompt([
			{
				name: "question",
				message: cards[cardCount].front
			}

		]).then(function(answer) {
			if((answer.question).toLowerCase() === cards[cardCount].back) {
					console.log("*** Correct! ***");
					console.log();
					//increase card count per loop
					cardCount++
					studyCards();
				} else {
					console.log("*** Incorrect ***");
					console.log("Correct Answer: " + cards[cardCount].back);
					console.log();
					cardCount++
					studyCards();
				}
			});
	}
}

studyCards();