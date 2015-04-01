var socket = io();
var $pins = {};

socket.on('debug', function(e){
  $pins[e.pin].text(e.value);
});


$(function(){
  $('.pin').each(function(i, el){
    var $el = $(el);

    var id = $el.attr('id').split('-')[1];
    $pins[id] = $el.find('span.value');
  });
});
