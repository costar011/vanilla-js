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
  paintGreetings(savedUsername);
}

function paintGreetings(username) {
  greeting.innerHTML = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);

// 예를 들어 localStorage에 유저정보가 있으면 거기서 유저정보를 받아서 인자로 넣어주면 된다
// 만약 localStorage에 유정정보가 없다면 form의 submit을 기다리고, form이 submit 되면 우리는 input으로부터 유저정보를 받고
// input에서 받은 user를 가진 paintGreetings 함수를 호출할거다
const savedUsername = localStorage.getItem(USERNAME_KEY);


// null 일 때부터 보는 이유는 유저가 처음 왔을 때는 null 상태이기 때문이다
// savedUsername 은 null이니까 이 조건은 참이 될 것이다
// savedUsername null이면 어떻게 되는가?
// logform으로부터 HIDDEN_CLASSNAME을 제거한다
// form에서 class="hidden"을 제거
// 그 다음 loginForm에 
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
