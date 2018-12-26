// Reduce method
//
// 
const euros = [29.76, 41.85, 46.5];
const sum = euros.reduce((total, amount) => total + amount); 
// sum // 118.11
console.log(`---- SUM------          := ${sum}`);

// The ES5 version of reduce method in Javascript 
// euros.push(1); 
var sumES5 = euros.reduce( function(total, amount){
  return total + amount
});

// sum // 118.11 + 1;
console.log(`---- SUM euros plus one-:= ${sumES5}`);
// ===========================================================================

// Finding an average with the reduce method //
const average = euros.reduce((total, amount, index, array) => {
  total += amount;
  if( index === array.length-1) { 
    return total/array.length;
  } 
  else { 
    return total;
  }
},0);

// average // 39.37
console.log(`\n---- AVERAGE :=   ${average}`);
// ================================================================================

const average2 = euros.reduce((total, amount, index, array) => {
  total += amount;
  return (total / array.length);
}, 0);
console.log(`\n---- AVERAGE2 ?? it is not the same value please verify :=  ${average2}`);
//  =================================================================
//


