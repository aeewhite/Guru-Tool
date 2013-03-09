$('.bigdaddybutton').click(function () {
	$('.flames').fadeIn();
	$('.booooom').fadeIn();
	$(".booooom").animate({
		"text-indent": "1800px"
  }, 3250, function (){
		 $('.booooom').hide();
  });
});