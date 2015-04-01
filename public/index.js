var socket = io();
var bodyWidth = $('body').width();


socket.on('tap', function(e){
  $('#player-container').html('');

  if(e.data.youtubeId) loadYoutubeVideo(e.data.youtubeId);
  else if(e.data.vid) makeVideo(e.data.vid);
  else if(e.data.img) loadImg(e.data.img);
});


function loadImg(img){
  var template = '<img src="' + img + '" />';
  $('#player-container').html(template);
}


function makeVideo(url){
  var template = [
    '<video width="' + bodyWidth + '" autoplay=true>',
      '<source type="video/mp4" src="' + url + '"/>',
    '</video>'
  ].join();

  $('#player-container').html(template);
}


function loadYoutubeVideo(shortCode){
  // delete whatever is currently playing
  $('#player-container').html('<div id="player"></div>');

  // talk to youtube and populate the player
  new YT.Player('player', {
    width       : bodyWidth,
    videoId     : shortCode,
    playerVars  : {
      autoplay        : 1,
      controls        : 0,
      modestbranding  : 1,
      showinfo        : 0
    }
  });
}
