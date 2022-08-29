function classToggle() {
    const navs = document.querySelectorAll('.navbar-links')

    navs.forEach(nav => nav.classList.toggle('navbar-ToggleShow'));
}

document.querySelector('.navbar-toggle')
    .addEventListener('click', classToggle);