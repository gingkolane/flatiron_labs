// Code your solutions in this file

function writeCards(nameArray) {
  const greetingArray = [];
  for (let i = 0; i < nameArray.length; i++) {
    let greeting = `Thank you, ${nameArray[i]}, for the wonderful surprise gift!`;
    greetingArray.push(greeting);
  }

  return greetingArray;
}

function countdown(num) {
  while (num >= 0) {
    console.log(num);
    num --;
  }
} 