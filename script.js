document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });

        if (window.innerWidth<= 768) {
            document.getElementById('menu').classList.remove('show');
        }
    });
});

document.getElementById('menuToggle').addEventListener('click', function() {
    document.getElementById('menu').classList.toggle('show');
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(0,0,0,0.95)';
    }else {
        header.style.backgroundColor = 'rgba(0,0,0,0.9)';
    }
});
