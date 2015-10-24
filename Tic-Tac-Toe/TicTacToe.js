'use strict'

$(document).ready(function() {
	var box = $('[data-cell]');
  var turn = 'X'

function horizontal(){
	return   ($('[data-cell="0"]').text() === turn && $('[data-cell="1"]').text() === turn && $('[data-cell="2"]').text() === turn) ||
           ($('[data-cell="3"]').text() === turn && $('[data-cell="4"]').text() === turn && $('[data-cell="5"]').text() === turn) ||
           ($('[data-cell="6"]').text() === turn && $('[data-cell="7"]').text() === turn && $('[data-cell="8"]').text() === turn);

}

function vertical(){
  return   ($('[data-cell="0"]').text() === turn && $('[data-cell="3"]').text() === turn && $('[data-cell="6"]').text() === turn) ||
           ($('[data-cell="1"]').text() === turn && $('[data-cell="4"]').text() === turn && $('[data-cell="7"]').text() === turn) ||
           ($('[data-cell="2"]').text() === turn && $('[data-cell="5"]').text() === turn && $('[data-cell="8"]').text() === turn);
	
}

function diagonal(){
	return ($('[data-cell="0"]').text() === turn && $('[data-cell="4"]').text() === turn && $('[data-cell="8"]').text() === turn) ||
         ($('[data-cell="2"]').text() === turn && $('[data-cell="4"]').text() === turn && $('[data-cell="6"]').text() === turn);	
}

function checkforWin() {
	 if (horizontal() || vertical() || diagonal() ) {
		$('#announce-winner').text('Player ' + turn + ' WINS!');
    }
}	

    box.on('click', function(){ 
    	$(this).text(turn); 
      checkforWin();
      turn = turn === 'X' ? 'O' : 'X';

	} );

} );

