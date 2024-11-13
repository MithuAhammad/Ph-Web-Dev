/*
Task 2

Write a JavaScript code to get the even numbers from an array using any looping technique.

Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

Output:

[12, 98, 76, 46]
*/

// const numbers = [12, 98, 5, 41, 23, 78, 46];
// let output = [];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         output.push(numbers[i]);
//     };
// };

// console.log(output);
// ----------------------------------------

/*
Task 2

Write a JavaScript code to get the even numbers from an array using any looping technique.

Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

Output:

[12, 98, 76, 46]
*/
// ------------------------------
const numbers = [12, 98, 5, 41, 23, 78, 46];
let output = [];
for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  // console.log(element);
  if (element % 2 === 0) {
    output.push(element);
  }
}
// console.log(output);

// ----------------------
// odd number
const roll = [54, 57, 95, 49, 71, 15];
let oddNumber = [];
for (let i = 0; i < roll.length; i++) {
  const element = roll[i];
  if (element % 2 === 1) {
    oddNumber.push(element);
  }
}
console.log(oddNumber);
