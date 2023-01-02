const text = 'The Quick Brown Fox, Jumps Over the Lazy Dog';
const replaceText = text
  .replace('Quick', 'Slow')
  .replace('Brown', 'Green')
  .replace('Fox', 'Turtle')
  .replace('Jumps', 'Wins')
  .replace('Dog', 'Race'); 
const str1 = replaceText.slice(0, 28);
const str2 = replaceText.slice(33, 37);
const str3 = str1 + str2 + replaceText.slice(42);
console.log(str3);
