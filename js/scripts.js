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
function getAll () {
  return pokemonList;
}

// public function for adding Array item
function add (pokemon) {
  pokemonList.push(pokemon);
}

// Bonus-1 - public function for adding Array item after "object" check
function addv (pokemon) {
  if (typeof pokemon == "object") {
    pokemonList.push(pokemon);
  } else {
   console.log("This is not a Pokemon");
  }
}

// Bonus-2 - public function for adding Array item after full check
function addXl (pokemon) {
  let b = Object.keys(pokemon);
  if (b[0] == 'ranking' && b[1] == 'name' && b[2] == 'height'&& b[3] == 'types' && typeof pokemon=="object") {
    pokemonList.push(pokemon);
    console.log("This is a pokemon");
  } else {
    console.log("This is not a pokemon");
  }
}

// IIFE return object
return {
  add: add,
  getAll: getAll,
  addv: addv,
  addXl: addXl
};

})();

// *************************  forEach() clear Version  ****************************************

function pokemonOutput(item) {
  // Output Pokemon name + height
  document.write (`${item.name} (height: ${item.height} m) <br>`);

  if (item.height >= 4) {
    // Message "Big Pokemon"" for height >= 4 
    document.write(`" WOW - ${item.name} - You are so big !!! " <br>`);
    // Message "Sweet Pokemon"" for height <= 1.4  
   } else if (item.height <= 1.4) {
    document.write(`" Ooooh - ${item.name} - You are so sweet !!! " <br>`);
   }
}
// pokemonRepository.getAll().forEach(pokemonOutput);

// *************************  check add () function  ****************************************

pokemonRepository.addXl (
  {
    ranking: 1022,
    name: 'Iron Boulder',
    height: 1.5,
    types: ['Rock', 'Psychic']
  }
);
pokemonRepository.addXl(23);

pokemonRepository.getAll().forEach(pokemonOutput);
