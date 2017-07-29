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

var card1 = new ClozeCard("_____ is the best dog in the world.", "wrigley");
var card2 = new ClozeCard("Wrigley's favorite toy is a _____.", "tennis ball");
var card3 = new ClozeCard("Labs _____ more than most dogs.", "shed")
var card4 = new ClozeCard("On the cuteness scale of 1 to 10 (1 being the ugliest) Wrigley is a _____.", "100")

cards.push(card1);
cards.push(card2);
cards.push(card3);
cards.push(card4);

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
				console.log("*** Incorrect ***");
				cards[cardCount].full();
				console.log();
				cardCount++
				// continue recursion
				studyCards();
			}
		});
	}
}

studyCards();