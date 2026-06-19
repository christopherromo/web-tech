/**
 * teams.js
 *
 * handles logic for teams.html.
 *
 * author: christopher romo
 * created: 2026-06-18
 */

async function addTeam(team) {
  try {
    const res = await fetch(`/teams`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(team),
    });

    const data = await res.json();
    alert(data.message || "team added!");

    return res.ok;
  } catch {
    alert("network error. please check your connection and try again.");
    return false;
  }
}

async function removeTeam(trainerId, pokemonId) {
  try {
    const res = await fetch(`/teams/${trainerId}/${pokemonId}`, {
      method: "DELETE",
    });

    const data = await res.json();
    alert(data.message || "team removed!");

    return res.ok;
  } catch {
    alert("network error. please check your connection and try again.");
    return false;
  }
}

async function handleAddTeamFormSubmit(event) {
  event.preventDefault();

  const addTeamTrainerIdInput = document.querySelector(
    "#add-team-trainer-id-input",
  );
  const addTeamPokemonIdInput = document.querySelector(
    "#add-team-pokemon-id-input",
  );

  const team = {
    trainerId: Number(addTeamTrainerIdInput.value),
    pokemonId: Number(addTeamPokemonIdInput.value),
  };

  const wasAdded = await addTeam(team);
  if (wasAdded) {
    event.target.reset();
  }
}

async function handleRemoveTeamFormSubmit(event) {
  event.preventDefault();

  const removeTeamTrainerIdInput = document.querySelector(
    "#remove-team-trainer-id-input",
  );
  const removeTeamPokemonIdInput = document.querySelector(
    "#remove-team-pokemon-id-input",
  );
  const trainerId = removeTeamTrainerIdInput.value;
  const pokemonId = removeTeamPokemonIdInput.value;

  const wasDeleted = await removeTeam(trainerId, pokemonId);
  if (wasDeleted) {
    event.target.reset();
  }
}

function main() {
  // add
  const addTeamForm = document.querySelector("#add-team-form");
  addTeamForm.addEventListener("submit", handleAddTeamFormSubmit);

  // remove
  const removeTeamForm = document.querySelector("#remove-team-form");
  removeTeamForm.addEventListener("submit", handleRemoveTeamFormSubmit);
}

main();
