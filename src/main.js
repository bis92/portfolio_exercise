
const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;

document.addEventListener("scroll", (event) => {
  if(window.scrollY > headerHeight) {
    header.classList.add('header--dark');
  } else {
    header.classList.remove('header--dark');
  }
  home.style.opacity = (home.offsetHeight-window.scrollY)/home.offsetHeight
});

const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener("scroll", (event) => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});


const arrowUp = document.querySelector('.arrow-up');
document.addEventListener("scroll", (event) => {
  if(window.scrollY > (homeHeight / 2)) {
    arrowUp.style.opacity = 1;
  } else {
    arrowUp.style.opacity = 0;
  }
});

// Navbar  토글 버튼 클릭 처리
const navbarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.header__toggle');
navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
})

navbarMenu.addEventListener('click', () => {
  navbarMenu.classList.remove('open');
})

