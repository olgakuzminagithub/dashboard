const btn = document.querySelector("#btn")
const nav = document.querySelector("#nav")


btn.addEventListener('click', function(e) {
    e.preventDefault();
    btn.classList.toggle('menu_button__active');
    nav.classList.toggle('active');
  });