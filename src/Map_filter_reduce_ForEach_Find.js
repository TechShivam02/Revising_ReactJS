var numbers = [1,2,3,4,5];


// Map : will return a new array , and perform the action on each ele of the array 

function double(x){
    return x*2;
}

const ans = numbers.map(double);
// console.log(ans);



// The forEach() method calls a function for each element in an array.


let sum = 0;

function findSum(x){
  sum += x;
}

numbers.forEach(findSum);
// console.log(sum);



//  Filter    // The filter() method creates a new array filled with elements that pass a test provided by a function.
 // do not change the original array

const ages = [12,19,20,30,6];

// console.log(ages.filter(checkAdult));

function checkAdult(x){
  return x >= 18;
}





// Reduce // The reduce() method returns a single value: the function's accumulated result.
// The reduce() method does not change the original array.      // accumulator = Prev Value  // currentNum = CurrentValue


var numb = [1,2,3,4,5];

const finalAns = numb.reduce(function(accumulator , currentNumber){
  return accumulator + currentNumber;
})
// console.log(finalAns);






// find   Find the first item that mathches the array

numb = [1,2,3,4,5];

console.log(numb.find(function(num){
  return num >3;
}))



