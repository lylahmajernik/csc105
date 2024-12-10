$(document).ready(function() {
	
	
	
	
	
			$(".button-53").click(function() {
				$(this).next("p").toggle();
		});
		
			$("li").hover(function() {
				$(this).animate({fontSize: '1.5em'},200);
			}, function() {
				$(this).animate({fontSize: '1em'},200);
				});
				
			$("img").click(function() {
				$(this).fadeToggle("slow", "linear");
			});
			
			$("#imlylah").click(function() {
				$("#profpic").fadeToggle("slow", "linear");
			});

			$("figcaption").click(function() {
				$(this).siblings("img").fadeToggle("slow", "linear");
			});
});
