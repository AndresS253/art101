// index.js - purpose and description here
// Author: Andres Sanchez
// Date:

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction() {
  var userName = window.prompt("Please enter the user's name: ");
  return userName.split('').sort().join();
}

function main() {
  
  
  console.log("Main function started.");
  document.writeln('Your sorted name:',myFunction());
}

// let's get this party started
main();
