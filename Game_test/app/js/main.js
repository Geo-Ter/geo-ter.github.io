
//*mobileNavbarIcon
const mobileNavIcon = document.querySelector(`.header__btn--mobile`);
const mobileNavbar = document.querySelector(`.navbar__container`);
const actionNavIcon = document.querySelector(`.cube-action`)

mobileNavIcon.addEventListener(`click`, () => {
    actionNavIcon.classList.toggle(`cube-move`)
    mobileNavbar.classList.toggle(`open-navbar`)
})



//*searchInput
const searchIcon = document.querySelector(`.search__icon`)
const searchIconMob = document.querySelector(`.search__icon--mobile`)
const searchInput = document.querySelector(`#Search`)
const searchInputMob = document.querySelector(`#Search--mobile`)

// desktop
searchInput.addEventListener(`mouseover`, () => {
    searchIcon.style.filter = `opacity(100%)`;
})
searchInput.addEventListener(`mouseout`, () => {
    searchIcon.style.filter = `opacity(25%)`;
})

searchInput.addEventListener(`input`, () => {
    searchIcon.style.filter = `opacity(100%)`;
    searchInput.style.color = `white`
    if (searchInput.value === '') {
        searchIcon.style.filter = `opacity(25%)`;
    }
})
//mobile
searchInputMob.addEventListener(`mouseover`, () => {
    searchIconMob.style.filter = `opacity(100%)`;
})
searchInputMob.addEventListener(`mouseout`, () => {
    searchIconMob.style.filter = `opacity(25%)`;
})

searchInputMob.addEventListener(`input`, () => {
    searchIconMob.style.filter = `opacity(100%)`;
    searchInputMob.style.color = `white`
    if (searchInputMob.value === '') {
        searchIconMob.style.filter = `opacity(25%)`;
    }
})

//* Slider
const swiper1 = new Swiper('.main-slider__container', {
    direction: 'horizontal',
    loop: true,

    pagination: {
        el: '.main-swipper__pagination',
        clickable: true,
    },
});

const swiperGameCardMob = new Swiper('.game-list-swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    mousewheel: {
        sensitivity: 1,
    },
    breakpoints: {
        819: {
            centeredSlides: true,
    slidesPerGroup: 1,
        },
        820: {
            slidesPerView: 3,
        centeredSlides: true,
        slidesPerGroup: 1,
        
        }
    },
    
    

    pagination: {
        el: '.game-pagination',
        clickable: true,
    },
});
   


const swiperClientsFeedback = new Swiper('.clients-feedback-swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.clients-feedback-paggination',
        clickable: true,
    },
});

//*Footer
let footerTitle = document.querySelectorAll(`.footer__title`);
let footerText = document.querySelector(`.footer__text`)
const mediaWindow620 = window.matchMedia('(max-width: 620px)')



footerTitle.forEach(item => {
    item.addEventListener(`click`, (e) => {
        if (mediaWindow620.matches) {
            item.nextElementSibling.classList.toggle(`footer-open`)
            item.firstElementChild.classList.toggle(`footer-arrow-rotate`)
        } else {
            e.preventDefault
        }

    })

})

//* tabs
let gameTabBtn = document.querySelectorAll(`.game-tab__text`);
let gameSlides = document.querySelectorAll(`.game__item-slide`);

function removeActiveTabs() {
    gameTabBtn.forEach(item => {
        item.classList.remove(`game-tab__text--active`)
    })
  
}
function changeActiveTabs() {
    gameTabBtn.forEach( item  => {
        item.addEventListener(`click`, () => {
            removeActiveTabs()
            item.classList.add(`game-tab__text--active`)
        })
    })
}
changeActiveTabs() 
