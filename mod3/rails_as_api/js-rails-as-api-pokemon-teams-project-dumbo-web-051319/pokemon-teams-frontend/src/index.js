const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

createPokemonLi = () => {
  return `
    <li> </li>
  `
}
//------------ Getting All Trainers and their Pokemon ----------------

//  get event target
const main = document.querySelector("main")

fetch("http://localhost:3000/trainers")
.then(response => response.json())
.then(displayTrainers)

function displayTrainers(trainerArr) {

  trainerArr.forEach(trainer => {
    main.innerHTML += `
      <div class="card" data-id="${trainer.id}">
        <p>${trainer.name}</p>
        <button id = "add-pokemon" data-trainer-id="${trainer.id}">Add Pokemon</button>
        <ul> 
          ${createLi(trainer.pokemons)}
        </ul>
      </div>
    `
  });
};

function createLi(pokemonArray){
  pokeArray = pokemonArray.map(pokemon => `<li>${pokemon.species}(${pokemon.species})<button class="release" data-pokemon-id=${pokemon.id}>Release</button></li>`)
  return pokeArray.join("")
}


// --------------------Adding a Pokemon----------------------------

main.addEventListener('click', function() {

  if (event.target.id === "add-pokemon") {
    
    fetch('http://localhost:3000/pokemons', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json", 
        "Accepted": "application/json"
      },
      body: JSON.stringify({
        trainer_id: event.target.dataset.trainer
      })
    }).then(response => response.json())
    .then(console.log)

    }

});
