
function rotateArray(arr, k) {
  // Get the length of the array
  let n = arr.length;

  // If rotation is greater than the size of the array, take modulo
  k = k % n;

  // Create a new array to store the rotated elements
  let rotated = [];

  // Iterate through the original array
  for (let i = 0; i < n; i++) {
    // Calculate the new index after rotation
    let newIndex = (i + k) % n;
    // Add the element at the new index to the rotated array
    rotated[newIndex] = arr[i];
  }

  // Return the rotated array
  return rotated;
}

// Test cases
console.log(rotateArray([1, 2, 3, 4], 1)); // Expecting: [4, 1, 2, 3]
console.log(rotateArray([1, 2, 3], 2)); // Expecting: [2, 3, 1]
console.log(rotateArray([1, 2, 3], 3)); // Expecting: [1, 2, 3]
console.log(rotateArray([1, 2, 3, 4, 5], 3)); // Expecting: [3, 4, 5, 1, 2]
console.log(rotateArray([7, 8, 9, 10], 0)); // Expecting: [7, 8, 9, 10]
console.log(rotateArray([1, 2, 3, 4, 5], 5)); // Expecting: [1, 2, 3, 4, 5]

// Function to rotate array
function rotateArray(arr, k) {
  // Get the length of the array
  let n = arr.length;

  // If rotation is greater than the size of the array, take modulo
  k = k % n;

  // Create a new array to store the rotated elements
  let rotated = [];

  // Iterate through the original array
  for (let i = 0; i < n; i++) {
    // Calculate the new index after rotation
    let newIndex = (i + k) % n;
    // Add the element at the new index to the rotated array
    rotated[newIndex] = arr[i];
  }

  // Return the rotated array
  return rotated;
}

// Test cases
console.log(rotateArray([1, 2, 3, 4], 1)); // Expecting: [4, 1, 2, 3]
console.log(rotateArray([1, 2, 3], 2)); // Expecting: [2, 3, 1]
console.log(rotateArray([1, 2, 3], 3)); // Expecting: [1, 2, 3]
console.log(rotateArray([1, 2, 3, 4, 5], 3)); // Expecting: [3, 4, 5, 1, 2]
console.log(rotateArray([7, 8, 9, 10], 0)); // Expecting: [7, 8, 9, 10]
console.log(rotateArray([1, 2, 3, 4, 5]));// Expecting: [1,2,3,4,5]

/*Pseudocode
the pseudocode for the problem:

function rotateArray(arr, k):
  length = arr.length
  k = k % length
  rotated = []

  for i = 0 to length - 1:
    newIndex = (i + k) % length
    rotated[newIndex] = arr[i]

  return rotated
This pseudocode outlines the steps to rotate an array arr by k units.

Get the length of the array and store it in the variable length.
Take the modulo of k with length to handle cases where k is greater than the size of the array.
Create an empty array rotated to store the rotated elements.
Iterate through the original array using a loop from 0 to length - 1.
Calculate the new index after rotation using (i + k) % length.
Assign the element at the new index in the original array to the corresponding index in the rotated array.
Return the rotated array.
This pseudocode can be translated into actual code in the programming language of your choice.


*/