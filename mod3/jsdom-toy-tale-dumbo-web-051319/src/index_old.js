
//---------- get event targets--------------------
const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')


const toyCollection = document.getElementById("toy-collection");
// const toyCollection = document.querySelector('.toy-collection');

const form = document.querySelector(".add-toy-form");

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
// ========Add event listeners ==============================

// -------------

//fetch and show all toys
document.addEventListener("DOMContentLoaded", function(){
  fetch("http://localhost:3000/toys")
  .then(response => response.json())
  .then(toyJson => toyJson.forEach(toy => makeOneCard(toy)))
});

// helper function: create one card and append it to the toy-collection container
function makeOneCard(toy) {
  // for each card, create a div as card, assign css style card class
  // const form = document.querySelector(".add-toy-form");
  const toyDiv  = document.createElement("div");
  toyDiv.classList.add("card");

  // create the item in each card inside innerHTML
  toyDiv.innerHTML=
  ` <img src="${toy.image}" class="toy-avatar">
    <h2 class="toy-header">${toy.name} </h2>
    <button type="button" class="like-btn" onclick='document.querySelector(".add-toy-form").submit()'> Like <3 </button>
    <p>${toy.likes} Likes </p> `;

  // add the card to the container id = toy collection  
  document.getElementById("toy-collection").append(toyDiv);

};

//add new toy -------------------------

//Set selector 
// set form data
let formData = {
  "name": form.name.value,
  "image": form.image.value
};

// submit new object to form and add it to DOM for display
form.addEventListener("submit", function(event){
  event.preventDefault();

  // post the form data to the db.json
  fetch("http://localhost:3000/toys", { 
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  })
  //get response 
  .then(response => response.json())
  //make new card, add to DOM
  .then(toy => makeOneCard(toy));

});

// update card information, change the likes

//Set selector: form and button
// const form = document.querySelector(".add-toy-form");
const likeButton = document.querySelector(".like-btn");

likeButton.addEventListener('click', function() {
  const formData = {"likes": `${form.likes + 1}`};
  form.submit();
  updateOneCard(formData);
});

function updateOneCard(formData){

  const id = event.target.dataset.id

  fetch(`http://localhost:3000/to-do-items/${ id }`,
    { method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
  .then(response => response.json())
  .then(toy => makeOneCard(toy))

};

