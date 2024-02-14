
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

for (let i=0; i < pokemonList.length; i++){
  let list = `${pokemonList[i].name} (height: ${pokemonList[i].height} m) <br> `; 
// Output Pokemon name + height
  document.write(list);
// Message "Big Pokemon"" for height >=4 
  if (pokemonList[i].height >= 4) {
      document.write(`" WOW - ${pokemonList[i].name} - You are so big !!! " <br>`);
// Message "Sweet Pokemon"" for height <=1.4  
    } else if (pokemonList[i].height <= 1.4) {
    document.write(`" Ooooh - ${pokemonList[i].name} - You are so sweet !!! " <br>`);
  }
}
