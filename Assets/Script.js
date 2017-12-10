$(document).ready(function() {

// function initialScreen() {
// 	initiator = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Lets Go!</a></p>";
// 	$(".mainArea").html(initiator);
// }

// initialScreen();

$("body").on("click", ".start-button", function(event){
	event.preventDefault();  
	generateHTML();
	timerWrapper();
}); 

$("body").on("click", ".option", function(event){

	selectedAnswer = $(this).text();
	if(selectedAnswer === correctAnswers[questionCounter]) {
		clearInterval(theClock);
		generateWin();
	}
	else {
		clearInterval(theClock);
		generateLoss();
	}
}); 
});  

function generateLossDueToTimeOut() {
	unansweredTally++;
	primaryHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + timer + "</span></p>" + "<p class='text-center'>Times up - the answer was" + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='./Assets/Images/X.png'>";
	$(".mainArea").html(primaryHTML);
	setTimeout(wait, 4000);
}

function generateWin() {
	correctTally++;
	primaryHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + timer + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
	$(".mainArea").html(primaryHTML);
	setTimeout(wait, 4000);
}

function generateLoss() {
	incorrectTally++;
	primaryHTML = "<p class='text-center timer-p'>Time: <span class='timer'>" + timer + "</span></p>" + "<p class='text-center'>Incorrect! The answer is: "+ correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='./Assets/Images/X.png'>";
	$(".mainArea").html(primaryHTML);
	setTimeout(wait, 4000);
}

function generateHTML() {
	primaryHTML = "<p class='text-center timer-p'>Time: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer option'>" + answerArray[questionCounter][0] + "</p><p class='option'>"answerArray[questionCounter][1]"</p><p class='option'>"answerArray[questionCounter][2]+"</p><p class='option'>"answerArray[questionCounter][3]+"</p>";
	$(".mainArea").html(primaryHTML);
}

function wait() {
	if (questionCounter < 7) {
	questionCounter++;
	generateHTML();
	timer = 30;
	timerWrapper();
	}
	else {
		finalScreen();
	}
}

function timerWrapper() {
	theClock = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (timer === 0) {
			clearInterval(theClock);
			generateLossDueToTimeOut();
		}
		if (timer > 0) {
			timer--;
		}
		$(".timer").html(timer);
	}
}

function finalScreen() {
	primaryHTML = "<p class='text-center timer-p'>Time: <span class='timer'>" + timer + "</span></p>" + "<p class='text-center'>Done! Check out how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
	$(".mainArea").html(primaryHTML);
}

function resetGame() {
	questionCounter = 0;
	correctTally = 0;
	incorrectTally = 0;
	unansweredTally = 0;
	timer = 30;
	generateHTML();
	timerWrapper();
}

var initiator;
var primaryHTML;
var timer = 10;
var questionArray = ["The Fantastic Four have the headquarters in what building?", "Peter Parker works as a photographer for?", "Thor has two war goats to pull his chariot. What are their names?", "Before becoming Radioactive Man, Chen Lu was:", "S.H.I.E.L.D.'s highest ranking member is:", "Before turning to a life of crime, Mysterio was:", "Dr. Doom went to the same college as:", "Deadpool joined the Weapon X program because:"];
var answerArray = [["Stark Tower", "Fantastic Headquarters", "Baxter Building", "Xavier Institute"], ["The Daily Planet","The Daily Bugle","The New York Times","The Rolling Stones"], ["Balder and Hermod", "Thunder and Lightning", "Ask and Embla", "Toothgrinder and Toothgnasher"], ["A spy","A nuclear physicist","A soldier","A pilot"], ["Nick Fury", "Steven Rogers", "Peter Parker", "Natalia Romanova"], ["A stuntman","A special effects artist","A magician","A firefighter"], ["Tony Stark", "Peter Parker", "Reed Richards", "Bruce Banner"], ["He had incurable cancer","He was forced to","He thought it would be fun","He wanted to fight for justice"]];
var imageArray = ["<img class='center-block img-right' src='./Assets/Images/Baxter.jpg' width='400'>", "<img class='center-block img-right' src='./Assets/Images/Bugle.jpg' width='400'>", "<img class='center-block img-right' src='./Assets/Images/Goats.jpg' width='400'>", "<img class='center-block img-right' src='./Assets/Images/Radioactive.jpg' width='400'>", "<img class='center-block img-right' src='./Assets/Images/NickFury.jpg' width='400'>", "<img class='center-block img-right' src='./Assets/Images/Mysterio.jpg' width='400'>", "<img class='center-block img-right' src='./Assets/Images/ReedRichards.jpg' width='400'>", "<img class='center-block img-right' src='./Assets/Images/Deadpool.jpg' width='400'>"];
var correctAnswers = ["C. Baxter Building", "B. The Daily Bugle", "D. Toothgrinder and Toothgnasher", "B. A nuclear physicist", "A. Nick Fury", "B. A special effects artist", "C. Reed Richards", "A. He had incurable cancer"];
var questionCounter = 0;
var selecterAnswer;
var theClock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;