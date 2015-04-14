#include <CapacitiveSensor.h>


CapacitiveSensor proximitySensors[] = {
  CapacitiveSensor(2,42),
  CapacitiveSensor(3,43),
  CapacitiveSensor(4,44),
  CapacitiveSensor(5,45),
  CapacitiveSensor(6,46),
  CapacitiveSensor(7,47),
  CapacitiveSensor(8,48),
  CapacitiveSensor(9,49),
  CapacitiveSensor(10,50),
  CapacitiveSensor(11,51),
  CapacitiveSensor(12,52)
};


void setup()
{
  Serial.begin(9600);

  // use a calibration
  for(int i=0; i<11; i++){
    proximitySensors[i].set_CS_AutocaL_Millis(2000);
  }
}


void loop()
{
  // loop over each sensor, printing the sensor values as well
  // as the pin numbers. The pin number has 2 added because we're using
  // the node server to identify pins by their receive pin
  for(int i=0; i<11; i++){
    long proximity = proximitySensors[i].capacitiveSensor(30);
    Serial.print(i+2);
    Serial.print("-");
    Serial.print(proximity);
    Serial.println();
  }

  delay(100);
}
