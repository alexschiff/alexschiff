$(document).ready(function() {
	$('#home-content').fadeIn('slow', function() {
		$(this).css("display", "inline");
		$(this).css("opacity", 100);
		});
	$('.nav-link').click(function() {
		var linkClicked = $(this).attr("id");
		$('.content').fadeOut('fast')
		setTimeout(function() {

		switch(linkClicked) {
			
			case 'home': 
				console.log("linkClicked = "+linkClicked);
				$('#home-content').fadeIn('slow', function() {
					$(this).css("display", "inline");
					$(this).css("opacity", 100);
					});
				break;
			
			case 'where':
				console.log("linkClicked = "+linkClicked);
				$('#where-content').fadeIn('slow', function() {
					$(this).css("display", "inline");
					$(this).css("opacity", 100);
				});
				break;
			
			case 'education':
				console.log("linkClicked = "+linkClicked);
				$('#education-content').fadeIn('slow', function() {
					$(this).css("display", "inline");
					$(this).css("opacity", 100);
				});
				break;		

			case 'what':
				console.log("linkClicked = "+linkClicked);
				$('#what-content').fadeIn('slow', function() {
					$(this).css("display", "inline");
					$(this).css("opacity", 100);
				});
				break;			
			
			case 'writing': 
				console.log("linkClicked = "+linkClicked);
				$('#writing-content').fadeIn('slow', function() {
					$(this).css("display", "inline");
					$(this).css("opacity", 100);
				});
				break;
			
			case 'goals': 
				console.log("linkClicked = "+linkClicked);
				$('#goals-content').fadeIn('slow', function() {
					$(this).css("display", "inline");
					$(this).css("opacity", 100);
				});
				break;
			
			case 'connect': 
				console.log("linkClicked = "+linkClicked);
				$('#connect-content').fadeIn('slow', function() {
					$(this).css("display", "inline");
					$(this).css("opacity", 100);
				});
				break;			
			
			default:
				console.log("dis no work")
		}
	},400);


	})

})