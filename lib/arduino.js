var config = require('../config')();
var serialPortLib = require('serialport');
var SerialPort = serialPortLib.SerialPort;
var events = require('events');
var emitter = new events.EventEmitter();

// reset the emission expires timer to prevent excessive emissions to listeners
var preventEmission = false;
var emit = function(dataSet){
  preventEmission = setTimeout(function(){ preventEmission = false; }, 2000);
  emitter.emit('tap', dataSet);
};

var onSerialPortData = function(data){
  var splits  = data.split('-');
  if(splits[0]){
    var dataSet = {
      value : Number(splits[1]),
      pin   : Number(splits[0])
    };

    if(preventEmission === false && dataSet.value > 1500)
      emit(dataSet);

    if(config.DEBUG) emitter.emit('debug', dataSet);
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
