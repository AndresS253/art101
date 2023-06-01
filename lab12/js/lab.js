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
  var input=$('#input');
  var button=$('#button');
  function sortingHat(name){
    mod=name.length%4;
    if(mod==2){
      return "Griffindor!!!"
    }
    else if(mod==1){
      return "Hufflepuff!!!"
    }
    else if(mod==0){
      return "Ravenclaw!!!"
    }
    else if(mod==3){
      return "Slytherin!!!"
    }
  }
  var name=$('<div>', {
    id: 'name'
  });
  $('#output').append(name);
  
  button.click(function(){
    var sort='The Sorting Hat has sorted you into: '+sortingHat(input.val());
    name.html(sort);
  })
  

  // the code that makes everything happen
}

// let's get this party started
main();
