/**
 * index.js
 *
 * handles logic for index.html.
 *
 * author: christopher romo
 * created: 2026-06-23
 */

async function refreshUserInterface() {
  const accountLink = document.querySelector("#account-link");
  const helloUserMessage = document.querySelector("#hello-user-message");

  try {
    const sessionRes = await fetch("/accounts/session");
    const sessionResult = await sessionRes.json();

    if (sessionRes.ok) {
      accountLink.textContent = "logout";
      accountLink.href = "#";

      accountLink.addEventListener("click", async (event) => {
        event.preventDefault();

        try {
          const logoutRes = await fetch("/accounts/logout", {
            method: "POST",
          });

          const logoutResult = await logoutRes.json();
          alert(logoutResult.message);

          if (logoutRes.ok) {
            window.location.reload();
          }
        } catch {
          alert("network error. please check your connection and try again.");
        }
      });

      helloUserMessage.textContent = `hello, ${sessionResult.account.username}`;

      return;
    }

    accountLink.textContent = "login";
    accountLink.href = "/login.html";

    helloUserMessage.textContent = "";
  } catch {
    alert("network error. please check your connection and try again.");
  }
}

async function addRecipient(recipient) {
  try {
    const res = await fetch(`/recipients`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(recipient),
    });

    const result = await res.json();
    alert(result.message);

    return res.ok;
  } catch {
    alert("network error. please check your connection and try again.");
    return false;
  }
}

async function handleAddRecipientFormSubmit(event) {
  event.preventDefault();

  const addRecipientNameInput = document.querySelector(
    "#add-recipient-name-input",
  );
  const addRecipientEmailInput = document.querySelector(
    "#add-recipient-email-input",
  );

  const recipient = {
    name: addRecipientNameInput.value,
    email: addRecipientEmailInput.value,
  };

  const wasAdded = await addRecipient(recipient);
  if (wasAdded) {
    event.target.reset();
    await fillRecipientsList();
  }
}

async function editRecipient(id) {
  const editedRecipientName = prompt("edit recipient's name:");
  const editedRecipientEmail = prompt("edit recipient's email:");

  const hasEditedName =
    typeof editedRecipientName === "string" && editedRecipientName.trim();
  const hasEditedEmail =
    typeof editedRecipientEmail === "string" && editedRecipientEmail.trim();

  if (!hasEditedName && !hasEditedEmail) {
    alert("no edits received.");
    return;
  }

  const updates = {
    name: editedRecipientName,
    email: editedRecipientEmail,
  };

  try {
    const res = await fetch(`/recipients/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    });

    const result = await res.json();
    alert(result.message);

    if (res.ok) {
      await fillRecipientsList();
    }
  } catch {
    alert("network error. please check your connection and try again.");
  }
}

async function removeRecipient(id) {
  try {
    const res = await fetch(`/recipients/${id}`, {
      method: "DELETE",
    });

    const result = await res.json();
    alert(result.message);

    if (res.ok) {
      await fillRecipientsList();
    }
  } catch {
    alert("network error. please check your connection and try again.");
  }
}

function buildRecipientItem(recipient) {
  const recipientItem = document.createElement("div");
  recipientItem.classList.add("recipient-item");

  const recipientName = document.createElement("p");
  recipientName.textContent = `name: ${recipient.name}`;

  const recipientEmail = document.createElement("p");
  recipientEmail.textContent = `email: ${recipient.email}`;

  const editButton = document.createElement("button");
  editButton.textContent = "edit";
  editButton.addEventListener("click", () => {
    editRecipient(recipient.id);
  });

  const removeButton = document.createElement("button");
  removeButton.textContent = "remove";
  removeButton.addEventListener("click", () => {
    removeRecipient(recipient.id);
  });

  const buttons = document.createElement("p");
  buttons.append(editButton, " ", removeButton);

  recipientItem.append(recipientName, recipientEmail, buttons);
  return recipientItem;
}

async function fillRecipientsList() {
  try {
    // fetch all recipients
    const res = await fetch("/recipients");
    const recipients = await res.json();

    // designate area to append
    const recipientsList = document.getElementById("recipients-list");
    recipientsList.innerHTML = "";

    // message if the list is empty
    if (recipients.length === 0) {
      const message = document.createElement("p");
      message.textContent = "no recipients yet...";
      recipientsList.append(message);
      return;
    }

    // create recipient items
    recipients.forEach((recipient) => {
      const recipientItem = buildRecipientItem(recipient);
      recipientsList.append(recipientItem);
    });
  } catch {
    alert("network error. please check your connection and try again.");
  }
}

async function main() {
  // apply current page color
  applySavedPageColor();

  // change page color
  const serverHeader = document.querySelector("#server-header");
  serverHeader.addEventListener("click", handleServerHeaderClick);

  // refresh ui if logged in
  await refreshUserInterface();

  // add recipient form
  const addRecipientForm = document.querySelector("#add-recipient-form");
  addRecipientForm.addEventListener("submit", handleAddRecipientFormSubmit);

  // fill recipients list
  await fillRecipientsList();
  setInterval(fillRecipientsList, 5000);
}

main();
