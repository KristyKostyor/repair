document.querySelectorAll('.appliance-repair__overlay').forEach(overlay => {
    overlay.addEventListener('click', () => {
        const card = overlay.closest('.appliance-repair__card');
        const index = card.getAttribute('data-index');
        const dots = document.querySelectorAll('.appliance-repair__dot');
        dots.forEach(dot => dot.classList.remove('appliance-repair__dot--active'));
        dots[index].classList.add('appliance-repair__dot--active');
    });
});



const burger = document.querySelector('.navbar__burger');
const menu = document.querySelector('.navbar__menu');

burger.addEventListener('click', function () {
  menu.classList.toggle('navbar__menu--active');
  
  const expanded = burger.getAttribute('aria-expanded') === 'true';
  burger.setAttribute('aria-expanded', !expanded);
});

