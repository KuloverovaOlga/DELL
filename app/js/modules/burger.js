const burger = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.header__nav');
    const overlay = document.querySelector('.overlay');

    const getScrollbarWidth = () => window.innerWidth - document.documentElement.clientWidth;

    function openBurger() {
        let scrollWith = getScrollbarWidth();
        document.body.style.overflow = 'hidden';
        document.querySelector('.main').style.paddingRight = `${scrollWith}px`;
        document.querySelector('.header').style.paddingRight = `${scrollWith}px`;
        burger.classList.add('active');
        nav.classList.add('active');
        overlay.classList.add('active');
    }

    function closeBurger() {
        document.body.style.overflow = '';
        document.querySelector('.main').style.paddingRight = '';
        document.querySelector('.header').style.paddingRight = '';

        burger.classList.remove('active');
        nav.classList.remove('active');
        overlay.classList.remove('active');
    }

    burger.addEventListener('click', () => {
        burger.classList.contains('active') ? closeBurger() : openBurger();
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeBurger();
        }
    });

    nav.addEventListener('click', (e) => {
        if (e.target.classList.contains('header__nav-link')) {
            closeBurger();
        }
    });
};

export default burger;
