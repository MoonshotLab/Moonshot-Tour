var serialPortLib = require('serialport');
var SerialPort = serialPortLib.SerialPort;
var events = require('events');
var emitter = new events.EventEmitter();

var preventEmission = false;


var onSerialPortData = function(data){
  var splits  = data.split('-');
  var dataSet = {
    value : splits[0],
    pin   : splits[1]
  };

  // reset the emission expires timer to prevent excessive missions to listeners
  if(dataSet.value > 20 && preventEmission === false){
    preventEmission = setTimeout(function(){ preventEmission = false; }, 2000);
    emitter.emit('tap', dataSet);
  }
};



// find the arduino and listen to any events
serialPortLib.list(function(err, ports){
  ports.forEach(function(port, i){
    if(port.manufacturer.indexOf('Arduino') != -1){

      var serialPort = new SerialPort(port.comName, {
        baudrate  : 9600,
        parser    : serialPortLib.parsers.readline('\n')
      });

      serialPort.on('data', onSerialPortData);
    }
  });
});




module.exports = function(){
  return emitter;
};
