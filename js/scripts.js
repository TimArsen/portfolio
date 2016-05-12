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

 	$("#about")
 		.on("click", 
 			function(){
		 		$("#bio > p")
		 			.typed({
				 		strings: ["Never the type of guy to be pigeon-holed, Tim had successful careers in political organizing and non-profit database management before getting into web design and development.<br><br> ^500 He also considers himself an expert in ornithology and astrophysics and is known to dabble in robotics and knitting, with varying degrees of success.<br><br> ^500 He lives with his wife Annie in Boulder, Colorado.<br><br> ^500They have no pets of any kind and keep a small vegetable garden."],
				        typeSpeed: 10,
				        startDelay: 2000,
				        showCursor: false
		    });
 	});

 	$("#contact")
 		.on("click", 
 			function(){
		 		$(".contact-info > p")
		 			.typed({
				 		strings: ["There are many ways to contact Tim,^750 the most conventional way probably being an email sent to timarsen@gmail.com^750<br><br>The least conventional way would be a singing telegram.^1000 Tim has always wanted to recieve a singing telegram^750, but never has^750, so that would really make his day."],
				        typeSpeed: 10,
				        startDelay: 2000,
				        showCursor: false
		    });
 	});

 	$("#skills")
 		.on("click", 
 			function(){
		 		$(".front-end > .skill-title")
		 			.typed({
				 		strings: ["Front End"],
				        typeSpeed: 5,
				        startDelay: 2000,
				        showCursor: false
		    });
	 			$(".mean-stack > .skill-title")
	 			.typed({
			 		strings: ["MEAN Stack"],
			        typeSpeed: 5,
			        startDelay: 3000,
			        showCursor: false
		    });
	 			$(".etc-skills > .skill-title")
	 			.typed({
			 		strings: ["And more..."],
			        typeSpeed: 5,
			        startDelay: 4000,
			        showCursor: false
		    });
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