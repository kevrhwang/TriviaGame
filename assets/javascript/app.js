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

$("#start").click(function(){
	$("#content").empty();
	$("#timer").html("Time Left: 120");

	startTimer();

	for (var q = 0; q < questions.length; q++) {
		$("#content").append("<h3>" + questions[q]["question"]);
		for (var a = 0; a < questions[q]["answers"].length; a++) {
			$("#content").append("<input type='radio' id='Q" + q + "' name='Q" + q + "'value='" + questions[q]["answers"][a] +"'>" + questions[q]["answers"][a] + "<br>")
		}
	}

	$("#content").append("<br><button id='submit' class='btn btn-primary'> SUBMIT")
});

$(document).on("click", "#submit", finishPage);

var time = 120;
var intervalId;

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
	var isChecked;
	for (var i = 0; i < questions.length; i++) {
		
		isChecked = $("input[name='Q" + i + "]:checked");

		console.log(isChecked);
		
		if ($.each(isChecked)) {
			if ($("#Q" + i).val() === questions[i]["rightAnswer"]) {
				console.log($("#Q" + i).val())
				console.log(questions[i]["rightAnswer"])
				correct ++
			} else {
				wrong ++;
			}
		} else {
			notAnswered ++;
		}
	}
}

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








