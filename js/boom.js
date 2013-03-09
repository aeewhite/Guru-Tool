$('.bigdaddybutton').click(function () {
	$('.flames').fadeIn();
	$('.booooom').fadeIn();
	$(".booooom").animate({
		"text-indent": "-3000px"
  }, 3250, function (){
		 $('.booooom').hide();
		 $('.booooom').css('text-indent','2000px')
  });
});