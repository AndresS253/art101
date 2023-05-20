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
  
  $(document).ready(function() {//creates and appends button to challenge section
    var ChallengeButton = $('<button>', {
      id: 'challengeButton',
      text: 'Challenge Button'
      });
      ChallengeButton.click(function(){
        alert('Challenge Time!')// action goes here!!
    });
    $('#challenge').append(ChallengeButton);
  
  
  //creates and appends button to problems section
    var ProblemsButton = $('<button>', {
      id: 'probButton',
      text: 'Problems Button'
      });
      ProblemsButton.click(function(){
        alert('Adventure Time!')// action goes here!!
    });
    $('#problems').append(ProblemsButton);
  
  
  //creates and appends button to reflection section
    var ReflectionButton = $('<button>', {
      id: 'reflectionButton',
      text: 'Reflection Button'
      });
      ReflectionButton.click(function(){
        alert('Reflection Time!')// action goes here!!
    });
      $('#reflection').append(ReflectionButton);
  });

    

}

// let's get this party started
main();
