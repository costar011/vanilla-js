const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector(".greeting");
greeting.hidden = true;

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = loginInput.value;
  loginForm.hidden = true;
  greeting.innerText = `Hello ${username}`;
  greeting.hidden = false;
});
