
// The 7 ways of the function
//https://javascript.christmas/2018/13
// CLOSURE
function counter() {
  let count = 0;

  function increment() {
    return ++count;
  }

  return increment;
}

const coolClosureCounter = counter();

console.log(coolClosureCounter()); // 1
console.log(coolClosureCounter()); // 2

