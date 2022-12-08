/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    document.getElementById("encrypt-it").addEventListener('click', handleClick );
  }

  function handleClick() {
    const message = document.getElementById('input-text').value.split('');
    const alphaLower = 'abcdefghijklmnopqrstuvwxyz';
    const alphaUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let encrypted = '';

    for (const letter of message){
      if (alphaLower.includes(letter)){
        encrypted += (alphaLower.indexOf(letter)+1 > alphaLower.length-1) ? alphaLower[0] : alphaLower[alphaLower.indexOf(letter) + 1];
      }
      else if (alphaUpper.includes(letter)){
        encrypted += (alphaUpper.indexOf(letter)+1 > alphaUpper.length-1) ? alphaUpper[0] : alphaUpper[alphaUpper.indexOf(letter) + 1];
      }
      else encrypted += letter;
    }
    document.getElementById('result').textContent = encrypted;  
  }
  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

})();
