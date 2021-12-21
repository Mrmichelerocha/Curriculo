const buttonResponsive = document.getElementsByClassName('button');

function toggleMenu() {
  const menuHorizontal = document.getElementsByClassName('menu-horizontal');
  menuHorizontal.classList.toggle('active');

}
buttonResponsive.addEventListterner('click', toggleMenu);
