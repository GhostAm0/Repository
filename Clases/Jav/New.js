fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then((response) => response.json())
    .then ((pokemon) => {
        console.log(pokemon.name);
        console.log(pokemon.types);
        console.log(pokemon.sprites.front_default);
    })
    .catch((error) => console.error(error));