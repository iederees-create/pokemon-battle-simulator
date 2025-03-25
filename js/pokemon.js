// pokemon.js - Define Pokémon data and battle logic

const pokemonData = {
    "Pikachu": {
        name: "Pikachu",
        type: "Electric",
        hp: 100,
        attack: 10,
        speed: 8,
        moves: ["Growl", "Tackle", "Thunderbolt"],
        image: "https://raw.githubusercontent.com/iederees-create/pokemon-battle-simulator/main/assets/images/pikachu/pikachu_1.png"
    },
    "Charizard": {
        name: "Charizard",
        type: "Fire",
        hp: 120,
        attack: 12,
        speed: 10,
        moves: ["Growl", "Tackle", "Flamethrower"],
        image: "https://raw.githubusercontent.com/iederees-create/pokemon-battle-simulator/main/assets/images/charizard/charizard_1.png"
    },
    // Add other Pokémon as needed
};

function displayPokemon(pokemon, containerId) {
    const container = document.getElementById(containerId);
    const card = `
        <div class="pokemon-card">
            <img src="${pokemon.image}" alt="${pokemon.name}">
            <h3>${pokemon.name}</h3>
            <p>HP: ${pokemon.hp}</p>
        </div>
    `;
    container.innerHTML = card;
}

// Initialize Pokémon display
const playerPokemon = pokemonData["Pikachu"];
const enemyPokemon = pokemonData["Charizard"];

// Display the Pokémon
displayPokemon(playerPokemon, "player-card");
displayPokemon(enemyPokemon, "enemy-card");
