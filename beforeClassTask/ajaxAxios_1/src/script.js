const signupAccount = document.querySelector(".signupAccount");
const password = document.querySelector(".password");
const send = document.querySelector(".send");
const loginAccount = document.querySelector(".loginAccount");
const loginPassword = document.querySelector(".loginPassword");
const loginBtn = document.querySelector(".loginBtn");

send.addEventListener("click", signUp);
function signUp() {
  if (signupAccount.value === "" || password.value === "") {
    alert("請填寫正確資訊，帳號或密碼不得為空");
  }
  let obj = {};
  obj.email = signupAccount.value.trim();
  obj.password = password.value.trim();
  axios
    .post("https://hexschool-tutorial.herokuapp.com/api/signup", obj)
    .then(function (response) {
      alert(response.data.message);
    })
    .catch(function (error) {
      console.log(error);
    });
}

loginBtn.addEventListener("click", login);
function login() {
  if (loginAccount.value === "" || loginPassword.value === "") {
    alert("請填寫正確資訊，帳號或密碼不得為空");
  }
  let obj = {};
  obj.email = loginAccount.value.trim();
  obj.password = loginPassword.value.trim();
  axios
    .post("https://hexschool-tutorial.herokuapp.com/api/signin", obj)
    .then(function (response) {
      alert(response.data.message);
    })
    .catch(function (error) {
      console.log(error);
    });
}
