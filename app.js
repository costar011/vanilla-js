const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginSubmit(event) {
 event.preventDefault();
  console.log(username);
}

function handleLinkClick(event) {
  event.preventDefault();
  console.dir(event);
}

loginButton.addEventListener("submit", onLoginSubmit);
handleLinkClick.addEventListener("click", handleLinkClick);