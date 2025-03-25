// pokemon.js - Define Pokémon data and functions

const typeChart = {
   "Fire": ["Grass", "Bug", "Ice"],
   "Water": ["Fire", "Ground", "Rock"],
   "Electric": ["Water", "Flying"],
   // Add other types here
};

const moves = {
   "Growl": { effect: "lowerAttack", target: "enemy" },
   "Tackle": { effect: "normalDamage", target: "enemy" },
   "Thunderbolt": { effect: "signatureMove", target: "enemy" },
   "Flamethrower": { effect: "signatureMove", target: "enemy" },
   // Add other moves here
};

function calculateDamage(attacker, defender) {
   const attackerType = attacker.type;
   const defenderType = defender.type;
   
   if (typeChart[attackerType] && typeChart[attackerType].includes(defenderType)) {
       return 2; // Double damage for type advantage
   }
   return 1; // Normal damage
}

function applyStatusEffect(pokemon, effect) {
   pokemon.status = effect;
}

function checkStatus(pokemon) {
   if (pokemon.status === "sleep") {
       console.log(`${pokemon.name} is asleep!`);
       return true; // Can't attack
   }
   if (pokemon.status === "paralyze" && Math.random() < 0.25) {
       console.log(`${pokemon.name} is paralyzed and couldn't move!`);
       return true; // 25% chance to skip turn due to paralysis
   }
   return false; // No effect
}

function compareSpeed(pokemon1, pokemon2) {
   if (pokemon1.speed > pokemon2.speed) {
       return pokemon1;
   } else {
       return pokemon2;
   }
}

function executeMove(move, attacker, defender) {
   if (move.effect === "lowerAttack") {
       defender.attack -= 1; // Lower the opponent's attack
   }
   if (move.effect === "normalDamage") {
       const damage = calculateDamage(attacker, defender);
       defender.hp -= damage;
       console.log(`${attacker.name} dealt ${damage} damage to ${defender.name}`);
   }
   if (move.effect === "signatureMove") {
       if (attacker.name === "Pikachu") {
           console.log(`${attacker.name} uses Thunderbolt!`);
           defender.hp -= 20;
       }
       if (attacker.name === "Charizard") {
           console.log(`${attacker.name} uses Flamethrower!`);
           defender.hp -= 25;
       }
   }
}

function aiTurn(pokemon, opponent) {
   if (pokemon.hp < pokemon.maxHp * 0.3) {
       console.log(`${pokemon.name} is low on health! Using a healing move.`);
       pokemon.hp += 20; // Heal 20 HP if low on health
   } else {
       const move = chooseMove(pokemon, opponent);
       executeMove(move, pokemon, opponent);
   }
}
