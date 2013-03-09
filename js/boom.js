$('.bigdaddybutton').click(function () {
	$('.flames').fadeIn();
	$('.booooom').fadeIn();
	$(".booooom").animate({
		"text-indent": "-2500px"
  }, 3250, function (){
		 $('.booooom').hide();
  });
});