//        IIFE Wrapping  *****************************************************************************************
let pokemonRepository = (function () {

  //      Create Blank Array  ************************************************************************************
  let pokemonList = []

  //      Assignment of API-Url to a variable  *******************************************************************
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  let modalContainer = document.querySelector('#modal-container');


  // *************************************************************************************************************
  //      ADDING Pokémon in array   >   add()
  // *************************************************************************************************************

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

  // *************************************************************************************************************
  //      ARRAY OUTPUT    >   getAll()
  // *************************************************************************************************************

  function getAll() {
    return pokemonList;
  }

  // *************************************************************************************************************
  //      ADD A LIST OF BUTTONS    >   addListItem()
  // *************************************************************************************************************

  // add a list of buttons to the array
  function addListItem(pokemon) {
    let pokeList = document.querySelector('.poke-list');  //  ul
    let pokeListItem = document.createElement('li');      // Create li
    let button = document.createElement('button');        // Create Button
    button.innerText = pokemon.name;        // Labeling Button
    button.classList.add('poke-Button');    // creating Button class="poke-Button" 
    pokeListItem.appendChild(button);       // Appending Button to li
    pokeList.appendChild(pokeListItem);     // Appending li to ul

    // ADD EVENT LISTENER to BUTTON > showDetails()
    button.addEventListener("click", function (event) {
      showDetails(pokemon);
    });
  }

  // *************************************************************************************************************
  //      FETCHING DATA from API & adding each Pokémon to array    >   loadList()
  // *************************************************************************************************************

  // fetching data from the API
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        // call add function for adding each Pokémon to array
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  // *************************************************************************************************************
  //      LOAD detailed Poekemon Data with detailsUrl property    >   loadDetails()
  // *************************************************************************************************************

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.imageBack = details.sprites.back_default;
      item.height = details.height;
      item.weight = details.weight;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  // *************************************************************************************************************
  //      SHOW Pokemon details in Console after clicking Pokemon Button    >   showDetails()
  // *************************************************************************************************************

  function showDetails(item) {
      pokemonRepository.loadDetails(item).then(function () {
        showModal(item.name, `height: ${item.height/10} m `, `weight: ${item.weight/10} kg`, item.imageUrl, item.imageBack);
    });
  }
  
  // *************************************************************************************************************
  //      SHOW MODAL 
  // *************************************************************************************************************
  function showModal(title, text1, text2, img1, img2) {
    // CLEAR all existing modal content
    modalContainer.innerHTML = '';
    // CREATE div mit class="modal"
    let modal = document.createElement('div');
    modal.classList.add('modal');

    // ADD MODAL CONTENT  ********************************************
    // CLOSE BUTTON
    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close'); // creates class="modal-close"
    closeButtonElement.innerText = 'Close'; // sets innerText to "close"

    // EVENT LISTENER to CLOSE BUTTON > hideModal()
    closeButtonElement.addEventListener('click', hideModal);

    // CREATE h1  - innerText = "title"
    let titleElement = document.createElement('h1');
    titleElement.innerText = title;

    // CREATE p  -  innerText="text1"
    let paraElement1 = document.createElement('p');
    paraElement1.innerText = text1;

  // CREATE p  -  innerText="text1"
    let paraElement2 = document.createElement('p');
    paraElement2.innerText = text2;

    // CREATE img
    let imageElement1 = document.createElement("img");
    imageElement1.setAttribute("src", img1);
    imageElement1.setAttribute("width", "300");
    imageElement1.setAttribute("alt", "pokemon Picture");

    // CREATE img
    let imageElement2 = document.createElement("img");
    imageElement2.setAttribute("src", img2);
    imageElement2.setAttribute("width", "300");
    imageElement2.setAttribute("alt", "pokemon Picture");

    // APPEND MODAL CONTENT TO MODAL & MODAL to MODALCONTAINER
    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(paraElement1);
    modal.appendChild(paraElement2);
    modal.appendChild(imageElement1);
    modal.appendChild(imageElement2);
    modalContainer.appendChild(modal);

    // Sichtbarkeit des Modals durch hinzufügen einer modalContainer class
    modalContainer.classList.add('is-visible');
  }

  // *************************************************************************************************************
  //      HIDE MODAL 
  // *************************************************************************************************************
  function hideModal() {
    modalContainer.classList.remove('is-visible');
  }

  // *************************************************************************************************************
  //      EVENT LISTENER (MODAL)
  // *************************************************************************************************************

  //      ESC = EVENT TARGET > hideModal()  *********************************************************************
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });
  
  //  modalContainer = EVENT TARGET > hideModal()  ************************************************************
  modalContainer.addEventListener('click', (e) => {
    // function e for closing modal only for clicks
    // - outside the MODAL
    // - only INSIDE the Overlay (= MODAL CONTAINER )
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });  

  //    IIFE return object    **********************************************************************************
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };

})();
pokemonRepository.loadList().then(function () {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
