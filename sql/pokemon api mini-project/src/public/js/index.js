/**
 * index.js
 *
 * handles logic for index.html.
 *
 * author: christopher romo
 * created: 2026-05-28
 */

async function addPokemon(pokemon) {
  try {
    const res = await fetch(`/pokemon`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pokemon),
    });

    const data = await res.json();
    alert(data.message);

    return res.ok;
  } catch {
    alert("network error. please check your connection and try again.");
    return false;
  }
}

async function updatePokemon(id, updates) {
  try {
    const res = await fetch(`/pokemon/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    });

    const data = await res.json();
    alert(data.message);

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
    alert(data.message);

    return res.ok;
  } catch {
    alert("network error. please check your connection and try again.");
    return false;
  }
}

async function handleAddFormSubmit(event) {
  event.preventDefault();

  const addPokedexNumberInputField = document.querySelector(
    "#add-pokedex-number-input-field",
  );
  const addNameInputField = document.querySelector("#add-name-input-field");
  const addTypeInputField = document.querySelector("#add-type-input-field");
  const addRegionInputField = document.querySelector("#add-region-input-field");
  const addHpInputField = document.querySelector("#add-hp-input-field");
  const addAttackInputField = document.querySelector("#add-attack-input-field");
  const addDefenseInputField = document.querySelector(
    "#add-defense-input-field",
  );
  const addLevelInputField = document.querySelector("#add-level-input-field");
  const addMythicalCheck = document.querySelector("#add-mythical-check");

  const pokemon = {
    pokedexNumber: Number(addPokedexNumberInputField.value),
    name: addNameInputField.value,
    type: addTypeInputField.value,
    hp: Number(addHpInputField.value),
    attack: Number(addAttackInputField.value),
    defense: Number(addDefenseInputField.value),
    level: Number(addLevelInputField.value),
    mythical: addMythicalCheck.checked ? 1 : 0,
    region: addRegionInputField.value,
  };

  const wasAdded = await addPokemon(pokemon);
  if (wasAdded) {
    event.target.reset();
  }
}

async function handleUpdateFormSubmit(event) {
  event.preventDefault();

  const updateIdInputField = document.querySelector("#update-id-input-field");
  const updateHpInputField = document.querySelector("#update-hp-input-field");
  const updateAttackInputField = document.querySelector(
    "#update-attack-input-field",
  );
  const updateLevelInputField = document.querySelector(
    "#update-level-input-field",
  );

  const id = updateIdInputField.value;
  const updates = {
    hp: Number(updateHpInputField.value),
    attack: Number(updateAttackInputField.value),
    level: Number(updateLevelInputField.value),
  };

  const wasUpdated = await updatePokemon(id, updates);
  if (wasUpdated) {
    event.target.reset();
  }
}

async function handleRemoveFormSubmit(event) {
  event.preventDefault();

  const removeIdInputField = document.querySelector("#remove-id-input-field");
  const id = removeIdInputField.value;

  const wasDeleted = await removePokemon(id);
  if (wasDeleted) {
    event.target.reset();
  }
}

function main() {
  // add
  const addForm = document.querySelector("#add-form");
  addForm.addEventListener("submit", handleAddFormSubmit);

  // update
  const updateForm = document.querySelector("#update-form");
  updateForm.addEventListener("submit", handleUpdateFormSubmit);

  // remove
  const removeForm = document.querySelector("#remove-form");
  removeForm.addEventListener("submit", handleRemoveFormSubmit);
}

main();
