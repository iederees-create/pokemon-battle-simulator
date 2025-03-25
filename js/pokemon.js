// Pok‚mon data and functions 
const POKEMON_LIST = [
    { name: "Pikachu", image: "https://github.com/iederees-create/pokemon-battle-simulator/blob/501c3c1fd69f9355394cc13ba77650c8bf7a0dcf/assets/images/pikachu/pikachu_1.png", hp: 100, attack: 15 },
    { name: "Charizard", image: "charizard.png", hp: 120, attack: 20 },
    { name: "Bulbasaur", image: "bulbasaur.png", hp: 90, attack: 10 }
];

function loadPokemonImages() {
    return POKEMON_LIST.map(pokemon => {
        return {
            ...pokemon,
            imagePath: `assets/images/${pokemon.image}`
        };
    });
}

const pokemonData = loadPokemonImages();
console.log(pokemonData); // Check if images are loaded
