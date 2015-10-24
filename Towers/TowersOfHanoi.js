'use strict';

$(document).ready(function() {
	var $lastChild = null;

 	$('[data-stack]').on('click', function() {

 		if ($lastChild) {
 			if (isLegal($lastChild, $(this)) === false) {
 				$('#announce-game-won').text("Move Not Allowed");
 				$('#announce-game-won').fadeOut('slow');
 			} else {
	 			$(this).append($lastChild);
	 			if (checkForWin() === true) {
	 				$('#announce-game-won').text("You won!");
	 				return false;
	 			}
				$lastChild = null;
	 		}
 		} else {
 			$lastChild = $(this).children().last().detach(); 
 		}
 	});

 	function isLegal($lastChild, $stack) {
 		if (parseInt($stack.children().last().attr('data-block')) > parseInt($lastChild.attr('data-block')) || $stack.children().last().attr('data-block') === undefined) {
 			return true;
 		} else {
 			return false;
 		}

 	 }

 	 function checkForWin() {
 		if ($('[data-stack="2"]').first().children().length === 4 || 
 			$('[data-stack="3"]').first().children().length === 4 ) {
 			return true;
 		} else {
 			return false;
 		}

 	 }

});