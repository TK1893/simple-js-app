// IIFE Wrapping
let pokemonRepository = (function() {

  // 1. Blank array
  let pokemonList = []
  // 2. assignment of the API-pokelistlist-Url to a variable
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  
  // 3. public function for adding Pokemon in array
  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "detailsUrl" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("Invalid Pokémon !!!");
    }
  }
  
  // 4. public function for Array Output
  function getAll() {
    return pokemonList;
  }
  // 5. DOM Manipulation - creating & adding list items, Buttons & Event Listener
  function addListItem(pokemon) { 
    let pokeList = document.querySelector('.poke-list');
    let pokeListItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('poke-Button');
    pokeListItem.appendChild(button);
    pokeList.appendChild(pokeListItem);
    button.addEventListener("click", function(event) {
      showDetails(pokemon);
    });
  } 
  
  // 6. method for fetching data from the API + call add function for adding each Pokémon to array
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        // logging all pokemons in console.
        // console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }
  
  // function for load the detailed data for a given Pokémon with the detailsUrl property
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }
  
  // function for logging pokemon details in console after clicking on Pokemon Button
  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      console.log(item);
    });
  }
  
  // IIFE return object
  return {
    add:add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
  
  })();
  
  pokemonRepository.loadList().then(function() {
    // Now the data is loaded!
    pokemonRepository.getAll().forEach(function(pokemon){
      pokemonRepository.addListItem(pokemon);
    });
  });
  