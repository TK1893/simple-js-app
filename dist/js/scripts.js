let pokemonRepository = (function () {
  let e = [];
  function t(t) {
    "object" == typeof t && "name" in t
      ? e.push(t)
      : console.error("Invalid Pok\xe9mon !!!");
  }
  function n() {
    return e;
  }
  function i(e) {
    pokemonRepository.loadDetails(e).then(function () {
      !(function e(t) {
        let n = document.querySelector(".modal-body");
        document.querySelector(".modal-header");
        let i = document.querySelector(".modal-title");
        document.querySelector(".close"),
          (n.innerHTML = ""),
          (i.innerText = t.name);
        let l = document.createElement("img");
        l.classList.add("modal-img1"),
          (l.src = t.imageUrl),
          (l.alt = " Front image of" + t.name),
          (l.width = "200");
        let o = document.createElement("img");
        o.classList.add("modal-img2"),
          (o.src = t.imageBack),
          (o.alt = "Back image of" + t.name),
          (o.width = "200");
        let a = document.createElement("p"),
          r = [t.types[0].type.name];
        for (let s = 1; s < t.types.length; s++)
          r.push(", " + t.types[s].type.name);
        a.innerHTML = "Types: <br>" + r.join("");
        let c = document.createElement("p");
        c.innerHTML = `height: <br> ${t.height / 10} m `;
        let d = document.createElement("p");
        d.innerHTML = `weight: <br> ${t.weight / 10} kg `;
        let p = document.createElement("p"),
          m = [t.abilities[0].ability.name];
        for (let u = 1; u < t.abilities.length; u++)
          m.push(", " + t.abilities[u].ability.name);
        (p.innerHTML = "Abilities: <br>" + m.join("")),
          n.appendChild(l),
          n.appendChild(o),
          n.appendChild(a),
          n.appendChild(c),
          n.appendChild(d),
          n.appendChild(p);
      })(e);
    });
  }
  return (
    document.querySelector(".modal"),
    {
      add: t,
      getAll: n,
      addListItem: function e(t) {
        let n = document.querySelector(".pokemon-list"),
          l = document.createElement("li"),
          o = document.createElement("button");
        (o.innerText = t.name),
          o.classList.add(
            "btn-primary",
            "btn-block",
            "mb-3",
            "list-group-item"
          ),
          o.setAttribute("data-target", "#exampleModal"),
          o.setAttribute("data-toggle", "modal"),
          l.appendChild(o),
          n.appendChild(l),
          (function e(t, n) {
            t.addEventListener("click", function () {
              i(n);
            });
          })(o, t);
      },
      loadList: function e() {
        return fetch("https://pokeapi.co/api/v2/pokemon/?limit=150")
          .then(function (e) {
            return e.json();
          })
          .then(function (e) {
            e.results.forEach(function (e) {
              let n = { name: e.name, detailsUrl: e.url };
              t(n), console.log(n);
            });
          })
          .catch(function (e) {
            console.error(e);
          });
      },
      loadDetails: function e(t) {
        return fetch(t.detailsUrl)
          .then(function (e) {
            return e.json();
          })
          .then(function (e) {
            (t.imageUrl = e.sprites.front_default),
              (t.imageBack = e.sprites.back_default),
              (t.height = e.height),
              (t.weight = e.weight),
              (t.types = e.types),
              (t.abilities = e.abilities);
          })
          .catch(function (e) {
            console.error(e);
          });
      },
      showDetails: i,
    }
  );
})();
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (e) {
    pokemonRepository.addListItem(e);
  });
});
