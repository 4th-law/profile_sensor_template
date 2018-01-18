# profile_sensor_template

Sensor profile template, this is meant to be a node module that can be imported into your code for interfacing with a physical sensor (this means any javacript you need should be in the index.ts file). Any system-level code that needs to be called inside of index.ts should be included inside of the this folder.

There are only two necessary functions, data() [a getter method, and therefore can be called as sensor.data] and info() [which is called like a normal function]. data() will return the last datapoint available to your sensor. You are responsible for handling this data, and making sure that data() has the expected behavior. info() is fairly static, and simply returns useful information about the profile (such as a refresh rate, effective range, etc.)

Any other functions you need to make your profile work, such as helper functions, should also be included inside of index.ts
