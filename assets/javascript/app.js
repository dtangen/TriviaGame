$(document).ready(function() {

var number = 30;
var intervalId;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 5;
var question1 = false;
var question2 = false;
var question3 = false;
var question4 = false;
var question5 = false;

function run() {
      intervalId = setInterval(decrement, 1000);
}

function decrement() {
    
	number--;

	$("#timeRemaining").html("<p>Time Remaining: " + number + "</p>");

if (number === 0) {

        stop();

    }

}

    function stop() {

    clearInterval(intervalId);

    	$("#questions").replaceWith("");
     	$("#correct").append("Correct Answers: " + correctAnswers);
      	$("#incorrect").append("Incorrect Answers: " + incorrectAnswers);
      	$("#unanswered").append("Unanswered: " + unanswered);
    }

run();                

//Question 1
$("#NE1").on("click", function() {
	if (document.getElementById("NE1").checked && number > 0 && question1 === false) {
		incorrectAnswers = incorrectAnswers + 1;
		unanswered = unanswered - 1;
		question1 = true;
	}
});

$("#DAL1").on("click", function() {
	if (document.getElementById("DAL1").checked && number > 0 && question1 === false) {
		incorrectAnswers = incorrectAnswers + 1;
		unanswered = unanswered - 1;
		question1 = true;
	}
});


$("#BUF1").on("click", function() {
	if (document.getElementById("BUF1").checked && number > 0 && question1 === false) {
		correctAnswers = correctAnswers + 1;
		unanswered = unanswered - 1;
		question1 = true;
	}
});


$("#SF1").on("click", function() {
	if (document.getElementById("SF1").checked && number > 0 && question1 === false) {
		incorrectAnswers = incorrectAnswers + 1;
		unanswered = unanswered - 1;
		question1 = true;
	}
});


//Question 2
$("#KC2").on("click", function() {
	if (document.getElementById("KC2").checked && number > 0 && question2 === false) {
		incorrectAnswers = incorrectAnswers + 1;
		unanswered = unanswered - 1;
		question2 = true;
	}
});

$("#MIN2").on("click", function() {
	if (document.getElementById("MIN2").checked && number > 0 && question2 === false) {
		incorrectAnswers = incorrectAnswers + 1;
		unanswered = unanswered - 1;
		question2 = true;
	}
});


$("#GB2").on("click", function() {
	if (document.getElementById("GB2").checked && number > 0 && question2 === false) {
		correctAnswers = correctAnswers + 1;
		unanswered = unanswered - 1;
		question2 = true;
	}
});


$("#PIT2").on("click", function() {
	if (document.getElementById("PIT2").checked && number > 0 && question2 === false) {
		incorrectAnswers = incorrectAnswers + 1;
		unanswered = unanswered - 1;
		question2 = true;
	}
});

//Question 3
$("#DS3").on("click", function() {
	if (document.getElementById("DS3").checked && number > 0 && question3=== false) {
		correctAnswers = correctAnswers + 1;
		unanswered = unanswered - 1;
		question3 = true;
	}
});

$("#TL3").on("click", function() {
	if (document.getElementById("TL3").checked && number > 0 && question3 === false) {
		incorrectAnswers = incorrectAnswers + 1;
		unanswered = unanswered - 1;
		question3 = true;
	}
});


$("#BB3").on("click", function() {
	if (document.getElementById("BB3").checked && number > 0 && question3 === false) {
		incorrectAnswers = incorrectAnswers + 1;
		unanswered = unanswered - 1;
		question3 = true;
	}
});


$("#CN3").on("click", function() {
	if (document.getElementById("CN3").checked && number > 0 && question3 === false) {
		incorrectAnswers = incorrectAnswers + 1;
		unanswered = unanswered - 1;
		question3 = true;
	}
});

//Question 4
$("#MT4").on("click", function() {
	if (document.getElementById("MT4").checked && number > 0 && question4 === false) {
		incorrectAnswers = incorrectAnswers + 1;
		unanswered = unanswered - 1;
		question4 = true;
	}
});

$("#WS4").on("click", function() {
	if (document.getElementById("WS4").checked && number > 0 && question4 === false) {
		incorrectAnswers = incorrectAnswers + 1;
		unanswered = unanswered - 1;
		question4 = true;
	}
});


$("#JM4").on("click", function() {
	if (document.getElementById("JM4").checked && number > 0 && question4 === false) {
		incorrectAnswers = incorrectAnswers + 1;
		unanswered = unanswered - 1;
		question4 = true;
	}
});


$("#BF4").on("click", function() {
	if (document.getElementById("BF4").checked && number > 0 && question4 === false) {
		correctAnswers = correctAnswers + 1;
		unanswered = unanswered - 1;
		question4 = true;
	}
});

//Question 5
$("#CHI5").on("click", function() {
	if (document.getElementById("CHI5").checked && number > 0 && question5 === false) {
		correctAnswers = correctAnswers + 1;
		unanswered = unanswered - 1;
		question5 = true;
	}
});

$("#DAL5").on("click", function() {
	if (document.getElementById("DAL5").checked && number > 0 && question5 === false) {
		incorrectAnswers = incorrectAnswers + 1;
		unanswered = unanswered - 1;
		question5 = true;
	}
});


$("#GB5").on("click", function() {
	if (document.getElementById("GB5").checked && number > 0 && question5 === false) {
		incorrectAnswers = incorrectAnswers + 1;
		unanswered = unanswered - 1;
		question5 = true;
	}
});


$("#SF5").on("click", function() {
	if (document.getElementById("SF5").checked && number > 0 && question5 === false) {
		incorrectAnswers = incorrectAnswers + 1;
		unanswered = unanswered - 1;
		question5 = true;
	}
});

});