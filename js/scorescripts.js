var words = ["ostensible","austere","ossified","sublime","opine","sully","canard","lionize","jettison","occulde","irascible","cartography","sanguine","vim","efficacy"];
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