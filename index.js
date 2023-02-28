let count = 0; //? what is this? this is ONE of the ways to declare a variable in javascript. With the let keyword. We declared the variable 'count' and set it to 0.
console.log(count);

let countEl = document.getElementById("count-el"); //? what is in-between the ""? A string. A set of text, words or characters. We also grabbed an id from an element.
console.log(countEl);

//? Here we created a function called increment(). Functions usually preform a task or executes some sort of procedure that we declare.
function increment() {
  count += 1;
  console.log(count);

  countEl.innerText = count;
}

function save() {
  console.log(count);
  let entries = count + " -";
  console.log(entries);
}
save();

let saveEl = document.getElementById("save-el");
console.log(saveEl);
