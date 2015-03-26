# Moonshot Tour
An interactive wall which uses capacitive paint to activate actions on a tv screen. It's purpose is to showcase Moonshot's work through a gestural, "almost touch" interface.


## Hardware
Follow the [arduino playground](http://playground.arduino.cc/Main/CapacitiveSensor?from=Main.CapSense) tutorials and use a 1MΩ resistor between the send and receive pins.


## Arduino
One Arduino is connected to the host computer and must have the code within the `CapactiveSensor` directory flashed upon it. When touches or almost touches, are sensed, an event is sent to the node server.


## Node Server
The node server will catch events sent from the Arduino by monitoring a serial port at 9600 baud rate. Upon data, the server will check to see if the touch is "touchy" enough and emit to a client.

* `npm install`
* `node .`
* pull up a web browser and navigate to `:3000/`
