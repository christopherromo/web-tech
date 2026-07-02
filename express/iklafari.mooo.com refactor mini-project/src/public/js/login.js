/**
 * login.js
 *
 * handles logic for login.html.
 *
 * author: christopher romo
 * created: 2026-06-29
 */

async function loginAccount(account) {
  try {
    const res = await fetch(`/accounts/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(account),
    });

    const result = await res.json();
    alert(result.message);

    return res.ok;
  } catch {
    alert("network error. please check your connection and try again.");
    return false;
  }
}

async function handleLoginAccountFormSubmit(event) {
  event.preventDefault();

  const loginAccountUsernameInput = document.querySelector(
    "#login-account-username-input",
  );
  const loginAccountPasswordInput = document.querySelector(
    "#login-account-password-input",
  );

  const account = {
    username: loginAccountUsernameInput.value,
    password: loginAccountPasswordInput.value,
  };

  const wasLoggedIn = await loginAccount(account);
  if (wasLoggedIn) {
    event.target.reset();
    window.location.href = "/index.html";
  }
}

async function main() {
  // apply current page color
  applySavedPageColor();

  // login
  const loginAccountForm = document.querySelector("#login-account-form");
  loginAccountForm.addEventListener("submit", handleLoginAccountFormSubmit);
}

main();
