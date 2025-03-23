const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector(".greeting");
greeting.hidden = true;

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// 3번쨰
// submit 이벤트가 발생하면 onLoginSubmit 함수 실행
// onLoginSubmit 함수는 event를 받는다
// event가 원래 하는 행동을 멈춰 줄 것 이다

// form을 다시 숨겨준다
// loginInput.value를 username에 저장한다
// username 값을 username이라는 key로 localStorage에 저장한다

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings();
}

function paintGreetings() {
  greeting.innerHTML = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);

// 1번째
// 예를 들어 localStorage에 유저정보가 있으면 거기서 유저정보를 받아서 인자로 넣어주면 된다
// 만약 localStorage에 유정정보가 없다면 form의 submit을 기다리고, form이 submit 되면 우리는 input으로부터 유저정보를 받고
// input에서 받은 user를 가진 paintGreetings 함수를 호출할거다
const savedUsername = localStorage.getItem(USERNAME_KEY);

// 2번째
// null 일 때부터 보는 이유는 유저가 처음 왔을 때는 null 상태이기 때문이다
// savedUsername 은 null이니까 이 조건은 참이 될 것이다
// savedUsername null이면 어떻게 되는가?
// logform으로부터 HIDDEN_CLASSNAME을 제거한다
// form에서 class="hidden"을 제거
// form이 표시된다

// 그 다음 일은 loginForm에 addEventListener를 더하고 submit 이벤트를 기다린다
// 2번째
// savedUsername이 null인 경우, 즉 유저 정보가 없는 경우
// loginForm의 hidden 클래스를 제거하여 폼을 표시한다
// 그리고 loginForm에 submit 이벤트를 추가하여 onLoginSubmit 함수를 호출한다

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} 
// 1번째
// savedUsername이 null이 아닌 경우, 즉 유저 정보가 있는 경우
// paintGreetings 함수를 호출하여 유저 정보를 화면에 표시한다
else {
  paintGreetings();
}