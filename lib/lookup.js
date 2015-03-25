var dataSets = require('../db.js')();

exports.byPinNumber = function(pinNumber){
  var foundDataSet = {};

  dataSets.forEach(function(dataSet){
    if(dataSet.pin == pinNumber) foundDataSet = dataSet;
  });

  return foundDataSet;
};
