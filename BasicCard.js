var inquirer = require("inquirer");
var cards = [];
var cardCount = 0;

var BasicCard = function(front, back) {
	this.front = front
	this.back = back
}

var card1 = new BasicCard("question1", "answer1");
var card2 = new BasicCard("question2", "answer2");

cards.push(card1);
cards.push(card2);

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