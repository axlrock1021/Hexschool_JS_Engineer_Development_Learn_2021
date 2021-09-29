const registerUrl = "https://hexschool-tutorial.herokuapp.com/api/signup";
const email = document.querySelector(".account");
const password = document.querySelector(".password");
const sendBtn = document.querySelector(".send");
const messageTip = document.querySelector(".messageTip");

sendBtn.addEventListener("click", function (e) {
  if (email.value == "" || password.value == "") {
    alert("資訊不得為空");
    messageTip.textContent = "資訊不得為空";
    return;
  } else {
    let objData = {};
    objData.email = email.value;
    objData.password = password.value;
    registerUser(objData);
  }
});

function registerUser(objData) {
  axios
    .post(registerUrl, objData)
    .then((res) => {
      console.log(res.data);
      alert(res.data.message);
      messageTip.textContent = res.data.message;
      email.value = "";
      password.value = "";
    })
    .catch((err) => {
      console.error(err);
    });
}