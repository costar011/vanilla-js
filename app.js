const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector(".greeting");
greeting.hidden = true;

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem("username", username);
  paintGreetings(username);
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
}
else {
  // show the greetings
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerHTML = `Hello ${savedUsername}`;
}