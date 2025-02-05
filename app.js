const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  title.style.color = "blue";
}

function handleMouseEnter() {
  title.style.color = "Mousw is here !";
}

function handleMouseLeave() {
  title.style.color = "Mouse is gone !";
}

function handleWindowResize() {
 documentElement.style.backgroundColor = "tomato";
}

title.onclick("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseenter", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);