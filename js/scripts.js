// IIFE Wrapping
let pokemonRepository = (function() {

// 1. Blank array
let pokemonList = []

// 2. Add objects to the array with at least 3 keys + values
pokemonList = [
  { ranking: 250, name: 'Ho-oh', height: 3.8, types: ['Fire', 'Flying']},
  { ranking: 376, name: 'Metagross', height: 1.6, types: ['Psychic', 'Steel'] },
  { ranking: 380, name: 'Latias', height: 1.4, types: ['Psychic', 'Dragon'] },
  { ranking: 382, name: 'Kyogre', height: 4.5, types: ['Water'] },
  { ranking: 647, name: 'Keldeo', height: 1.4, types: ['Water', 'Fighting'] }
];

// public function for Array Output
function getAll() {
  return pokemonList;
}

// public function for adding Pokemon
function add(pokemon) {
  if (
    typeof pokemon === "object" &&
    "ranking" in pokemon &&
    "name" in pokemon &&
    "height" in pokemon &&
    "types" in pokemon
  ) {
    pokemonList.push(pokemon);
  } else {
    console.log("Invalid Pokémon !!!");
  }
  if(pokemon.height>=3.8) {
    console.log(`Wow + ${pokemon.name} - you are really big !!!`)
  } else if(pokemon.height<=1.5) {
    console.log(`Oh + ${pokemon.name} - you are soooo sweet !!!`)
  }
}

// public function for logging Pokemon Details >> doesn#t work
function showDetails(pokemon) {
  console.log(pokemon);
}

// public function for adding list Pokemon Details
function addListItem(pokemon) { 
  let pokeList = document.querySelector('.poke-list');
  let pokeListItem = document.createElement('li');
  let button = document.createElement('button');
  button.innerText = pokemon.name;
  button.classList.add('poke-Button');
  pokeListItem.appendChild(button);
  pokeList.appendChild(pokeListItem);
  button.addEventListener('click', showDetails);
  // ** Version 1 Eventlistener > works ***************
  // button.addEventListener('click', function(){
  //   console.log(pokemon);
  // });
  // *****************************************************
} 

// IIFE return object
return {
  add:add,
  addListItem: addListItem,
  showDetails:showDetails,
  getAll: getAll
};

})();

pokemonRepository.getAll().forEach(pokemonRepository.addListItem);



// *************************  check add () function  ****************************************

// pokemonRepository.add (
//   {
//     ranking: 1022,
//     name: 'Iron Boulder',
//     height: 1.5,
//     types: ['Rock', 'Psychic']
//   }
// );
// pokemonRepository.add(23);

// pokemonRepository.getAll().forEach(pokemonRepository.addListItem);

// *******************************************************************************************
