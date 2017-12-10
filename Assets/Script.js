$(document).ready(function() {

function initialScreen() {
	initiator = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Test Me!</a></p>";
	$(".mainArea").html(initiator);
}

initialScreen();

$("body").on("click", ".start-button", function(event){
	event.preventDefault();  
	generateHTML();
	timerWrapper();
}); 

$("body").on("click", ".option", function(event){

	selectedAnswer = $(this).text();
	if(selectedAnswer === correctAnswers[qCount]) {
		clearInterval(ticktock);
		generateWin();
	}
	else {
		clearInterval(ticktock);
		generateLoss();
	}
}); 
});  

function generateLossDueToTimeOut() {
	unansweredTally++;
	HTMLmain = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + timer + "</span></p>" + "<p class='text-center'>You ran out of time! It was:" + correctAnswers[qCount] + "</p>" + "<img class='center-block img-wrong' src='./Assets/Images/X.png'>";
	$(".mainArea").html(HTMLmain);
	setTimeout(wait, 4000);
}

function generateWin() {
	correct++;
	HTMLmain = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + timer + "</span></p>" + "<p class='text-center'>Correct!" + correctAnswers[qCount] + "</p>" + images[qCount];
	$(".mainArea").html(HTMLmain);
	setTimeout(wait, 4000);
}

function generateLoss() {
	incorrect++;
	HTMLmain = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + timer + "</span></p>" + "<p class='text-center'>Wrong! "+ correctAnswers[qCount] + "</p>" + "<img class='center-block img-wrong' src='./Assets/Images/X.png'>";
	$(".mainArea").html(HTMLmain);
	setTimeout(wait, 4000);
}

function generateHTML() {
	HTMLmain = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>10</span></p><p class='text-center'>" + questions[qCount] + "</p><p class='pOption option'> " + answersA[qCount][0] + "</p><p class='option'> "+answersA[qCount][1]+"</p><p class='option'> "+answersA[qCount][2]+"</p><p class='option'> "+answersA[qCount][3]+"</p>";
	$(".mainArea").html(HTMLmain);
}

function wait() {
	if (qCount < 7) {
	qCount++;
	generateHTML();
	timer = 10;
	timerWrapper();
	}
	else {
		finalScreen();
	}
}

function timerWrapper() {
	ticktock = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (timer === 0) {
			clearInterval(ticktock);
			generateLossDueToTimeOut();
		}
		if (timer > 0) {
			timer--;
		}
		$(".timer").html(timer);
	}
}

function finalScreen() {
	HTMLmain = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + timer + "</span></p>" + "<p class='text-center'>Done! Check out how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correct + "</p>" + "<p>Wrong Answers: " + incorrect + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
	$(".mainArea").html(HTMLmain);
}

function resetGame() {
	qCount = 0;
	correct = 0;
	incorrect = 0;
	unansweredTally = 0;
	timer = 10;
	generateHTML();
	timerWrapper();
}

var initiator;
var HTMLmain;
var timer = 10;
var questions = ["The Fantastic Four have the headquarters in what building?", "Peter Parker works as a photographer for?", "Thor has two war goats to pull his chariot. What are their names?", "Before becoming Radioactive Man, Chen Lu was:", "S.H.I.E.L.'s highest ranking member is:", "Before turning to a life of crime, Mysterio was:", "Dr. Doom went to the same college as:", "Deadpool joined the Weapon X program because:"];
var answersA = [["Stark Tower", "Fantastic Headquarters", "Baxter Building", "Xavier Institute"], ["The Daily Planet","The Daily Bugle","The New York Times","The Rolling Stones"], ["Balder and Hermod", "Thunder and Lightning", "Ask and Embla", "Toothgrinder and Toothgnasher"], ["A spy","A nuclear physicist","A soldier","A pilot"], ["Nick Fury", "Steven Rogers", "Peter Parker", "Natalia Romanova"], ["A stuntman","A special effects artist","A magician","A firefighter"], ["Tony Stark", "Peter Parker", "Reed Richards", "Bruce Banner"], ["He had incurable cancer","He was forced to","He thought it would be fun","He wanted to fight for justice"]];
var images = ["<img class='center-block img-right' src='./Assets/Images/Baxter.jpg' width='400'>", "<img class='center-block img-right' src='./Assets/Images/Bugle.jpg' width='400'>", "<img class='center-block img-right' src='./Assets/Images/Goats.jpg' width='400'>", "<img class='center-block img-right' src='./Assets/Images/Radioactive.jpg' width='400'>", "<img class='center-block img-right' src='./Assets/Images/NickFury.jpg' width='400'>", "<img class='center-block img-right' src='./Assets/Images/Mysterio.jpg' width='400'>", "<img class='center-block img-right' src='./Assets/Images/ReedRichards.jpg' width='400'>", "<img class='center-block img-right' src='./Assets/Images/Deadpool.jpg' width='400'>"];
var correctAnswers = [" Baxter Building", " The Daily Bugle", " Toothgrinder and Toothgnasher", " A nuclear physicist", " Nick Fury", " A special effects artist", " Reed Richards", " He had incurable cancer"];
var qCount = 0;
var selected;
var ticktock;
var correct = 0;
var incorrect = 0;
var unansweredTally = 0;