const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginSubmit(event) {
 event.preventDefault();
  console.log(username);
}

loginButton.addEventListener("submit", onLoginSubmit);
