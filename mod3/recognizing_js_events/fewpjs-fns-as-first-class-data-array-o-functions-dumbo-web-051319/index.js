// Capitalize the first letter
const capFirstLetter = 
  (word) => { return word.charAt(0).toUpperCase() + word.slice(1) };

// Capitalize the first letter of each word
function sentenceCap(sentence) {
  let wordArr = sentence.split(" ");
  let cappedSentence = '';

  for (let i = 0; i < wordArr.length; i++ ) {
    let wordCap = capFirstLetter(wordArr[i]);
      cappedSentence += wordCap + ' ';
  }

  return cappedSentence.slice(0, -1);
}

// define each kind of activity
function wakeDog(dogName, dogBreed) {
  const string = `Wake ${sentenceCap(dogName)} the ${sentenceCap(dogBreed)}`;
  console.log(string);
  return string;
}

function leashDog(dogName, dogBreed) {
  const string =`Leash ${sentenceCap(dogName)} the ${sentenceCap(dogBreed)}`;
  console.log(string);
  return string;
}

function walkToPark(dogName, dogBreed) {
  const string =`Walk to the park with ${sentenceCap(dogName)} the ${sentenceCap(dogBreed)}`;
  console.log(string);
  return string;
}

function throwFrisbee(dogName, dogBreed) {
  const string =`Throw the frisbee for ${sentenceCap(dogName)} the ${sentenceCap(dogBreed)}`;
  console.log(string);
  return string;
}

function walkHome(dogName, dogBreed) {
  const string = `Walk home with ${sentenceCap(dogName)} the ${sentenceCap(dogBreed)}`;
  console.log(string);
  return string;
}

function unleashDog(dogName, dogBreed) {
  const string = `Unleash ${sentenceCap(dogName)} the ${sentenceCap(dogBreed)}`;
  console.log(string);
  return string;
}

// create an array of activities
const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

// Call upon all activities and return an array
function exerciseDog(dogName, dogBreed) {
  let activeDogs = [];
  for (let i = 0; i < routine.length; i++) {
    let exercise = routine[i](dogName, dogBreed);
    activeDogs.push(exercise);
  }
  return activeDogs;
};


// // this is the solution:
// function exerciseDog(dog, breed) {
//   return routine.map(fn => fn(dog, breed))
// }