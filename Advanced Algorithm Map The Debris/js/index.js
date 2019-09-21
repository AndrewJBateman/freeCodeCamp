/*Algorithm Challenge: Return a new array that transforms 
the element's average altitude into their orbital periods.
The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
You can read about orbital periods on wikipedia.
The values should be rounded to the nearest whole number. The body being orbited is Earth.
The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
*/

const orbitalPeriod = (arr) => {
  const GM = 398600.4418; //gravitation mass
  const earthRadius = 6367.4447;
  
  //use forEach function and do calculation, delete unwanted avgAlt object from each array object. 
  arr.forEach((obj) => {
    //Do calculation using standard formula with Math round, square root, to the power objects
    const orbPeriod = Math.round(2*Math.PI*Math.sqrt(Math.pow(earthRadius + obj.avgAlt,3)/GM));
    delete obj["avgAlt"]; //now remove unwanted key value pair ("delete obj.avgAlt" also works)
    obj.orbitalPeriod = orbPeriod; //add new key value pair
  });
  return arr;
}

//Test solution:
let result
result = orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
console.log(result);
result = orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);
console.log(result);