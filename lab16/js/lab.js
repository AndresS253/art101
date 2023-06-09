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

$(document).ready(function() {
  const api_url = 'https://xkcd.com/info.0.json';

  $.ajax({
    url: api_url,
    dataType: 'json',
    success: function(data) {
      var comicObj = data; // Store the received data in the comicObj variable
      console.log(comicObj);

      // Add the parts to the webpage using appropriate tags
      $('section').append('<h2>' + comicObj.title + '</h2>');
      $('section').append('<img src="' + comicObj.img + '" alt="' + comicObj.alt + '" title="' + comicObj.alt + '">');
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log('Error:', textStatus, errorThrown);
    }
  });
});

  
  

  














  


// let's get this party started

