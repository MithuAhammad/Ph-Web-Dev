/*
Task 3

Use a for...of loop to concatenate all the elements of an array into a single string.

Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

Output:

'TomTimTinTik'
*/

// var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
// let output = '';

// for (const element of numbers) {
//     output += element;
// };

// console.log(output);
// ---------------------------------

const numbers = ["Tom", "Tim", "Tin", "Tik"];
let output = [];
for (const number of numbers) {
  //   console.log(number);
//   const element = number + numbers;
  output += number;
}
console.log(output);