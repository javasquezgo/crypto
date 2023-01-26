const btnMenu = document.querySelector(".header__top i");
const menuList = document.querySelector("ul");

const menuToggle = () => {
  menuList.classList.toggle("none");
};

btnMenu.addEventListener("click", menuToggle);
