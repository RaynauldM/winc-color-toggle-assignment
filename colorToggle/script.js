const hamburger = document.querySelector(".hamburger");
const list = document.querySelector(".list");
const colors = document.getElementsByClassName("color");
const h2 = document.querySelector("h2");

let colorsArray = Array.from(colors);

const changeText = function (e) {
  h2.innerText = e;
};

const listToggle = function () {
  list.classList.toggle("hide");
};

colorsArray.forEach((i) => {
  i.addEventListener("click", () => {
    document.body.style.background = i.textContent;
    listToggle();
    changeText(i.textContent);
  });
});

hamburger.addEventListener("click", listToggle);
