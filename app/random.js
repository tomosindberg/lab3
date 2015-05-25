var i=0;

$('#color-picker').on('click', function () {
    $.get('/color', function(color){
      $('h1').text(color).css('color', color).css('background', "gray");
    });
});

$('#jokes-picker').on('click', function() {
  $.get('/jokes' , function(jokes){

    $('h3').text("Joke---" + jokes[i].setup);
    $('h3').append('<br><br> punchline:  ' + jokes[i].punchline + '<br>');

    i++;  //couldnt find a cleaner way to do this.
    if (i == jokes.length) {
      i = 0;
    }
  });
});

$.get('/text', function() {
  $('div').text("Theses jokes are so great!!");
});

