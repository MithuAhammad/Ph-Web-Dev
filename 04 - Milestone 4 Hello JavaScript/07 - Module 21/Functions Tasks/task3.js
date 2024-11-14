/*
Task-3

Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
*/

function makeAvg(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  let average = sum / array.length;
  return average;
}

console.log(makeAvg([1, 2, 3, 4, 5]));
