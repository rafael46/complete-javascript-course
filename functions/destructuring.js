// How to get a subset of a javascript object's properties
// https://stackoverflow.com/questions/17781472/how-to-get-a-subset-of-a-javascript-objects-properties

const object = { a: 5, b: 6, c: 7  };
const picked = (({ a, c }) => ({ a, c }))(object);

console.log(picked); // { a: 5, c: 7 }


