var questions = [{
	question: "Which NBA team has the most championships?",
	answers: ["Lakers", "Celtics", "Bulls", "Spurs"],
	rightAnswer: "Celtics"

}, { question: "Which animal does NOT have ivory?",
	 answers: ["Elk", "Rhino", "Elephant", "Walrus"],
	 rightAnswer: "Rhino"

}, { question: "Which President is on the dime?",
	 answers: ["Lincoln", "Washington", "Eisenhower", "Roosevelt"],
	 rightAnswer: "Roosevelt"

}, { question: "What age was Kurt Cobain at his death?",
	 answers: ["27", "33", "36", "65"],
	 rightAnswer: "27"

}, { question: "Which NBA player has the most MVP awards?",
	 answers: ["Lebron James", "Michael Jordan", "Wilt Chamberlain", "Kareem Abdul-Jabbar"],
	 rightAnswer: "Kareem Abdul-Jabbar"

}, { question: "Which animal is NOT poisonous?",
	 answers: ["Blowfish", "Dart Frog", "Black Widow Spider", "Lionfish"],
	 rightAnswer: "Black Widow Spider"

}, { question: "Which actor has the most Oscars?",
	 answers: ["Leonardo DiCaprio", "Katharine Hepburn", "Daniel Day-Lewis", "Meryl Streep"],
	 rightAnswer: "Katharine Hepburn"

}, { question: "What is the best selling album of all time?",
	 answers: ["Dark Side of the Moon", "Thriller", "Abbey Road", "Purple Rain"],
	 rightAnswer: "Thriller"

}, { question: "Which celebrity did NOT guest star on 'Friends'?",
	 answers: ["Julia Roberts", "Brad Pitt", "George Clooney", "Matt Damon"],
	 rightAnswer: "Matt Damon"

}, { question: "How many pounds is a 'stone'?",
	 answers: ["16", "12", "14", "40"],
	 rightAnswer: "14"

}]

//when start is clicked, button is cleared away and timer and questions are populated
$("#start").click(function(){
	$("#content").empty();
	$("#timer").html("Time Left: 90");

	startTimer();

	for (var q = 0; q < questions.length; q++) {
		$("#content").append("<h3>" + questions[q]["question"]);
		for (var a = 0; a < questions[q]["answers"].length; a++) {
			$("#content").append("<input type='radio' id='Q" + q + "' name='Q" + q + "'value='" + questions[q]["answers"][a] +"'>" + questions[q]["answers"][a] + "<br>")
		}
	}

	$("#content").append("<br><button id='submit' class='btn btn-primary'> SUBMIT")
});

//dynamically generated submit button will run finishPage function if clicked
$(document).on("click", "#submit", finishPage);

var time = 90;
var intervalId;

//timer functions
function decrement() {
	time--;

  $("#timer").html("Time Left: " + time);

  if (time === 0) {
  	stop();
    alert("Times Up!");
    finishPage();
      }
    }

function startTimer() {
	intervalId = setInterval(decrement, 1000);
}

function stop() {
	clearInterval(intervalId);
}

var correct = 0;
var wrong = 0;
var notAnswered = 0;

function checkAnswers() {
	
	for (var i = 0; i < questions.length; i++) {
		var selected = $("input[name='Q" + i + "']:checked");
		//checks if any button within same name attribute has been selected
		//if not, notAnswered increments
		//if selected, value is compared against the right answer
		//if equivalent, correct increment, else wrong increments
		if (selected.length > 0) {
			if (selected.val() === questions[i]["rightAnswer"]) {
				correct ++;
			} else {
				wrong ++;
			}
		} else {
			notAnswered ++;
		}
	}
}

//function that clears question page and brings up results when time runs out or submit button clicked
function finishPage() {
	stop();
	checkAnswers()
    $("#timer").remove();
    $("#content").empty();
    $("#content").append("<h2> All Done!")
    $("#content").append("<h3> Correct Answers: " + correct);
    $("#content").append("<h3> Wrong Answers: " + wrong);
    $("#content").append("<h3> Unanswered: " + notAnswered);
}








