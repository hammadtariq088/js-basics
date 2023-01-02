const fullName = "Hammad Tariq";
const strArray = [...fullName];
const removeFirstName = strArray.slice(7);
const newStr = removeFirstName.join("");
console.log(newStr);