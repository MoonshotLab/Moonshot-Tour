var socket = io();
var bodyWidth = $('body').width();


socket.on('tap', function(e){
  if(e.data.youtubeId) loadYoutubeVideo(e.data.youtubeId);
});


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
