const btnMenu = document.querySelector(".header__top i");
const menuList = document.querySelector(".header__list");

const cryptoCard = document.querySelector(".crypto__cards");

const menuToggle = () => {
  menuList.classList.toggle("none");
};

btnMenu.addEventListener("click", menuToggle);
