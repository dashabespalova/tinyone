// ;(function(){
// 	var menuToggle = document.getElementById("ba-menu-toggle"),
// 	body = document.body;

// 	menuToggle.onclick = function (event){
// 		event.preventDefault();
// 		if(body.className === "ba-menu-opened"){
// 			body.className ="";

// 		} else {
// 			body.className = "ba-menu-opened";
// 		}

// 	}

// })();

;(function($){
	$(function(){
		var body = $('body'),
		menuToggle = $('.ba-menu-toggle');

		menuToggle.click(function(event){
			event.preventDefault();
			body.toggleClass('ba-menu-opened');
		});
	});

})(jQuery)

