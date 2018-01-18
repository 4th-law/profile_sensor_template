# profile_sensor_template

This is a sensor profile template, it's meant to provide a framework for developing your own javascript/typescript interface with a physical sensor device.

Fleshing out this template out should leave you with a node module that can be imported into your js/ts projects. The scripts you need to do this have already been included in the package.json

The default export (and thus all functions that need to be accessible through the profile) should be included the index.ts file. Any tests you want to run for validation should be inside of the profile.test.ts file, inside of the test folder.

Any non-javascript/typescript code that you need to run your profile should be included in the module folder, you will need to establish the correct linking between this code and the ts/js code that defines the module.

There are only two required functions, data() and info().

data() is a getter method, and is simply called as profile.data, returning the last data point (which is stored by the profile as the private variable _lastDataPoint) recorded by the profile. You are responsible for making sure that the return of data() is correct, both in the sense that the format is correct, and in the sense that the value of _lastDataPoint is up to date.

info() is called as profile.info(), and returns information about this profile. Some information that is generic to all profiles will be returned, though you are responsible for setting the appropriate values of the variables returned (such as the name of your profile).

Other information specific to your profile, such as the framerate of a camera, should be included as a key:value pair inside of the _specs variable, which will also be returned with info().

Each of the above calls can be overwritten to define functionality specific to your use-case.

Any other functions you need to make your profile work, such as helper functions, should also be included inside of index.ts
