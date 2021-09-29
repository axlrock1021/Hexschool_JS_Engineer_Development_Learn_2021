/*
  資料格式
  {
    <attribute>: {
      <validator name>: <validator options>
    }
  }
*/

const constraints = {
  name: {
    presence: {
      message: "是必填欄位",
    },
  },
  imgUrl: {
    presence: {
      message: "是必填欄位",
    },
    url: {
      schemes: ["http", "https"],
      message: "必須是正確的網址",
    },
  },
  area: {
    presence: {
      message: "是必填欄位",
    },
  },
  price: {
    presence: {
      message: "是必填欄位",
    },
    numericality: {
      greaterThan: 0,
      message: "必須大於 0",
    },
  },
  group: {
    presence: {
      message: "是必填欄位",
    },
    numericality: {
      greaterThan: 0,
      message: "必須大於 0",
    },
  },
  rate: {
    presence: {
      message: "是必填欄位",
    },
    numericality: {
      greaterThanOrEqualTo: 1,
      lessThanOrEqualTo: 10,
      message: "必須符合 1-10 的區間",
    },
  },
  description: {
    presence: {
      message: "是必填欄位",
    },
  },
};

const form = document.querySelector("form#myForm");
const inputs = document.querySelectorAll(
  "input[type=text],input[type=number],select,textarea"
);
inputs.forEach((item) => {
  item.addEventListener("change", function () {
    item.nextElementSibling.textContent = "";
    let errors = validate(form, constraints);
    console.log(errors);
    // 呈現在畫面上
    if (errors) {
      Object.keys(errors).forEach(function (keys) {
        console.log(keys);
        document.querySelector(`.${keys}`).textContent = errors[keys];
      });
    }
  });
});