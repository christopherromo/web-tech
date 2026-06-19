/**
 * trainers.js
 *
 * handles logic for trainers.html.
 *
 * author: christopher romo
 * created: 2026-06-18
 */

async function addTrainer(trainer) {
  try {
    const res = await fetch(`/trainers`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(trainer),
    });

    const data = await res.json();
    alert(data.message || "trainer added!");

    return res.ok;
  } catch {
    alert("network error. please check your connection and try again.");
    return false;
  }
}

async function removeTrainer(id) {
  try {
    const res = await fetch(`/trainers/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();
    alert(data.message || "trainer removed!");

    return res.ok;
  } catch {
    alert("network error. please check your connection and try again.");
    return false;
  }
}

async function handleAddTrainerFormSubmit(event) {
  event.preventDefault();

  const addTrainerNameInput = document.querySelector("#add-trainer-name-input");
  const addTrainerRegionInput = document.querySelector(
    "#add-trainer-region-input",
  );
  const addTrainerBadgesInput = document.querySelector(
    "#add-trainer-badges-input",
  );

  const trainer = {
    name: addTrainerNameInput.value,
    region: addTrainerRegionInput.value,
    badges: Number(addTrainerBadgesInput.value),
  };

  const wasAdded = await addTrainer(trainer);
  if (wasAdded) {
    event.target.reset();
  }
}

async function handleRemoveTrainerFormSubmit(event) {
  event.preventDefault();

  const removeTrainerIdInput = document.querySelector(
    "#remove-trainer-id-input",
  );
  const id = removeTrainerIdInput.value;

  const wasDeleted = await removeTrainer(id);
  if (wasDeleted) {
    event.target.reset();
  }
}

function main() {
  // add
  const addTrainerForm = document.querySelector("#add-trainer-form");
  addTrainerForm.addEventListener("submit", handleAddTrainerFormSubmit);

  // remove
  const removeTrainerForm = document.querySelector("#remove-trainer-form");
  removeTrainerForm.addEventListener("submit", handleRemoveTrainerFormSubmit);
}

main();
