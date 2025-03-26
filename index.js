document.querySelectorAll('.appliance-repair__overlay').forEach(overlay => {
    overlay.addEventListener('click', () => {
        const card = overlay.closest('.appliance-repair__card');
        const index = card.getAttribute('data-index');
        const dots = document.querySelectorAll('.appliance-repair__dot');
        dots.forEach(dot => dot.classList.remove('appliance-repair__dot--active'));
        dots[index].classList.add('appliance-repair__dot--active');
    });
});
