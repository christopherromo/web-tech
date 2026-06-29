/**
 * register.js
 *
 * handles logic for register.html.
 *
 * author: christopher romo
 * created: 2026-06-23
 */

async function registerAccount(account) {
  try {
    const res = await fetch(`/accounts`, {
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

async function handleRegisterAccountFormSubmit(event) {
  event.preventDefault();

  const registerAccountUsernameInput = document.querySelector(
    "#register-account-username-input",
  );
  const registerAccountPasswordInput = document.querySelector(
    "#register-account-password-input",
  );

  const account = {
    username: registerAccountUsernameInput.value,
    password: registerAccountPasswordInput.value,
  };

  const wasRegistered = await registerAccount(account);
  if (wasRegistered) {
    event.target.reset();
    window.location.href = "/login.html";
  }
}

async function main() {
  // register
  const registerAccountForm = document.querySelector("#register-account-form");
  registerAccountForm.addEventListener(
    "submit",
    handleRegisterAccountFormSubmit,
  );
}

main();
