// Question - 4 (functions, loops, if/else conditions)
// Write a function which takes as parameter an array of numbers and displays if the array is an
// even array, an odd array or a mixed array.
// An even array is an array which has all even numbers.
// An odd array is an array which has all odd numbers.
// A mixed array is an array which has both even and odd numbers.
// Sample output - 1 [2,4,8,10]
// The array is an even array.
// Sample output - 2 [3, 7, 5, 9]
// The array is an odd array.
// Sample output - 3 [2,4,8,3,10]
// The array is a mixed array.
// Hint: you can count the number of even and odd elements and based on that count print the
// result.

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function arrayFunction (arr) {
  let evenCount = []
  let oddCount = []
  let mixedCount = []
  for (let index = 0; index <= arr.length; index++) {
    let num = arr[index]
    if (num % 2 === 0) {
      evenCount.push(num)
    } else if (num % 2 === 1) {
      oddCount.push(num)
    }
    else{
      mixedCount.push(...evenCount, ...oddCount)
    }
  }
  console.log('The array is an even array = ' + evenCount)
  console.log('The array is an odd array = ' + oddCount)
  console.log('The array is an mixed array = ' + mixedCount)
}
arrayFunction(array)
