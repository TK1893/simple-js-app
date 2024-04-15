//    IIFE Wrapping    *****************************************************************************************
let pokemonRepository = (function () {
  let pokemonList = []; // Create Blank Array
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150'; //  Assignment of API-Url to a variable

  // *************************************************************************************************************
  //      ADDING Pokémon in array   >   add()
  // *************************************************************************************************************
  function add(pokemon) {
    if (typeof pokemon === 'object' && 'name' in pokemon) {
      pokemonList.push(pokemon);
    } else {
      console.error('Invalid Pokémon !!!');
    }
  }

  // *************************************************************************************************************
  //      ARRAY OUTPUT    >   getAll()
  // *************************************************************************************************************
  function getAll() {
    return pokemonList;
  }

  // *************************************************************************************************************
  //      ADD A LIST-ITEM in BUTTON LIST    >   addListItem()
  // *************************************************************************************************************

  function addListItem(pokemon) {
    let pokeList = document.querySelector('.pokemon-list');

    let listItem = document.createElement('li');

    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('btn-primary', 'btn-block', 'mb-3', 'list-group-item');

    button.setAttribute('data-target', '#exampleModal');
    button.setAttribute('data-toggle', 'modal');

    listItem.appendChild(button);
    pokeList.appendChild(listItem);

    addEventListenertoButton(button, pokemon);
  }

  function addEventListenertoButton(button, pokemon) {
    button.addEventListener('click', function () {
      showDetails(pokemon);
    });
  }

  // *************************************************************************************************************
  //      FETCHING DATA from API & adding each Pokémon to array    >   loadList()
  // *************************************************************************************************************

  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
          console.log(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  // *************************************************************************************************************
  //      LOAD detailed Poekemon Data with detailsUrl property    >   loadDetails()
  // *************************************************************************************************************
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        item.imageUrl = details.sprites.front_default;
        item.imageBack = details.sprites.back_default;
        item.height = details.height;
        item.weight = details.weight;
        item.types = details.types;
        item.abilities = details.abilities;
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  // MODAL
  //let modal = document.querySelector(".modal");

  // *************************************************************************************************************
  //     showDetails()
  // *************************************************************************************************************

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      showModal(item);
    });
  }

  // *************************************************************************************************************
  //     MODAL  > showModal()
  // *************************************************************************************************************
  function showModal(pokemon) {
    let modalBody = document.querySelector('.modal-body');
    //let modalHeader = document.querySelector(".modal-header");
    let modalTitle = document.querySelector('.modal-title');
    //let closeButtonElement = document.querySelector(".close");
    modalBody.innerHTML = '';
    // TITLE
    modalTitle.innerText = pokemon.name;

    // FRONT IMAGE
    let imageElement1 = document.createElement('img');
    imageElement1.classList.add('modal-img1');
    imageElement1.src = pokemon.imageUrl;
    imageElement1.alt = ' Front image of' + pokemon.name;
    imageElement1.width = '200';
    // BACK IMAGE
    let imageElement2 = document.createElement('img');
    imageElement2.classList.add('modal-img2');
    imageElement2.src = pokemon.imageBack;
    imageElement2.alt = 'Back image of' + pokemon.name;
    imageElement2.width = '200';
    // TYPES
    let typesElement = document.createElement('p');
    let types = [pokemon.types[0].type.name];
    for (let i = 1; i < pokemon.types.length; i++) {
      types.push(', ' + pokemon.types[i].type.name);
    }
    typesElement.innerHTML = 'Types: <br>' + types.join('');
    // HEIGHT
    let heightElement = document.createElement('p');
    heightElement.innerHTML = `height: <br> ${pokemon.height / 10} m `;
    // WEIGHT
    let weightElement = document.createElement('p');
    weightElement.innerHTML = `weight: <br> ${pokemon.weight / 10} kg `;
    // ABILITIES
    let abilities = document.createElement('p');
    let abilitiesList = [pokemon.abilities[0].ability.name];
    for (let i = 1; i < pokemon.abilities.length; i++) {
      abilitiesList.push(', ' + pokemon.abilities[i].ability.name);
    }
    abilities.innerHTML = 'Abilities: <br>' + abilitiesList.join('');

    // APPEND MODAL CONTENT TO MODAL
    modalBody.appendChild(imageElement1);
    modalBody.appendChild(imageElement2);
    modalBody.appendChild(typesElement);
    modalBody.appendChild(heightElement);
    modalBody.appendChild(weightElement);
    modalBody.appendChild(abilities);
  }

  //    IIFE return object    **********************************************************************************
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
  };
})();

// FUNCTIONS CALL
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
