document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("pokemon-container");
    const battleArea = document.createElement("div");
    battleArea.id = "battle-area";
    document.body.appendChild(battleArea);

    let playerPokemon = null;
    let enemyPokemon = null;

    // Load Pokémon selection
    pokemonData.forEach(pokemon => {
        const div = document.createElement("div");
        div.classList.add("pokemon-card");
        div.innerHTML = `<img src="${pokemon.imagePath}" alt="${pokemon.name}">
                         <p>${pokemon.name}</p>`;
        div.addEventListener("click", () => selectPokemon(pokemon));
        container.appendChild(div);
    });

    function selectPokemon(selected) {
        playerPokemon = { ...selected, hp: selected.hp };
        enemyPokemon = { ...getRandomPokemon(), hp: 100 }; // Enemy gets a random Pokémon

        startBattle();
    }

    function getRandomPokemon() {
        return POKEMON_LIST[Math.floor(Math.random() * POKEMON_LIST.length)];
    }

    function startBattle() {
        container.style.display = "none"; // Hide selection screen

        battleArea.innerHTML = `
            <h2>Battle Start!</h2>
            <div class="battle-pokemon">
                <div id="player">
                    <h3>${playerPokemon.name}</h3>
                    <img src="${playerPokemon.imagePath}" alt="${playerPokemon.name}">
                    <p>HP: <span id="player-hp">${playerPokemon.hp}</span></p>
                    <button id="attack-btn">Attack</button>
                </div>
                <div id="enemy">
                    <h3>${enemyPokemon.name}</h3>
                    <img src="assets/images/${enemyPokemon.image}" alt="${enemyPokemon.name}">
                    <p>HP: <span id="enemy-hp">${enemyPokemon.hp}</span></p>
                </div>
            </div>
        `;

        document.getElementById("attack-btn").addEventListener("click", playerAttack);
    }

    function playerAttack() {
        let damage = Math.floor(Math.random() * 20) + 5; // Random attack power (5-20)
        enemyPokemon.hp -= damage;
        document.getElementById("enemy-hp").innerText = enemyPokemon.hp;

        animateAttack("player");
        
        if (enemyPokemon.hp <= 0) {
            setTimeout(() => alert(`${enemyPokemon.name} fainted! You win!`), 500);
            return;
        }

        setTimeout(enemyAttack, 1000);
    }

    function enemyAttack() {
        let damage = Math.floor(Math.random() * 15) + 5; // Enemy attack power (5-15)
        playerPokemon.hp -= damage;
        document.getElementById("player-hp").innerText = playerPokemon.hp;

        animateAttack("enemy");

        if (playerPokemon.hp <= 0) {
            setTimeout(() => alert(`${playerPokemon.name} fainted! You lose!`), 500);
        }
    }

    function animateAttack(attacker) {
        let target = attacker === "player" ? "enemy" : "player";
        let targetImg = document.querySelector(`#${target} img`);
        targetImg.style.transform = "scale(1.2)";
        setTimeout(() => targetImg.style.transform = "scale(1) rotate(0deg)", 200);
    }
});
// Main game logic 
document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("pokemon-container");
    pokemonData.forEach(pokemon => {
        const div = document.createElement("div");
        div.innerHTML = `<img src="${pokemon.imagePath}" alt="${pokemon.name}"><p>${pokemon.name}</p>`;
        container.appendChild(div);
    });
});
