var count = 0;

function countup(){
  count += 1;
}

function reset(){
  $('.box').empty();
  $('.box').css('background-color', 'white');
}

function checkwin(str){
  if (($('.one').html() === str) && ($('.two').html() === str) && ($('.three').html() === str)) {
    alert('Player ' + $('#player').text() + '(' + str + ')' + ' wins! Congratulations!!!');
    setTimeout(reset(), 500);
  }
  else if (($('.four').html() === str) && ($('.five').html() === str) && ($('.six').html() === str)) {
    alert('Player ' + $('#player').text() + '(' + str + ')' + ' wins! Congratulations!!!');
    setTimeout(reset(), 500);
  }
  else if (($('.seven').html() === str) && ($('.eight').html() === str) && ($('.nine').html() === str)) {
    alert('Player ' + $('#player').text() + '(' + str + ')' + ' wins! Congratulations!!!');
    setTimeout(reset(), 500);
  }
  else if (($('.one').html() === str) && ($('.four').html() === str) && ($('.seven').html() === str)) {
    alert('Player ' + $('#player').text() + '(' + str + ')' + ' wins! Congratulations!!!');
    setTimeout(reset(), 500);
  }
  else if (($('.two').html() === str) && ($('.five').html() === str) && ($('.eight').html() === str)) {
    alert('Player ' + $('#player').text() + '(' + str + ')' + ' wins! Congratulations!!!');
    setTimeout(reset(), 500);
  }
  else if (($('.three').html() === str) && ($('.six').html() === str) && ($('.nine').html() === str)) {
    alert('Player ' + $('#player').text() + '(' + str + ')' + ' wins! Congratulations!!!');
    setTimeout(reset(), 500);
  }
  else if (($('.one').html() === str) && ($('.five').html() === str) && ($('.nine').html() === str)) {
    alert('Player ' + $('#player').text() + '(' + str + ')' + ' wins! Congratulations!!!');
    setTimeout(reset(), 500);
  }
  else if (($('.seven').html() === str) && ($('.five').html() === str) && ($('.three').html() === str)) {
    alert('Player ' + $('#player').text() + '(' + str + ')' + ' wins! Congratulations!!!');
    setTimeout(reset(), 500);
  }
  else if ($('.box').text().length === 9) {
    alert('Looks like the game is a draw! Try again!')
    setTimeout(reset(), 500);
  }
}


$(document).ready(function(){
  $('.box').on('click', countup);
  $('.box').on('click', function(){
    if (count % 2 === 0 && $(this).text().trim() === ''){
        $(this).html('O');
        $(this).css('background-color', 'mediumblue')
        setTimeout(function(){checkwin('O')}, 500);
      }
    else if (count % 2 !== 0 && $(this).text().trim() === ''){
        $(this).html('X');
        setTimeout(function(){checkwin('X')}, 500);
        $(this).css('background-color', 'firebrick');
      }})

  $('.box').on('click', function(){
    if ($('#player').html() === '1'){
      $('#player').html('2');
    }
    else if ($('#player').html() === '2') {
      $('#player').html('1');
    }
  })

  $('.restart').on('click', function(){
    $('.box').empty();
    $('#player').html('1');
  });
    });
