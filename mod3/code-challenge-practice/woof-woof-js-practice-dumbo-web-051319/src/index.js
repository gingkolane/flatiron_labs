// ----------STEP 2: ADD PUPS TO DOG BAR---------------

// get event target
const dogBar = document.getElementById("dog-bar") 

//fetch dog info then display dogs 
function fetchDogs() {
  return fetch("http://localhost:3000/pups")
  .then(response => response.json())
}

// .then(addPupsToDogBar)
.then(dogsJson => addPupsToDogBar(dogsJson))


function addPupsToDogBar(dogsJson) {
  dogsJson.forEach(function(dog) {
    dogBar.innerHTML += 
    `<span id = "dog-span" data-id = ${dog.id}> ${dog.name} </span>`
  });
};

// -------- STEP 3: SHOW MORE INFO ABOUT EACH PUP -------------
const dogSpan = document.getElementById("dog-span");
const dogInfo = document.getElementById("dog-info");

dogBar.addEventListener('click', function(event) {
  
  const id = parseInt(event.target.dataset.id);

  //  get dog info
  fetch(`http://localhost:3000/pups/${id}`)
  .then(response => response.json())
  .then(displayOneDog)

});

function displayOneDog(dog) {
  dogInfo.innerHTML = `
    <img src=${dog.image}/>
    <h2>${dog.name}</h2>
    <button id = "good-button" data-id = ${dog.id} data-is-good-dog = ${dog.isGoodDog}>${ dog.isGoodDog? "Good Dog!" : "Bad Dog!"}</button>
  `
};


// --------  STEP 4: TOGGLE GOOD DOG ---------------------------------------


dogInfo.addEventListener('click', function(event) {

  if (event.target.id === "good-button") {
    
    const id = parseInt(event.target.dataset.id);
    
    let currentValue = event.target.dataset.isGoodDog === "true";
    let clickValue = !currentValue;
   
    // update DOM isGood value
    event.target.dataset.isGoodDog = clickValue;
    event.target.innerText = `${ clickValue? "Good Dog!" : "Bad Dog!"}`
    
    //update db.json with fetch
    fetch(`http://localhost:3000/pups/${id}`, {
      method: 'PATCH',
  
      headers: {
        'Content-Type': 'application/json',
        'Accepted': 'application/json'
      },
  
      body: JSON.stringify({ 
        isGoodDog: clickValue
      })
  
    });

  };
  
});

// --------------- STEP 5: FILTER GOOD DOGS ---------------------------

// set event target

const goodDogFilter = document.getElementById("good-dog-filter")

goodDogFilter.innerText = "Filter good dogs: ON"


//Toy form toggle
let filterOn = false

goodDogFilter.addEventListener('click', () => {

  filterOn = !filterOn

  if (filterOn) {
    goodDogFilter.innerText = "Filter good dogs: ON"
    
    
      //fetch dog info then display dogs 
    fetch("http://localhost:3000/pups")
    .then(response => response.json())
    .then(addPupsToDogBar);
    // .then(dogsJson => function(dogsJson) {

    // let filteredJson = dogsJson.filter((dog) => {
    //   dog.isGoodDog === true
    // })

    // addPupsToDogBar(filteredJson);

    // };

  } else {
    goodDogFilter.innerText = "Filter good dogs: OFF"

    function addPupsToDogBar(dogsJson) {
      dogsJson.filter(dog => dog.isGoodDog === true).forEach(function(dog) {
        dogBar.innerHTML += 
        `<span id = "dog-span" data-id = ${dog.id}> ${dog.name} </span>`
      });
    };


      // //fetch dog info then display dogs 
      // fetch("http://localhost:3000/pups")
      // .then(response => response.json())
      // .then(addPupsToDogBar);
      
  };

});


