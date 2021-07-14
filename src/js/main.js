console.log(`Hello World from main.js! 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`)

const customCheckbox = document.getElementById('square');

customCheckbox.addEventListener('click', event => {
   
    customCheckbox.style.borderColor="#24bf41";
    customCheckbox.style.backgroundColor="#24bf41";

});