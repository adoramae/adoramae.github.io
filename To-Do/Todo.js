'use strict';

$(document).ready(function() {
	$(this).on('submit', function(event){
		event.preventDefault();
		var item = $('#todo').val();
		$('#todo-list').append('<li>' + item + '</li>');
		var item = $('#todo').val('');
	});

	$(this).on('dblclick', 'li', function(event){
		event.preventDefault();
		$(this).remove();

	});

	$('#todo-list').sortable();
});

