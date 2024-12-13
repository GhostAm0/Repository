const searchInput = document.getElementById("pokemon-search");
const searchButton = document.getElementById("search-button");
const errorMessage = document.getElementById("error-message");

const nombreTxt = document.getElementById("pokemon-name");
const typesList = document.getElementById("pokemon-types");
const image = document.getElementById("pokemon-image");
const abilitiesList = document.getElementById("pokemon-abilities");
const weightInfo = document.getElementById("pokemon-weight");
const statsList = document.getElementById("pokemon-stats");
const soundPlayer = document.getElementById("pokemon-sound");

function fetchPokemon(pokemonName) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Not found");
      }
      return response.json();
    })
    .then((pokemon) => {
      // Clear previous error message
      errorMessage.textContent = "";

      // Populate data
      nombreTxt.textContent = pokemon.name;
      image.setAttribute("src", pokemon.sprites.front_default);

      // Populate types
      typesList.innerHTML = "";
      let typesUl = document.createElement("ul");
      pokemon.types.forEach((tipo) => {
        let typeItem = document.createElement("li");
        typeItem.textContent = tipo.type.name;
        typesUl.appendChild(typeItem);
      });
      typesList.appendChild(typesUl);

      // Populate abilities
      abilitiesList.innerHTML = "";
      let abilitiesUl = document.createElement("ul");
      pokemon.abilities.forEach((habilidad) => {
        let abilityItem = document.createElement("li");
        abilityItem.textContent = habilidad.ability.name;
        abilitiesUl.appendChild(abilityItem);
      });
      abilitiesList.appendChild(abilitiesUl);

      // Populate weight
      weightInfo.textContent = `${pokemon.weight / 10} kg`;

      // Populate stats
      statsList.innerHTML = "";
      let statsUl = document.createElement("ul");
      pokemon.stats.forEach((stat) => {
        let statItem = document.createElement("li");
        statItem.textContent = `${stat.stat.name}: ${stat.base_stat}`;
        statsUl.appendChild(statItem);
      });
      statsList.appendChild(statsUl);

      // Sound
      const crySoundUrl = pokemon.sprites.versions["generation-v"]["black-white"].animated?.back_shiny;
      if (crySoundUrl) {
        soundPlayer.setAttribute("src", crySoundUrl);
        soundPlayer.style.display = "block";
      } else {
        soundPlayer.style.display = "none";
      }
    })
    .catch((error) => {
      // Clear previous data
      nombreTxt.textContent = "N/A";
      typesList.innerHTML = "N/A";
      image.setAttribute("src", "");
      abilitiesList.innerHTML = "N/A";
      weightInfo.textContent = "N/A";
      statsList.innerHTML = "N/A";
      soundPlayer.style.display = "none";

      // Show error message
      errorMessage.textContent = `El Pokémon '${pokemonName}' no se encontró en la base de datos.`;
    });
}

searchButton.addEventListener("click", () => {
  const pokemonName = searchInput.value.trim();
  if (pokemonName) {
    fetchPokemon(pokemonName);
  }
});
