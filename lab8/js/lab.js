// index.js - anonymous functions and callbacks
// Author: Andres Sanchez
// Date:5/9/23



function main() {
  console.log("Main function started.");
  function addOne(x){//anonymous function that adds one
    var results = x+1
    return results;
}
console.log("1+1 = ",addOne(1));//testing function
console.log("1+2 = ",addOne(2));

  var someArray = [10,100,200,300]; //an array
  console.log("My starting array",someArray); //printing the array
  
  
  console.log("Add one to all numbers in an array", someArray.map(addOne));//printed results of the anonymous
                                     //function acting on the array
  
  console.log("Multiplies all numbers in an array by 2",someArray.map(function(x){//printed result of callback function
  return x*2;                           //on an array
}))
  
}

main();
