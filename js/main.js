/* ==================== CHANGE NAV BAR COLOR ==================== */
const nav = document.getElementById('nav');
const scroll = document.querySelectorAll('.scroll');

/* ==================== HOME AND FOOTER SWIPE ==================== */
const footer = document.getElementById('footer');

/* ==================== PLUS ==================== */
const plus = document.getElementById('plus');

window.onscroll = () => {
    if (window.scrollY > 0) {
        nav.style.backgroundColor = 'white';
        scroll.forEach(e => {
            e.style.color = 'black';
        })
        nav.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.3)';
        // HOME AND FOOTER SWIPE
        if (window.scrollY < 5000) {
            footer.style.zIndex = '-2';
            // PLUS
            plus.style.display = 'block';
        } else if (window.scrollY >= 5000) {
            footer.style.zIndex = '-1';
            // PLUS
            plus.style.display = 'none';
        }
    } else {
        nav.style.backgroundColor = 'transparent';
        scroll.forEach(e => {
            e.style.color = 'white';
        })
        nav.style.boxShadow = 'none';
        plus.style.display = 'none';
    }
};

/* ==================== HEADER SWIPER ==================== */
let swiperHeader = new Swiper('.header__container', {
    loop: true,
    autoplay: {
        delay: 6000,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
});

/* ==================== ENJOY BLOG SWIPER ==================== */
let swiperEnjoyBlog = new Swiper('.enjoy-blog__container', {
    loop: true,
    autoplay: {
        delay: 6000,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
});
