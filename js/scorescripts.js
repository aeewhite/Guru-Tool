//If lower score button is pressed, lower score by one
$(".lower").click(
	function () {
		if ( $(this).hasClass("team1") ) {
			var currentteamscore = $('.team1score').text();
			console.log(currentteamscore);
			var currentteamscore = (currentteamscore * 1);
			var newteamscore = currentteamscore - 1
			$('.team1score').text(newteamscore);
		}
		if ( $(this).hasClass("team2") ) {
			var currentteamscore = $('.team2score').text();
			console.log(currentteamscore);
			var currentteamscore = (currentteamscore * 1);
			var newteamscore = currentteamscore - 1
			$('.team2score').text(newteamscore);
		}
		if ( $(this).hasClass("team3") ) {
			var currentteamscore = $('.team3score').text();
			console.log(currentteamscore);
			var currentteamscore = (currentteamscore * 1);
			var newteamscore = currentteamscore - 1
			$('.team3score').text(newteamscore);
		}
		if ( $(this).hasClass("team4") ) {
			var currentteamscore = $('.team4score').text();
			console.log(currentteamscore);
			var currentteamscore = (currentteamscore * 1);
			var newteamscore = currentteamscore - 1
			$('.team4score').text(newteamscore);
		}
		if ( $(this).hasClass("team5") ) {
			var currentteamscore = $('.team5score').text();
			console.log(currentteamscore);
			var currentteamscore = (currentteamscore * 1);
			var newteamscore = currentteamscore - 1
			$('.team5score').text(newteamscore);
		}
	}	
);
//If raise score button is pressed, raise score by one
$(".raise").click(
	function () {
		if ( $(this).hasClass("team1") ) {
			var currentteamscore = $('.team1score').text();
			console.log(currentteamscore);
			var currentteamscore = (currentteamscore * 1);
			var newteamscore = currentteamscore + 1
			$('.team1score').text(newteamscore);
		}
		if ( $(this).hasClass("team2") ) {
			var currentteamscore = $('.team2score').text();
			console.log(currentteamscore);
			var currentteamscore = (currentteamscore * 1);
			var newteamscore = currentteamscore + 1
			$('.team2score').text(newteamscore);
		}
		if ( $(this).hasClass("team3") ) {
			var currentteamscore = $('.team3score').text();
			console.log(currentteamscore);
			var currentteamscore = (currentteamscore * 1);
			var newteamscore = currentteamscore + 1
			$('.team3score').text(newteamscore);
		}
		if ( $(this).hasClass("team4") ) {
			var currentteamscore = $('.team4score').text();
			console.log(currentteamscore);
			var currentteamscore = (currentteamscore * 1);
			var newteamscore = currentteamscore + 1
			$('.team4score').text(newteamscore);
		}
		if ( $(this).hasClass("team5") ) {
			var currentteamscore = $('.team5score').text();
			console.log(currentteamscore);
			var currentteamscore = (currentteamscore * 1);
			var newteamscore = currentteamscore + 1
			$('.team5score').text(newteamscore);
		}
	}	
);
//Boom Daddy (penalty) functions, lowers score by one
$(".boomdaddy").click(
	function () {
		if ( $(this).hasClass("team1") ) {
			var currentteamscore = $('.team1score').text();
			console.log(currentteamscore);
			var currentteamscore = (currentteamscore * 1);
			var newteamscore = currentteamscore - 1
			$('.team1score').text(newteamscore);
		}
		if ( $(this).hasClass("team2") ) {
			var currentteamscore = $('.team2score').text();
			console.log(currentteamscore);
			var currentteamscore = (currentteamscore * 1);
			var newteamscore = currentteamscore - 1
			$('.team2score').text(newteamscore);
		}
		if ( $(this).hasClass("team3") ) {
			var currentteamscore = $('.team3score').text();
			console.log(currentteamscore);
			var currentteamscore = (currentteamscore * 1);
			var newteamscore = currentteamscore - 1
			$('.team3score').text(newteamscore);
		}
		if ( $(this).hasClass("team4") ) {
			var currentteamscore = $('.team4score').text();
			console.log(currentteamscore);
			var currentteamscore = (currentteamscore * 1);
			var newteamscore = currentteamscore - 1
			$('.team4score').text(newteamscore);
		}
		if ( $(this).hasClass("team5") ) {
			var currentteamscore = $('.team5score').text();
			console.log(currentteamscore);
			var currentteamscore = (currentteamscore * 1);
			var newteamscore = currentteamscore - 1
			$('.team5score').text(newteamscore);
		}
	}	
);

//Boom Daddy Flashing animation
$(".boomdaddy").click( function() {
	$('body').addClass("flash");
	setTimeout(function(){
			$('body').removeClass("flash");
	  },200);
	setTimeout(function() {
		$('body').addClass("flash");
		setTimeout(function(){
			$('body').removeClass("flash");
	  },200);
	},400);
	setTimeout(function() {
		$('body').addClass("flash");
		setTimeout(function(){
			$('body').removeClass("flash");
	  },200);
	},800);
});

//Set the height of the div with the timeout button to the same as the others
var teamheight = $(".team").height();
$(".timerbox").height(teamheight);





//Adding timeou to button click
$(".timeout").click(function () {
	timer(
	30000, // milliseconds
	function(timeleft) { // called every step to update the visible countdown
		document.getElementById('timer').innerHTML = timeleft+" seconds";
	},
	function() { // what to do after
		$('#timer').empty();
		$('body').addClass("flash");
		setTimeout(function(){
			$('body').removeClass("flash");
	  },200);
	}
		);
	});

//timer function to be called for the timeout button
function timer(time,update,complete) {
	var start = new Date().getTime();
	var interval = setInterval(function() {
		var now = time-(new Date().getTime()-start);
		if( now <= 0) {
			clearInterval(interval);
			complete();
		}
		else update(Math.floor(now/1000));
	},100); // the smaller this number, the more accurate the timer will be
}

//Has to do with the non-implemented progress bar
// var originaltimerheight = $(".countdown").height();
// var timerincrements = originaltimerheight/30;

// function next () {
// 	var newHeight = $(".countdown").outerHeight() - timerincrements;
// 	$(".countdown").height(newHeight)
// }