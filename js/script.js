const hamburgerBtn =  document.querySelector(".hamburger");
const openMenu = document.getElementById("hamburger-menu");

const questionBtns =  document.querySelectorAll(".question-buttons button");


hamburgerBtn.addEventListener("click",function(){
    openMenu.classList.toggle("open");
});



questionBtns.forEach((btn) =>{
    btn.addEventListener("click",function(){
        for(let i = 0; i < questionBtns.length ; i ++){
            questionBtns[i].classList.remove("blue-btn");
        }
        btn.classList.toggle("blue-btn");
    });
});