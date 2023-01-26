const btnMenu = document.querySelector(".header__top i");
const menuList = document.querySelector(".header__list");

const menuToggle = () => {
  menuList.classList.toggle("none");
};

btnMenu.addEventListener("click", menuToggle);
