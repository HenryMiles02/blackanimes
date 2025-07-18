const searchBtn = document.querySelector(".search-btn");
const input = document.querySelector(".search-container");
const closeBtn = document.querySelector(".close-btn");
const logo = document.querySelector(".logo");

searchBtn.addEventListener('click', () => {
    input.classList.add('active')

    if(window.innerWidth <= 550) {
        logo.classList.add('hidden')
    }
})

closeBtn.addEventListener('click', () => {
    input.classList.remove('active')

    if(window.innerWidth <= 550) {
        logo.classList.remove('hidden')
    }
})

class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick =this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();

        document.body.classList.toggle("menu-open");
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavbar.init();