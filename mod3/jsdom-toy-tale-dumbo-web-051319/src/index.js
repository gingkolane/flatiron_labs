//-------- get all toys and display them---------

// get DOM element for display
const toyCollection = document.getElementById("toy-collection");

// add event listener, get data and put them on DOM
document.addEventListener("DOMContentLoaded", function() {

  fetch("http://localhost:3000/toys")
  .then(response => response.json())
  .then(displayToys)

  // define callback function
  function displayToys(toyArr) {
    toyArr.forEach(toy => {
      toyCollection.innerHTML += `
        <div class="card">
          <h2>${toy.name}</h2>
          <img src=${toy.image} class="toy-avatar"/>
          <p id = "like-tag" data-likes="${toy.likes}">${toy.likes} likes</p>
          <button data-id="${toy.id}" class="like-btn">Like <3</button>
        </div>
          `
    });
    //callback function finish
  };
});

//---------show or hide the new toy form-----------
// define event Element
const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')

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
// --------Add a New Toy-----------------------

addBtn.addEventListener('click', function () {

  fetch("http://localhost:3000/toys", {
    method: 'POST',
    headers: {
      'Content-Type': "application/json",
      'Accept': 'application/json'},
    body: JSON.stringify({
      name: addToyForm.name.value,
      image: addToyForm.image.value,
      'likes': 0
    })
  })
  .then(response => response.json())
  .then(toy => displayToys([toy]))

});

// increase likes----------
//set event listener on stable parent
toyCollection.addEventListener('click', function (event) {

// Gate the event target
if (event.target.className === 'like-btn') {
  
  //like values before click
  const likeTag = event.target.parentElement.querySelector('#like-tag');
  const likeCount = parseInt(likeTag.dataset.likes)

  // increase likes value
  const newLikeCount = likeCount + 1

  //update innerText and datalikes in DOM
  likeTag.dataset.likes = newLikeCount
  likeTag.innerText = `${newLikeCount} Likes`

  //update likesCount in db.json
  //using the implanted id in the event target
  fetch(`http://localhost:3000/toys/${event.target.dataset.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({ likes: newLikeCount})
    });
  };
});

function deleteToyFetch(event) {
  //remove the db.json 
  fetch(`http://localhost:3000/toys/${event.target.dataset.id}`, {
    method: 'DELETE'
  });

  //remove from DOM
  event.target.parentElement.remove();
  
}