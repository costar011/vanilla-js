const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

function onLoginSubmit(event) {
  event.preventDefault();
  logForm.classList.add("hidden");
  const username = loginInput.value;
  greeting.innerHTML = "Hello" + username;
  greeting.classList.remove("hidden");
}
loginButton.addEventListener("submit", onLoginSubmit);