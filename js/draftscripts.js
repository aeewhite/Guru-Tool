//Navigation Decoration
$(".navli").hover(
	function() {
		$(this).find('.icon-navbar').addClass('icon-white');
	}, 
	function (){
		$(this).find('.icon-navbar').removeClass('icon-white');
	}
);

var students=["Lee Amlung","Clayton Amshoff","Evan Blanford","Spencer Fulkerson","Mark Gumbel","Blake Isaacs","Miles Lee","Chase McGehee","Jack Minogue","Josh Osborne","Clay Schaefer","Jeb Schilling","Patrick Schwarz","Austin Sullivan","Joe Urda","Andrew White","Karsen Woods","Dean Yoder"];

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
				$('.leader').after('<div class="member' + i + ' playerdropzone" ondrop="drop(event)" ondragover="allowDrop(event)" >')
			};
	$('.buttons').slideDown();
	// $('.team1 .member3').focus();
});


function infoBar() {
	$('.infoitem').remove();
	for (var i = 0; i < students.length; i++) {
		$(".info").append('<div class="' + students[i] + ' infoitem btn ' + i + '" id="student' + i + '"  draggable="true" ondragstart="drag(event)">' + students[i] + '</div>');
	}	
}

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
		$('.info').height('auto');
		var h = $('.info').height();
		$('.info').height(h + 20);
		console.log('called_n');
	}
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
	}
$('.next').click( 
	function () {
		advanceTeamSelection();
	});

$('.previous').click( 
	function () {
		goBack();
	});

function allowDrop(ev) {
	ev.preventDefault();
}

function drag(ev) {
	ev.dataTransfer.setData("Text",ev.target.id);

}

function drop(ev) {
	ev.preventDefault();
	var data=ev.dataTransfer.getData("Text");
	ev.target.appendChild(document.getElementById(data));
	advanceTeamSelection();
}
function dropnoadvance(ev) {
	ev.preventDefault();
	var data=ev.dataTransfer.getData("Text");
	ev.target.appendChild(document.getElementById(data));
	goBack();
}

infoBar();

console.log("Why are you even looking at the JavaScript Console? It is for me, not you.")
