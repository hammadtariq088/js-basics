// Question - 1 (for loop)
// Write a program to print the table.
// There should be 2 variables, “table” should store the table number and “count” should take the
// number of times till where the table should be printed.
// Your output should look like this if the “table” is 6 and “count” is 5
// 6 x 1 = 6
// 6 x 2 = 12
// 6 x 3 = 18
// 6 x 4 = 24
// 6 x 5 = 30

let table = 6;
let count = 5;

for (let index = 1; index <= count; index++) {
  console.log(`${table} x ${index} = ${table * index}`);
}
