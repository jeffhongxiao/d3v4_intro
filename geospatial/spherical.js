var point = [1, 2];
var geoJson = {};
var contains = d3.geoContains(geoJson, point);
console.log(contains);


var rotationPoint = [2, 4]; // long, lat (in degrees)
var rotateFunc = d3.geoRotation([1, 0, 0]); // yaw, pitch, roll (in degrees)
var resultPoint = rotateFunc(rotationPoint);

console.log(resultPoint);
