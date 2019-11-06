// ----- GRABING ELEMENTS OFF THE DOM -------------------

const addBtn = document.querySelector('#new-toy-btn')
const form = document.querySelector('.add-toy-form')
const toyForm = document.querySelector('.container')
const toyCollection = document.querySelector('#toy-collection')

let addToy = false

// function for toggling form that came with the lab
function formToggle(){
  // hide & seek with the form
  addToy = !addToy
  if (addToy) {
    toyForm.style.display = 'block'
    // submit listener here
  } else {
    toyForm.style.display = 'none'
  }
}

// -------------------- ADDING EVENT LISTENERS ------------------------
        // came with lab
addBtn.addEventListener('click', formToggle)

toyCollection.addEventListener('click', handleClick)
form.addEventListener('submit', submitFormPost)


// ----------------------- Fetch Calls to DataBase ------------------------------
getAllToys()

function getAllToys() {
  fetch('http://localhost:3000/toys')
  .then(res => res.json())
  .then(displayToyDivs)
}

function increaseLikeFetch(id, likes, e) {
  let likeValue = +likes
  likeValue++
  fetch(`http://localhost:3000/toys/${id}`, {
    method: "PATCH",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({likes: likeValue })
  })
  // .then(res => res.json())
  // .then(toy => increaseLikeDOM(toy, e))
}

function submitFormPost(e){
  e.preventDefault()
  const image = e.target.image.value
  const name = e.target.name.value

  fetch(`http://localhost:3000/toys/`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      name: name,
      image: image
    })
  })
  .then(res => res.json())
  .then(addSingleToy)
  // .then(toy => displayToyDivs([toy])) --> makes toy into an array so we can re-use the function "displayToyDivs" instead of creating the new function "addSingleToy"
}

function deleteToyFetch(e){
  const id = e.target.parentElement.dataset.id

  fetch(`http://localhost:3000/toys/${id}`, {
    method: 'DELETE'
  })

  e.target.parentElement.remove()
}

// ----------------JS Logic / DOM Manipulation ----------------------------


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

function increaseLikeFetch(id, likes, e) {
  let likeValue = +likes
  likeValue++
  fetch(`http://localhost:3000/toys/${id}`, {
    method: "PATCH",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({likes: likeValue })
  })
  // .then(res => res.json())
  // .then(toy => increaseLikeDOM(toy, e))
}



function displayToyDivs(toys){
  toys.forEach(toy => {
    toyCollection.innerHTML  +=  `
      <div class="card" data-id=${toy.id}>
        <h2>${toy.name}</h2>
        <img src=${toy.image} class="toy-avatar">
        <p id="likes-tag">${toy.likes} Likes </p>
        <button class="like-btn" data-likes=${toy.likes}> Like <3</button>
        <button class="delete-btn" >X</button>
      </div>
      `
  })
}

function addSingleToy(toy){
      toyCollection.innerHTML +=  `
        <div class="card" data-id=${toy.id}>
          <h2>${toy.name}</h2>
          <img src=${toy.image} class="toy-avatar">
          <p id="likes-tag">${toy.likes} Likes </p>
          <button class="like-btn" data-likes=${toy.likes}> Like <3</button>
          <button class="delete-btn" >X</button>
        </div>
      `
      form.reset()
  }












  function handleClick(e){
    // debugger
    if (e.target.className === "like-btn" ){
      const id = e.target.parentElement.dataset.id
      let likes = e.target.dataset.likes
      increaseLikeDOM(id, likes, e)
      increaseLikeFetch
    }else if (e.target.className === "delete-btn" ){
      deleteToyFetch(e)
    }
  }
  