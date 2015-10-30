'use strict';

$(document).ready(function() {

	$.ajax("http://reqres-api.herokuapp.com/api/users", {
		success: function (users){
			_.each(users, function (user) {
				var str = '<li><a class="person" href="http://reqres-api.herokuapp.com/api/users/' + user['id'] + '">' + user['first_name'] + " " + user['last_name'] + '</a> </li>';
				$('#people').append(str); 
			});

			$('.person').on('click', function (event){
 			event.preventDefault();
	 		$.ajax( $(this).attr('href'), {
	 			success: function (user){
	 				var stringy = user['first_name'] + ' ' + user['last_name']; 
	 				stringy += '<br /><img src="' + user['avatar'] + '" />' 
	 				$('#person-details').html(stringy);
	 			}
	 		});
		 });	

	   }

	});

});	