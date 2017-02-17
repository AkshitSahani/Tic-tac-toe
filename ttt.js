var count = 0;

function varup(){
  count += 1;
}

function ttt(){
  if (count % 2 === 0){
    $('.box').text('O');
  }
  else {
    $('.box').text('X');
  }
}


$(document).ready(function(){
  $('.box').on('click', varup);
  $('.box').on('click', function(){
    if (count % 2 === 0){
      if ($(this).text() === ''){
        $(this).html('O');
      }}
    else if (count % 2 !== 0){
      if ($(this).text() === ''){
        $(this).html('X');
      }}
    })
});



  //Previous solution. Ask TAs how this can be refactored
  // $('.one').on('click', function(){
  //   if (count % 2 ===0){
  //     $('.one').text('O');
  //   }
  //   else {
  //     $('.one').text('X');
  //   }})
  // $('.two').on('click', function(){
  //   if (count % 2 ===0){
  //     $('.two').text('O');
  //   }
  //   else {
  //     $('.two').text('X');
  //   }})
  // $('.three').on('click', function(){
  //   if (count % 2 ===0){
  //       $('.three').text('O');
  //     }
  //   else {
  //       $('.three').text('X');
  //     }});
  // $('.four').on('click', function(){
  //   if (count % 2 ===0){
  //         $('.four').text('O');
  //       }
  //   else {
  //         $('.four').text('X');
  //       }})
  // $('.five').on('click', function(){
  //   if (count % 2 ===0){
  //         $('.five').text('O');
  //             }
  //   else {
  //         $('.five').text('X');
  //             }})
  // });
  // $('.five').on('click', ttt);
  // $('.six').on('click', ttt);
  // $('.seven').on('click', ttt);
  // $('.eight').on('click', ttt);
  // $('.nine').on('click', ttt);
