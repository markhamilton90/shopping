$('document').ready( function() {
	var $input = $('input');

	$input.on('keypress', function(e) {
		if (e.which == 13) {
			if ($input.val() != 0) {
				var text = $input.val();
				$('ul').prepend('<div class="entry"><div class="checkbox"><span class="fa fa-check"></span></div>' + 
						'<li>' + text + '</li></div>');
				$('.entry').
					animate({
					opacity: 1,
					height: "show",
					padding: "show",
					margin: "show",
					top: "+10px"
					}, 400, function(){});
					
				$input.val('');
			};
		};
	});

	$('ul').on('click', '.checkbox', function() {
		$(this).hide();
		$(this).next('li').css({'text-decoration': 'line-through', 'border': '2px solid #5d6d5d',
				'color': '#5d6d5d', 'background-color': '#f5f5f5'})
	});

	$('#clear-all').on('click', function() {
		$('ul').empty();
	});
});