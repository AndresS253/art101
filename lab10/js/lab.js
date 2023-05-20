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
  var outputEl = document.getElementById('output');
  var field = document.createElement('input');
  var buttonEl=document.createElement('button');
  var Name = document.createElement('div');
  
  field.type = 'text';
  field.id = 'input';
  
  buttonEl.innerHTML = 'Sort Letters in Name'

  buttonEl.setAttribute('id','my-button');
  
  outputEl.appendChild(field);
  outputEl.insertBefore(buttonEl, field.nextSibling);
  outputEl.insertBefore(Name, buttonEl.nextSibling);
  
  
  

  buttonEl.addEventListener('click',function(){
  Name.innerHTML='Sorted username is: '+field.value.split('').sort().join();

  
})
}

// let's get this party started
main();
