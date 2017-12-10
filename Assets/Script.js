$(document).ready(function() {
// Create a function that creates the start button and initial screen



function initialScreen() {
	startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Test Me!</a></p>";
	$(".mainArea").html(startScreen);
}

initialScreen();

//Create a function, generateHTML(), that is triggered by the start button, and generates the HTML seen on the project video...

$("body").on("click", ".start-button", function(event){
	event.preventDefault();  // added line to test issue on GitHub Viewer
	// clickSound.play();
	generateHTML();

	timerWrapper();

}); // Closes start-button click

$("body").on("click", ".answer", function(event){
	//answeredQuestion = true;
	// clickSound.play();
	selectedAnswer = $(this).text();
	if(selectedAnswer === correctAnswers[questionCounter]) {
		//alert("correct");

		clearInterval(theClock);
		generateWin();
	}
	else {
		//alert("wrong answer!");
		clearInterval(theClock);
		generateLoss();
	}
}); // Close .answer click

// $("body").on("click", ".reset-button", function(event){
// 	clickSound.play();
// 	resetGame();
// }); // Closes reset-button click

});  //  Closes jQuery wrapper

function generateLossDueToTimeOut() {
	unansweredTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='./Assets/Images/X.png'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000);  //  change to 4000 or other amount
}

function generateWin() {
	correctTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000);  //  change to 4000 or other amount
}

function generateLoss() {
	incorrectTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='./Assets/Images/X.png'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000); //  change to 4000 or other amount
}

function generateHTML() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
	$(".mainArea").html(gameHTML);
}

function wait() {
	if (questionCounter < 7) {
	questionCounter++;
	generateHTML();
	counter = 30;
	timerWrapper();
	}
	else {
		finalScreen();
	}
}

function timerWrapper() {
	theClock = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (counter === 0) {
			clearInterval(theClock);
			generateLossDueToTimeOut();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}

function finalScreen() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
	$(".mainArea").html(gameHTML);
}

function resetGame() {
	questionCounter = 0;
	correctTally = 0;
	incorrectTally = 0;
	unansweredTally = 0;
	counter = 30;
	generateHTML();
	timerWrapper();
}

var startScreen;
var gameHTML;
var counter = 30;
var questionArray = ["The Fantastic Four have the headquarters in what building?", "Peter Parker works as a photographer for?", "Thor has two war goats to pull his chariot. What are their names?", "Before becoming Radioactive Man, Chen Lu was:", "S.H.I.E.L.D.'s highest ranking member is:", "Before turning to a life of crime, Mysterio was:", "Dr. Doom went to the same college as:", "Deadpool joined the Weapon X program because:"];
var answerArray = [["Stark Tower", "Fantastic Headquarters", "Baxter Building", "Xavier Institute"], ["The Daily Planet","The Daily Bugle","The New York Times","The Rolling Stones"], ["Balder and Hermod", "Thunder and Lightning", "Ask and Embla", "Toothgrinder and Toothgnasher"], ["A spy","A nucleur physicist","A soldier","A pilot"], ["Nick Fury", "Steven Rogers", "Peter Parker", "Natalia Romanova"], ["A stuntman","A special effects artist","A magician","A firefighter"], ["Tony Stark", "Peter Parker", "Reed Richards", "Bruce Banner"], ["He had incurable cancer","He was forced to","He thought it would be fun","He wanted to fight for justice"]];
var imageArray = ["<img class='center-block img-right' src='./Assets/Images/Baxter.jpg' width='400'>", "<img class='center-block img-right' src='./Assets/Images/Bugle.jpg' width='400'>", "<img class='center-block img-right' src='./Assets/Images/Goats.jpg' width='400'>", "<img class='center-block img-right' src='./Assets/Images/Radioactive.jpg' width='400'>", "<img class='center-block img-right' src='./Assets/Images/NickFury.jpg' width='400'>", "<img class='center-block img-right' src='./Assets/Images/Mysterio.jpg' width='400'>", "<img class='center-block img-right' src='./Assets/Images/ReedRichards.jpg' width='400'>", "<img class='center-block img-right' src='./Assets/Images/Deadpool.jpg' width='400'>"];
var correctAnswers = ["C. Baxter Building", "B. The Daily Bugle", "D. Toothgrinder and Toothgnasher", "B. A nucleur physicist", "A. Nick Fury", "B. A special effects artist", "C. Reed Richards", "A. He had incurable cancer"];
var questionCounter = 0;
var selecterAnswer;
var theClock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;

// var clickSound = new Audio("sound/button-click.mp3");