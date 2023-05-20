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
  var outputEl = document.getElementById('content2')

var buttonEl=document.createElement('button');

buttonEl.innerHTML = 'press me!'

buttonEl.setAttribute('id','my-button');

outputEl.appendChild(buttonEl);




buttonEl.addEventListener('click',function(){
  var userName = window.prompt("Please enter the user's name: ");
  outputEl.innerHTML = 'hello '+userName;
})

}

// let's get this party started
main();
