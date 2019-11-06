document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('joke-form')
  const jokeList = document.getElementById('joke-list')
  const newJokeLi = document.createElement('li')
  const username = document.getElementById('name-input')
  // let joke;


  //return the fetch result promise in json (jokeObj)
  function fetchJoke(){
    return fetch('https://icanhazdadjoke.com/', {
      headers: {
        "Accept": "application/json"
      }
    })
    .then(res => res.json())
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if(username.value === "") return;
    
    fetchJoke().then(jokeObj => {
      newJokeLi.innerHTML += `
      <br/>
      <span class="username">${username.value} says:</span> ${jokeObj.joke}
    `
    })
      
    jokeList.appendChild(newJokeLi)
  })
})
