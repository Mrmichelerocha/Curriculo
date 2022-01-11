const buttonResponsive = document.getElementById('button');

function toggleMenu() {
  const nav = document.getElementById('menu-horizontal');
  nav.classList.toggle('active');

}
buttonResponsive.addEventListerner('click', toggleMenu);
