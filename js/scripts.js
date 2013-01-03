//Navigation Decoration
$(".navli").hover(
	function() {
		$(this).find('.icon-navbar').addClass('icon-white');
	}, 
	function (){
		$(this).find('.icon-navbar').removeClass('icon-white');
	}
);

var students=["Lee Amlung","Clayton Amshoff","Evan Blanford","Spencer Fulkerson","Mark Gumbel","Blake Isaacs","Miles Lee","Chase McGehee","Jack Minogue","Josh Osbourne","Clay Schaefer","Jeb Schilling","Patrick Schwarz","Austin Sullivan","Joe Urda","Andrew White","Karsen Woods","Dean Yoder"];

var teamMembers = " <input type='text' class='member1' > <br> <input type='text' class='member2'> <br> <input type='text' class='member3'> <br> <input type='text' class='member4'> <br> ";

var lastUsed;

function teamLeader (leaderNumber,className){
	leaderNumber = students[Math.floor( Math.random() * students.length )];
	$(className).text( leaderNumber );
	students.splice($.inArray(leaderNumber, students),1);
	infoBar();
}



$('.leader1button').click( function () {
	teamLeader('leader1','.leader1');
});

$('.leader2button').click( function () {
	teamLeader('leader2','.leader2');
});

$('.leader3button').click( function () {
	teamLeader('leader3','.leader3');
});

$('.leader4button').click( function () {
	teamLeader('leader4','.leader4');
});

$('.leader5button').click( function () {
	teamLeader('leader5','.leader5');
	$('.team1').addClass('activeChoice');
	for (var i = 0; i < 4; i++) {
				$('.leader').after('<input type="text" class="member'+ i +'">')
			};
	$('.buttons').slideDown();
	$('.team1 .member3').focus();
});


function infoBar() {
	$('.infoitem').remove();
	for (var i = 0; i < students.length; i++) {
		$(".info").append('<div class="' + students[i] + ' infoitem btn ' + i + '" onclick="students.splice(' + i + ', 1); infoBar(); lastUsed = this"><i class="icon-remove-sign pull-left"></i>' + students[i] + '</div>');
	}
}

$('.next').click( 
	function advanceTeamSelection () {
		$('.activeChoice').removeClass('.activeChoice');
		var current = $('.activeChoice');
		next = current.next('div');
		if (next.length === 0) {  // wrap if necessary
			next = $('.team1');
		} 
		current.removeClass('activeChoice');  // move the current class
		next.addClass('activeChoice');
		$('.activeChoice input').filter(function() { return this.value == ""; }).first().focus();
		console.log('called_n')
	});

$('.previous').click( 
	function goBack () {
		$('.activeChoice').removeClass('.activeChoice');
		var current = $('.activeChoice');
		previous = current.prev('.team');
		if (previous.length === 0) {  // wrap if necessary
			previous = $('.team5');
		}
		current.removeClass('activeChoice');  // move the current class
		previous.addClass('activeChoice');
		$('.activeChoice input').filter(function() { return this.value != ""; }).last().focus();
		$('.info').append( lastUsed );
	});

infoBar();