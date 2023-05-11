// index.js - anonymous functions and callbacks
// Author: Andres Sanchez
// Date:5/9/23



function main() {
  console.log("Main function started.");

  function addOne(x){//anonymous function that adds one
    var results = x+1
    return results;
}
  var someArray = [10,100,200,300]; //an array
  console.log("My starting array",someArray); //printing the array

  var outputEl = document.getElementById("output"); // gets the output
  var new1El = document.createElement("p");//Creating string elements to hold output
  var new2El = document.createElement("p");
  var new3El = document.createElement("p");

  new1El.innerHTML = "My starting array ["+ someArray+']';//initial array
  new1El.id = "array";

  new2El.innerHTML = "Add one to all numbers in an array [" + someArray.map(addOne)+']';//initial array el +1
  new2El.id = "array2";
  
  new3El.innerHTML ="Multiplies all numbers in an array by 2 ["+someArray.map(function(x){
    return x*2;                           
  })+']';
  new3El.id = "array3";

  outputEl.appendChild(new1El);//appends elements to the id
  outputEl.appendChild(new2El);
  outputEl.appendChild(new3El);

  
console.log("1+1 = ",addOne(1));//testing function
console.log("1+2 = ",addOne(2));

  
  
  
  console.log("Add one to all numbers in an array", someArray.map(addOne));//printed results of the anonymous
                                     //function acting on the array
  
  console.log("Multiplies all numbers in an array by 2",someArray.map(function(x){//printed result of callback function
  return x*2;                           //on an array

  
}))
  
}

main();
