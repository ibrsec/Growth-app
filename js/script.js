




const hamburgerBtn = document.querySelector(".hamburger");
const openMenu = document.getElementById("hamburger-menu");
const questionBtns = document.querySelectorAll(".question-buttons button");
const qaContainers = document.querySelectorAll(".qa-cont");


hamburgerBtn.addEventListener("click", function () {
  openMenu.classList.toggle("open");
});

questionBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    for (let i = 0; i < questionBtns.length; i++) {
      questionBtns[i].classList.remove("blue-btn");
    }
    btn.classList.toggle("blue-btn");
  });
});

qaContainers.forEach((each) => {
  each.querySelector(".q-cont").addEventListener("click", function () {
    for (let i = 0; i < qaContainers.length; i++) {
      qaContainers[i].querySelector(".a-cont").classList.remove("open");
      qaContainers[i].querySelector("i").classList.remove("fa-minus");
      qaContainers[i].querySelector("i").classList.add("fa-plus");
    }
    each.querySelector(".a-cont").classList.toggle("open");
    each.querySelector("i").classList.remove("fa-plus");
    each.querySelector("i").classList.add("fa-minus");
  });
});
