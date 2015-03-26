#include <CapacitiveSensor.h>


CapacitiveSensor proximitySensors[] = {
  CapacitiveSensor(2,3),
  CapacitiveSensor(4,5)
};


void setup()
{
  Serial.begin(9600);
  
  // use a 3 second calibration
  for(int i=0; i<2; i++){
    proximitySensors[i].set_CS_AutocaL_Millis(0xFFFFFFFF);
  } 
}


void loop()                    
{
  // loop over each sensor, printing the sensor values as well
  // as the pin numbers. The pin number has 2 added because we're using
  // the node server to identify pins by their receive pin
  for(int i=0; i<2; i++){
    long proximity = proximitySensors[i].capacitiveSensor(30);
    Serial.print(proximity);
    Serial.print("-");
    Serial.print(i+2);
    Serial.println();
  } 

  delay(100);
}
