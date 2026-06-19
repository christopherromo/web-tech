/**
 * pokemon.js
 *
 * handles logic for index.html.
 *
 * author: christopher romo
 * created: 2026-06-18
 */

async function addPokemon(pokemon) {
  try {
    const res = await fetch(`/pokemon`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pokemon),
    });

    const data = await res.json();
    alert(data.message || "pokemon added!");

    return res.ok;
  } catch {
    alert("network error. please check your connection and try again.");
    return false;
  }
}

async function removePokemon(id) {
  try {
    const res = await fetch(`/pokemon/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();
    alert(data.message || "pokemon removed!");

    return res.ok;
  } catch {
    alert("network error. please check your connection and try again.");
    return false;
  }
}

async function handleAddPokemonFormSubmit(event) {
  event.preventDefault();

  const addPokemonNameInput = document.querySelector("#add-pokemon-name-input");
  const addPokemonTypeInput = document.querySelector("#add-pokemon-type-input");
  const addPokemonLevelInput = document.querySelector(
    "#add-pokemon-level-input",
  );

  const pokemon = {
    name: addPokemonNameInput.value,
    type: addPokemonTypeInput.value,
    level: addPokemonLevelInput.value,
  };

  const wasAdded = await addPokemon(pokemon);
  if (wasAdded) {
    event.target.reset();
  }
}

async function handleRemovePokemonFormSubmit(event) {
  event.preventDefault();

  const removePokemonIdInput = document.querySelector(
    "#remove-pokemon-id-input",
  );
  const id = removePokemonIdInput.value;

  const wasDeleted = await removePokemon(id);
  if (wasDeleted) {
    event.target.reset();
  }
}

function main() {
  // add
  const addPokemonForm = document.querySelector("#add-pokemon-form");
  addPokemonForm.addEventListener("submit", handleAddPokemonFormSubmit);

  // remove
  const removePokemonForm = document.querySelector("#remove-pokemon-form");
  removePokemonForm.addEventListener("submit", handleRemovePokemonFormSubmit);
}

main();
