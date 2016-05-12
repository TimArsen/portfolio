$(document).ready(function ($) {

	$('body').toggleClass('loaded');

	$(".description")
		.typed({
		    strings: ["Front-End", "Back-End", "MEAN stack", "Full-Stack Web Developer."],
		    typeSpeed: 40,
		    startDelay: 1000,
		    showCursor: false
		});


 	$(".tab")
 		.on("click", function(){
			$(this).parent().toggleClass("open");
			$(this).toggleClass("rotate");
		});

 	$(".description")
 		.typed({
	        strings: ["Front-End", "Back-End", "MEAN stack", "Full-Stack Web Developer."],
	        typeSpeed: 40,
	        startDelay: 2000,
	        showCursor: false
    });

 	$('.port-box')
		.on('click', 
			function(){
				$('#contact')
					.css({"display": "none" });
		});

	$('.sep')
		.on('click', 
			function(){
				$('#sep-modal')
					.css({"display": "block" });
		});

	$('.bam')
		.on('click', 
			function(){
				$('#bam-modal')
					.css({"display": "block" });
		});

	$('.bbc')
		.on('click', 
			function(){
				$('#bbc-modal')
					.css({"display": "block" });
		});

	$('.ywc')
		.on('click', 
			function(){
				$('#ywc-modal')
					.css({"display": "block" });
		});

	$('.wiki')
		.on('click', 
			function(){
				$('#wiki-modal')
					.css({"display": "block" });
		});

	$('.calc')
		.on('click', 
			function(){
				$('#calc-modal')
					.css({"display": "block" });
		});
	
	$('.sound')
		.on('click', 
			function(){
				$('#sound-modal')
					.css({"display": "block" });
		});
	
	$('.weather')
		.on('click', 
			function(){
				$('#weather-modal')
					.css({"display": "block" });
		});

	$('.to-do')
		.on('click', 
			function(){
				$('#to-do-modal')
					.css({"display": "block" });
		});

	$('.pyelp')
		.on('click', 
			function(){
				$('#pyelp-modal')
					.css({"display": "block" });
		});

	$('.close')
		.on('click',
			function(){
				$('.modal')
					.css({"display" : "none"});
				$('#contact')
					.css({"display": "block" });
			});
});