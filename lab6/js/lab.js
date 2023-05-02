// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants
var YEAR=2023;

// Functions


var myMainRide = {
  make: 'BMW',
  model: '128i',
  color: 'White',
  year: 2008,
  age: function() {return 2023-this.year;}
}
var myTransport=['cheverlegs','car','bicycle'];
function main() {
  console.log("Main function started.");
  
  // the code that makes everything happen
  document.writeln("Getting around: " + myTransport + "<br>");
  document.writeln("My Main Ride: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "</pre>");

}

// let's get this party started
main();
