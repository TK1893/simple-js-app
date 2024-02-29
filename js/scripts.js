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
function add(pokemon) { 
  if (typeof pokemon === "object" && "ranking" in pokemon && "name" in pokemon && "height" in pokemon && "types" in pokemon) { 
    pokemonList.push(pokemon); 
  } else { console.log("Invalid Pokémon."); 
  } 
} 

// IIFE return object
return {
  add: add,
  getAll: getAll,
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

pokemonRepository.add (
  {
    ranking: 1022,
    name: 'Iron Boulder',
    height: 1.5,
    types: ['Rock', 'Psychic']
  }
);
pokemonRepository.add(23);

pokemonRepository.getAll().forEach(pokemonOutput);
