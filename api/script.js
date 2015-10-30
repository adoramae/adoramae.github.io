'use strict';

$(document).ready(function() {

	$.ajax("https://api.github.com/users/adoramae/repos", {
		success: function (rnames){
			_.each(rnames, function (rname) {
				var lsname = '<li class="file" data-url="' + rname['contents_url'].replace("{+path}", "") + '"><a href="#">' + rname['name'] + '</a> ' + '</li>';	
				$('#repos').append(lsname);

			});
			
		}		
	});

	$(document).on('click', '.file', function (event) {
		event.preventDefault();	
		var url = $(this).data('url');
		$.ajax(url, {
			success: function (finames) {
				$('#re-deets').children().remove();
				_.each(finames, function(finame) {
					var deets =  '<li>' + finame['name'] + '</li>';	
					$('#re-deets').append(deets);
				});

			}
		});
	});

});
			
