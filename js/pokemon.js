const pokemonList = [
    {
        name: "Pikachu",
        image: "https://raw.githubusercontent.com/iederees-create/pokemon-battle-simulator/main/assets/images/pikachu/pikachu_1.png"
    },
    {
        name: "Bulbasaur",
        image: "https://raw.githubusercontent.com/iederees-create/pokemon-battle-simulator/main/assets/images/bulbasaur/bulbasaur_1.png"
    },
    {
        name: "Charmander",
        image: "https://raw.githubusercontent.com/iederees-create/pokemon-battle-simulator/main/assets/images/charmander/charmander_1.png"
    }
    // Add more Pokémon as needed
];

// Function to display Pokémon
function displayPokemons() {
    const container = document.getElementById("pokemon-container");

    pokemonList.forEach(pokemon => {
        const pokemonElement = document.createElement("div");
        pokemonElement.classList.add("pokemon");

        const image = document.createElement("img");
        image.src = pokemon.image;  // Using the raw URL for the image
        image.alt = pokemon.name;

        const name = document.createElement("h2");
        name.textContent = pokemon.name;

        pokemonElement.appendChild(image);
        pokemonElement.appendChild(name);

        container.appendChild(pokemonElement);
    });
}

// Call the displayPokemons function when the page loads
window.onload = displayPokemons;
