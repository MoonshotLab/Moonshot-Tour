var socket = io();
var $pins = {};

socket.on('debug', function(e){
  var color = 'rgb(' + e.value + ', 0, 0)';
  $pins[e.pin].css({'backgroundColor' : color });
  $pins[e.pin].text(e.value);
});


$(function(){
  $('.pin').each(function(i, el){
    var $el = $(el);

    var id = $el.attr('id').split('-')[1];
    $pins[id] = $el.find('span.value');
  });
});
