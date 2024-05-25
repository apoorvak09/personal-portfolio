document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');
    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(event) {
        if (event.currentTarget.hostname === window.location.hostname && event.currentTarget.pathname === window.location.pathname) {
            event.preventDefault();
            const targetId = event.currentTarget.getAttribute('href').substring(1);
            const targetPosition = document.getElementById(targetId).offsetTop - 60;
            window.scrollTo
