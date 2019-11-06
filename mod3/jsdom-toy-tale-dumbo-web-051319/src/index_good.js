// This is to check if index.js is linked to index.html
console.log('%c hi','color: firebrick')

// ----- get all toys and display each in a card div ---------------------

// define event target
const toyCollection = document.getElementById("toy-collection");

// get data and put them on DOM
document.addEventListener('DOMContentLoaded', function() {
  
  // fetch all toys data
  fetch('http://localhost:3000/toys')
  .then(response => response.json())
  // show in DOM
  .then(addToys)
    
});

// Helper function - create one card and set content of the card
// implant id in the event target - need id to update the specific record  for the post request. 
// implant two likes dataset access point in DOM update target: one is to grab the html element, the other is updated data. 
function addToys(toys){

  toys.forEach(toy => {
    toyCollection.innerHTML += `
    <div class = "card">
      <h2>${toy.name}</h2>
      <img src=${toy.image} class="toy-avatar" />
      <p id="like-tag" data-likes="${toy.likes}">${toy.likes} Likes </p>
      <button data-id="${toy.id}" class="like-btn">Like <3</button> 
    </div>
    `
  })
};

// ------------------show or hide the add new toy form----------------

// Define event target
const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')

//Toy form toggle
let addToy = false

addBtn.addEventListener('click', () => {
  // hide & seek with the form
  addToy = !addToy
  if (addToy) {
    toyForm.style.display = 'block'
    // submit listener here
  } else {
    toyForm.style.display = 'none'
  }
})

//------------- Add a new toy--------------

// define event target
const addToyForm = document.querySelector(".add-toy-form");

//create a new toy
addToyForm.addEventListener("submit", function() {

  event.preventDefault();

  //post data to json
  fetch("http://localhost:3000/toys", {
    method: 'POST',
    headers: 
      {
      'content-type': 'application/json',
      'Accept': 'application/json'
      },
    body: JSON.stringify({
      "name": addToyForm.name.value,
      "image": addToyForm.image.value,
      'likes': 0
    })
  })
  .then(response => response.json()) 

  // update DOM - add new toy to DOM
  .then(toy => addToys([toy]))

});

//------increase Toy's likes----------------
// Implanted two dataset access points in toyCollection innerHTML 
// id = "like-tag" data-likes= ${toy.likes}

// set event listener on stable parent
toyCollection.addEventListener('click', function(event) {

  // Gate the exact event target
  if (event.target.className === "like-btn") {
    
    // like values before click     
    const likeTag = event.target.parentElement.querySelector('#like-tag');
    const likeCount = parseInt(likeTag.dataset.likes);
    
    // increase likes value 
    const newLikeCount = likeCount + 1

    // update innerText and data-likes in DOM
    likeTag.dataset.likes = newLikeCount
    likeTag.innerText = `${newLikeCount} Likes`

    // update likesCount in db.json using fetch
    // using the implanted id in the event target  
    fetch(`http://localhost:3000/toys/${event.target.dataset.id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ likes: newLikeCount })
    });
  };
});


//if there is a delete button, we can click and delete toy, 
// Two delete, delete in db.json and delete in DOM

// function deleteToyFetch(event) {

//   // remove in debugger.json
//   fetch(`http://localhost:3000/toys/${event.target.dataset.id}`, {
//     method: 'DELETE'
//   });

//   //remove from DOM
//   event.target.parentElement.remove();

// }

