var config = require('./config')();
var lookup = require('./lib/lookup');



// create server, start sockets
var port = config.PORT || 3000;
var pubDir = require('path').join(__dirname, 'public');
var server = require('connect')().use(
  require('serve-static')(pubDir)
).listen(port);

var io = require('socket.io')(server);
console.log('server started and listening on port', port);



// listen for tap events coming from the arduino
var arduino = require('./lib/arduino')();
arduino.on('tap', function(data){
  var lookupData = lookup.byPinNumber(data.pin);
  lookupData.value = data.value;
  io.sockets.emit('tap', lookupData);
});
