// script.js - Handle battle interactions

let playerPokemon = pokemonData["Pikachu"];
let enemyPokemon = pokemonData["Charizard"];

function updatePokemonHp() {
    const playerCard = document.getElementById("player-card");
    const enemyCard = document.getElementById("enemy-card");

    playerCard.innerHTML = `
        <img src="${playerPokemon.image}" alt="${playerPokemon.name}">
        <h3>${playerPokemon.name}</h3>
        <p>HP: ${playerPokemon.hp}</p>
    `;
    
    enemyCard.innerHTML = `
        <img src="${enemyPokemon.image}" alt="${enemyPokemon.name}">
        <h3>${enemyPokemon.name}</h3>
        <p>HP: ${enemyPokemon.hp}</p>
    `;
}

function battleTurn(player, enemy) {
    // Simulate attack (basic attack logic)
    const damage = 10;  // For simplicity, a fixed damage value
    enemy.hp -= damage;
    
    if (enemy.hp <= 0) {
        alert(`${player.name} wins!`);
        enemy.hp = 0;
    }

    updatePokemonHp();
}

document.getElementById("attack-btn").addEventListener("click", () => {
    battleTurn(playerPokemon, enemyPokemon);
});
