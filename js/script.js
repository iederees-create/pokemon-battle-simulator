// Function to handle attack logic
function attack() {
    // Player attacks enemy
    enemyPokemon.health -= playerPokemon.attack;
    document.getElementById("enemy-health").textContent = enemyPokemon.health;

    if (enemyPokemon.health <= 0) {
        alert(`${playerPokemon.name} wins!`);
        resetBattle(); // Restart game after win
        return;
    }

    // Enemy attacks player
    playerPokemon.health -= enemyPokemon.attack;
    document.getElementById("player-health").textContent = playerPokemon.health;

    if (playerPokemon.health <= 0) {
        alert(`${enemyPokemon.name} wins!`);
        resetBattle(); // Restart game after loss
    }
}

// Function to reset the battle and reload the game
function resetBattle() {
    setTimeout(() => {
        location.reload(); // Reload page to reset the game
    }, 2000); // 2 seconds delay before restart
}

// Event listener for the attack button (if not using inline onclick)
document.getElementById("attack-btn")?.addEventListener("click", attack);

// Load Pokémon selection UI on page load
window.onload = function() {
    loadPokemonSelection();
};
