let count = 0; //? what is this? this is ONE of the ways to declare a variable in javascript. With the let keyword. We declared the variable 'count' and set it to 0.

let countEl = document.getElementById("count-el"); //? what is in-between the ""? A string. A set of text, words or characters. We also grabbed an id from an element.

//? Here we created a function called increment(). Functions usually preform a task or executes some sort of procedure that we declare.
function increment() {
  count += 1;
  console.log(count);

  countEl.innerText = count;
}

let saveEl = document.getElementById("save-el"); //? here we are making a save button grab the ID in the html similar to our count-el.

function save() {
  //? This save function is going to save the increment and display it on the page. Remember the += trick!
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
}
//? the save feature will reset the count back to zero when the save button is clicked!
