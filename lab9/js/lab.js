// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
  var outputEl = document.getElementById("output");
  console.log("outputEl: ", outputEl);

  var new1El = document.createElement("p");

  new1El.innerHTML = "Pre-evolution";
  new1El.id = "new-one";
  new1El.style.color="red"

  var new2El = document.createElement("p");
  new1El.id = "new-two";

  new2El.innerHTML = "It evolved!";
  new2El.style.color="blue"

  outputEl.appendChild(new1El);
  outputEl.appendChild(new2El);

  outputEl.style.border = "dashed 5px grey";
  outputEl.className = "changed";

  //console.log(outputEl);
}

// let's get this party started
main();
