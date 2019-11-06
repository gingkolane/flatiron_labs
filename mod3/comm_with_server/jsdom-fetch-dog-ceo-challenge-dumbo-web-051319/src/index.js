// console.log('%c HI', 'color: firebrick')

//------ challenge 1 -----------

//define event target
const dogImageContainer = document.getElementById("dog-image-container");

// fetch dog images output imgJson

function fetchDogImages() {
  return fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(response => response.json())
}

//display dog images
document.addEventListener('DOMContentLoaded', function() {
  
  fetchDogImages().then( imgJson => {
    
    imgJson.message.forEach ( dogImg => {

      dogImageContainer.innerHTML += `<img src="${dogImg}" />`;

    });
  });
});

//=========================================

//---------  challenge 2  ----------------------------

//get event target
const dogBreedsUL = document.getElementById("dog-breeds");

// fetch breeds data
function fetchBreeds() {
  return fetch('https://dog.ceo/api/breeds/list/all')
  .then(response => response.json())
  //need to check data here
}

// Add breeds to the dogBreedsUL

document.addEventListener('DOMContentLoaded', function() {
  
  fetchBreeds().then(jsonObj => {
  //from jsonObj to breedArr
    const breedArr = Object.keys(jsonObj.message)

    // put each breed in breedArr in li, 
    breedArr.forEach(breed => {
      dogBreedsUL.innerHTML += `<li data-info="breed">${breed}</li>`
    });
  });
});
// ======================================




//------ challenge 3 ---------------------------
// event delegation
dogBreedsUL.addEventListener("click", function(event){
  if (event.target.dataset.info === "breed") {
    event.target.style.color = "green"
  };
});

// =================================================



//-----------   challeng 4  ---------------

//get event target 
const dogSelect = document.getElementById("breed-dropdown");

//get dog breed data in breedsJson
function fetchDogBreeds() {
  return fetch('https://dog.ceo/api/breeds/list/all')
  .then(response => response.json())
}

//filter breed name starting letter
dogSelect.addEventListener("change", (event) => {
  
  fetchDogBreeds().then(res => {

    let DogBreedArr = Object.keys(res.message);

    let filteredArr = DogBreedArr.filter(breed => {
      console.log(event.target.value);
      return breed.startsWith(event.target.value);
    });

    dogBreedsUL.innerHTML = "";

    filteredArr.forEach(breed => {
      dogBreedsUL.innerHTML += `<li data-info="breed">${breed}</li>`
    });

  });
});

//===============================================