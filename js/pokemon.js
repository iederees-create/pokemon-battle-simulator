// Pok‚mon data and functions 
const POKEMON_LIST = [
    { name: "Pikachu", image: "pikachu.png", hp: 100, attack: 15 },
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
