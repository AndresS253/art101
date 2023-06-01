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
  function FizzBuzzBoom(){
    var oneLongString='';
    for(var i=0;i<200;i++){
      var num=i;
      oneLongString+=num;
      if (i %3==0){
        oneLongString+='Fizz';
      }
      if (i %5==0){
        oneLongString+='Buzz'
      }
      if (i %7==0){
        oneLongString+='Boom'
    }
    oneLongString+='<br>'
  }
  $('#output').append('<p>'+oneLongString+'</p>');
}
FizzBuzzBoom();
}



// let's get this party started
main();
