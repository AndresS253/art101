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
  const POSTERS_PER_ROW = 12;
      const RING_RADIUS = 200;

      function setup_posters (row)
      {
        var posterAngle = 360 / POSTERS_PER_ROW;
        for (var i = 0; i < POSTERS_PER_ROW; i ++) {
          var poster = document.createElement('div');
          poster.className = 'poster';
          // compute and assign the transform for this poster
          var transform = 'rotateY(' + (posterAngle * i) + 'deg) translateZ(' + RING_RADIUS + 'px)';
          poster.style.webkitTransform = transform;
          // setup the number to show inside the poster
          var content = poster.appendChild(document.createElement('p'));
          content.textContent = i;
          // add the poster to the row
          row.appendChild(poster);
        }

      }

      function init ()
      {
        setup_posters(document.getElementById('ring-1'));
        setup_posters(document.getElementById('ring-2'));
        setup_posters(document.getElementById('ring-3'));
      }

      // call init once the document is fully loaded
      window.addEventListener('load', init, false);
  // the code that makes everything happen

  $(document).ready(function() {
    var currentRing = 1; // Track the current ring to be replaced
    var currentElement = 1; // Track the current element within the ring
    
  
    // Attach the click event handler to the button
    $('#activate').click(function() {
      console.log('Clicked!');
      var randomPokemon=Math.floor(Math.random() * 1015) + 1;
      $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon/" + randomPokemon,
        type: "GET",
        dataType: "json",
        success: function(data) {
          // Actions to perform when the API call is successful
          console.log(data);
          // Process the received data or perform other tasks
          var name = data.name;
          var spriteURL = data.sprites.front_default;
          // Replace the number with the Pokémon sprite in the current ring and element
          $('#ring-' + currentRing + ' .poster:nth-child(' + currentElement + ') p').replaceWith('<img src="' + spriteURL + '" alt="Pokemon Sprite">');
          
          currentElement++; // Increment the current element within the ring
          if (currentElement > POSTERS_PER_ROW) {
            currentElement = 1; // Reset the current element if it exceeds the number of elements in the ring
            currentRing++; // Move to the next ring
            if (currentRing > 3) {
              currentRing = 1; // Reset the current ring if it exceeds the number of rings
            }
          }
        },
        error: function(jqXHR, textStatus, errorThrown) { 
          // Actions to perform when the API call fails
          console.log("Error:", textStatus, errorThrown);
          // Handle the error condition appropriately
        }
      });
    });
  });
  
}




// let's get this party started
main();
