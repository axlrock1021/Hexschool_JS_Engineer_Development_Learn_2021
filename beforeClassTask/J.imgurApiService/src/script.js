// 參考連結：https://quip.com/AyfZAq78K94k/imgur-API

let file = [];
let formData = new FormData();
console.log(formData);
const inputFile = document.querySelector("#inputFile");
const image = document.querySelector("#image");
const inputSubmit = document.querySelector("#inputSubmit");

inputFile.addEventListener("change", handleFileUpload);
inputSubmit.addEventListener("click", submitFile);

function handleFileUpload() {
  console.log(inputFile);
  console.dir(inputFile);
  file = inputFile.files[0];
  console.log(file);
  formData.append("image", file); // required
}

function submitFile() {
  axios
    .post(
      `https://api.imgur.com/3/image`,
    formData,
      {
        headers: {
          Authorization: "Client-ID dc911cb868089c1",
        },
      },
    )
    .then((res) => {
      console.log(res.data);
      image.src = res.data.data.link;
    })
    .catch((e) => {
      console.log(e);
    });
}