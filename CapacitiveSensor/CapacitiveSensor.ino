#include <CapacitiveSensor.h>

int sensorCount = 1;
CapacitiveSensor proximitySensors[] = {
  CapacitiveSensor(3,2)
};


void setup()
{
  Serial.begin(9600);
  
  // use a 3 second calibration
  for(int i=0; i<sizeof(proximitySensors); i++){
    proximitySensors[i].set_CS_AutocaL_Millis(3000);
  } 
}


void loop()                    
{
  // loop over each sensor, printing the value
  for(int i=0; i<sensorCount; i++){
    long proximity = proximitySensors[i].capacitiveSensor(30);
    Serial.print(proximity);
    Serial.print("-");
    Serial.print(i);
    Serial.println();
  } 

  delay(100);
}
