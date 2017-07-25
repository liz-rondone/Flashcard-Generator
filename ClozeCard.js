var inquirer = require("inquirer");
var cards = [];
var cardCount = 0;
var clozeText

var ClozeCard = function(text, cloze) {
	this.text = text
	this.cloze = cloze
}

// make the sentence complete
ClozeCard.prototype.full = function() {
	//show sentence with a blank
	clozeDeleted = this.cloze;
	clozeText = this.text;

	// replace the incomplete sentence with the answer (cloze)
	clozeText = clozeText.replace("_____", clozeDeleted);

	//show answer
	console.log(clozeText);
}

var card1 = new ClozeCard("question1 _____ rest of answer", "answer1");
var card2 = new ClozeCard("question1 _____ rest of answer", "answer2");

cards.push(card1);
cards.push(card2);

function studyCards() {
	if(cardCount < cards.length) {
		inquirer.prompt([
			{
				name: "partial",
				message: cards[cardCount].text
			}
		]).then(function(answer) {
			// if user's answer matches the cloze answer, log Correct, loop back through studyCards
			if((answer.partial).toLowerCase() === cards[cardCount].cloze) {
				console.log("*** Correct! ***");
				console.log();
				//increase card count per loop
				cardCount++
				//continue recursion
				studyCards();
			} else {
				//if user's answer doesn't match cloze answer, log incorrect then show full sentence
				console.log();
				console.log("*** Incorrect ***");
				cards[cardCount].full();
				cardCount++
				// continue recursion
				studyCards();
			}
		});
	}
}

studyCards();