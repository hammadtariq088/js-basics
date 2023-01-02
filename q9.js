const fullName = "Hammad Tariq";
const strArray = [...fullName];
const removeLastName = strArray.splice(0, 7);
const newStr = removeLastName.join("");
console.log(newStr);