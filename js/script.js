// Main game logic 
document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("pokemon-container");
    pokemonData.forEach(pokemon => {
        const div = document.createElement("div");
        div.innerHTML = `<img src="${pokemon.imagePath}" alt="${pokemon.name}"><p>${pokemon.name}</p>`;
        container.appendChild(div);
    });
});
