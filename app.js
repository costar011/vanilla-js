const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  h1.title.style.color = "blue";
}

function handleMouseEnter() {
  h1.title.style.color = "Mousw is here !";
}

function handleMouseLeave() {
  h1.title.style.color = "Mouse is gone !";
}

function handleWindowResize() {
 documentElement.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("copier");
}

function handleWindowOffline() {
  alert("SOS no WIFI");
}

function handleWindowOnline() {
  alert("ALL GOOD");
}