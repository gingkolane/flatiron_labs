
//---------- gather event targets--------------------

//add new toy form
const addToyForm = document.querySelector(".add-toy-form");
const newToyBtn = document.querySelector('#new-toy-btn');
let addToy = false

// div for displaying all toys
const toyCollection = document.getElementById("toy-collection");
const toyCard = document.createElement('toy-card')
  toyCard.setAttribute("class", "toy-card")
const likeBtn = document.querySelector('.toy-card .like-btn')

//Add functions
function addSingleToy() {
  toyCollection.innerHTML += `
  <div class="card" data-id = toy.id>  # add id when created
  <h2>toy.name</h2>
  <img src=${toy.image} class="toy-avatar" />
  <p> ${toy.likes}  Likes </p>
  <button class="like-btn">Like <3</button>
  </div>
}



// Fetch Andy's Toys
toyCollection.addEventListener('DOMContentLoaded', displayToyCards)

// Add Toy Info to the Card

// Add a New Toy
  newToyBtn.addEventListener('click',addToy)
  addToyForm.addEventListener('submit', submitForm)
  
// Increase Toy's Likes
toyCollection.addEventListener('click', handleClick)
// what about the button what does that do?



fuctnion submitForm(e) {
  e.preventDefault  //all submission should have this 
  const name = e.target.image.name
  const image = e.target.image.value
}
event.target
event.currentTarget is where you put the eventListener on 



fetch("http://localhost:3000/toys")
.then(res => res.json())
.then(displayToyDivs)
// this is like seed data, use console.log to check data


function handleClick(e) {
  if (e.target.classname === "like-btn" ){
    const id = e.target.parentElement.dataset.id 
  }
  increaseLike()
} else if { e.target.classname === "delete-btn"} {
  deleteToy()
}

// the database update, update and create the same for fetch?
function increaseLikeFetch(getElementById) {

let toyId = parseInt(id)

  fetch(`http://localhost:3000/toys/id`, {
    method: 'patch',
    headers: {'content-Type': 'application/json'},
    body: JSON.stringify
  })
  .then(res => res.json())
  .then(toy => e.target.parentElement.querySelector("#likes-tag").innerText = `toy.likes`)
  e.target.dataset.likes = toy.likes
}


function updateLikes() {

}


function displayToyDivs(toys) {
// console.log(toys);
  toys.forEach(toy => {
  toyCollection.innerHTML += `
    <div class="card" data-id = toy.id>  # add id when created
    <h2>toy.name</h2>
    <img src=${toy.image} class="toy-avatar" />
    <p> ${toy.likes}  Likes </p>
    <button class="like-btn">Like <3</button>
    </div>
  `

  function addSingleToy() {
    toyCollection.innerHTML += `
    <div class="card" data-id = toy.id>  # add id when created
    <h2>toy.name</h2>
    <img src=${toy.image} class="toy-avatar" />
    <p> ${toy.likes}  Likes </p>
    <button class="like-btn">Like <3</button>
    </div>
  }
e.target.parentElement.dataset.id 


    div.innerHTML = ``
  })
}

function increaseLikeFetch(id, likes, e) {
  let likeValue = +likes
  likeValue++
  fetch(`http://localhost:3000/toys/${id}`, {
    method: "PATCH",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({likes: likeValue })
  })
  .then(res => res.json())
  .then(toy => increaseLikeDOM(toy, e))
}


if we update optimistically the event listener would call the function `increaseLikeDOM` first which will increase the likes on The DOM for the user. Then that function will call the function we are in here `increaseLikeFetch`.


function handleClick(e){
  // debugger
  if (e.target.className === "like-btn" ){
    const id = e.target.parentElement.dataset.id
    let likes = e.target.dataset.likes
    increaseLikeFetch(id, likes, e)
  }else if (e.target.className === "delete-btn" ){
    deleteToyFetch(e)
  }
}

function increaseLikeDOM(toy, e){
  e.target.parentElement.querySelector('#likes-tag').innerText = `${toy.likes} Likes`
  e.target.dataset.likes = toy.likes
}



function increaseLike(e){

}

// click on likeButton, increaseLikeCount in DOM, then in database
likeBtn.addEventListener('click', increaseLikeDOM);

function increaseLikeDom(toy, e) {
  likeValue = e.target.dataset.likes
  likeValue ++;
  e.target.innerText.likes = `${toy.likes} Likes`

}

function increaseLikeFetch(id, likes, e) {
  let likeValue = +likes
  likeValue++
  fetch(`http://localhost:3000/toys/${id}`, {
    method: "PATCH",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({likes: likeValue })
  })
  .then(res => res.json())
  .then(toy => increaseLikeDOM(toy, e))
}