// Pokémon Data - Define Pokémon with names, images, and stats
const pokemonList = [
    {
        name: "Pikachu",
        image: "assets/images/pikachu/pikachu_1.png",
        health: 100,
        attack: 15
    },
    {
        name: "Charmander",
        image: "assets/images/charmander/charmander_1.png",
        health: 100,
        attack: 18
    },
    {
        name: "Squirtle",
        image: "assets/images/squirtle/squirtle_1.png",
        health: 110,
        attack: 12
    },
    {
        name: "Bulbasaur",
        image: "assets/images/bulbasaur/bulbasaur_1.png",
        health: 120,
        attack: 10
    }
];

// Function to load Pokémon dynamically
function loadPokemonSelection() {
    const container = document.getElementById("pokemon-container");

    pokemonList.forEach((pokemon, index) => {
        const card = document.createElement("div");
        card.classList.add("pokemon-card");
        card.innerHTML = `
            <img src="${pokemon.image}" alt="${pokemon.name}" width="100">
            <h3>${pokemon.name}</h3>
            <p>Health: ${pokemon.health}</p>
            <p>Attack: ${pokemon.attack}</p>
            <button onclick="selectPokemon(${index})">Select</button>
        `;
        container.appendChild(card);
    });
}

// Variables to store selected Pokémon
let playerPokemon = null;
let enemyPokemon = null;

// Function to select Pokémon
function selectPokemon(index) {
    playerPokemon = pokemonList[index];
    enemyPokemon = pokemonList[Math.floor(Math.random() * pokemonList.length)];

    if (enemyPokemon === playerPokemon) {
        enemyPokemon = pokemonList[(index + 1) % pokemonList.length]; // Ensure different enemy
    }

    startBattle();
}

// Function to start battle
function startBattle() {
    document.body.innerHTML = `
        <h1>Battle Begins!</h1>
        <div class="battle-pokemon">
            <div>
                <h2>You</h2>
                <img id="player" src="${playerPokemon.image}" alt="${playerPokemon.name}">
                <p>Health: <span id="player-health">${playerPokemon.health}</span></p>
            </div>
            <div>
                <h2>Opponent</h2>
                <img id="enemy" src="${enemyPokemon.image}" alt="${enemyPokemon.name}">
                <p>Health: <span id="enemy-health">${enemyPokemon.health}</span></p>
            </div>
        </div>
        <button id="attack-btn" onclick="attack()">Attack!</button>
    `;
}

// Function to handle attack logic
function attack() {
    // Player attacks enemy
    enemyPokemon.health -= playerPokemon.attack;
    document.getElementById("enemy-health").textContent = enemyPokemon.health;

    if (enemyPokemon.health <= 0) {
        alert(`${playerPokemon.name} wins!`);
        location.reload(); // Restart game
        return;
    }

    // Enemy attacks player
    playerPokemon.health -= enemyPokemon.attack;
    document.getElementById("player-health").textContent = playerPokemon.health;

    if (playerPokemon.health <= 0) {
        alert(`${enemyPokemon.name} wins!`);
        location.reload(); // Restart game
    }
}

// Load Pokémon selection when page loads
window.onload = loadPokemonSelection;
