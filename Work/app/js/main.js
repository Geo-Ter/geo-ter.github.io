//* navbar 
const header = document.querySelector(`header`);
window.onscroll = () => scrollHeader();

let stickyHeader = header.offsetTop;

function scrollHeader() {
  if (window.pageYOffset > stickyHeader) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

//* mob navbar 
const navbarBurgerItems = document.querySelectorAll(`.burger__btn--lines`);
const navbarBurger = document.querySelector(`.burger__btn--mob`);
const navbarContainer = document.querySelector(`.navbar__container`);

function navbarToggle() {
  navbarContainer.classList.toggle(`hidden`)
}

function changeBurgerItems() {
  navbarBurgerItems[1].classList.toggle(`hidden-brg`)
  navbarBurgerItems[0].classList.toggle(`activeBurgerTop`)
  navbarBurgerItems[2].classList.toggle(`activeBurgerBot`)
}

navbarBurger.addEventListener(`click`, () => {
  navbarToggle()
  changeBurgerItems()

})


//!slider
//*dots 
const dotsBtn = document.querySelectorAll(`.slider__dots`);
const dotsBtnPoints = document.querySelectorAll(`.slider__point`);

function dotsActive() {
  clearDotsPoint()
  if (slideIndex === 1) {
    dotsBtnPoints[0].style.visibility = `visible`
  } else if (slideIndex === 2) {
    dotsBtnPoints[1].style.visibility = `visible`
  } else if (slideIndex === 3) {
    dotsBtnPoints[2].style.visibility = `visible`
  }
}

function clearDotsPoint() {
  dotsBtnPoints.forEach(i => {
    i.style.visibility = `hidden`
  })
}
dotsBtn.forEach(item => {
  item.addEventListener(`click`, (i) => {
    if (i.target.classList.contains(`slider__dots-1`)) {
      slideIndex = 1
      showSlides(slideIndex);
    } else if (i.target.classList.contains(`slider__dots-2`)) {
      slideIndex = 2
      showSlides(slideIndex);
    } else if (i.target.classList.contains(`slider__dots-3`)) {
      slideIndex = 3
      showSlides(slideIndex);
    }
  })
})
//* intervalSlides 
const sliderContainer = document.querySelector(`.slider__container`);

intervalSlide()
function intervalSlide() {
    setInterval(() => {
      slideIndex++;
      showSlides(slideIndex);
    }, 6000)
  }

//*btn
const sliderBtnRight = document.querySelector(`.slider__btn--right`);
const sliderBtnLeft = document.querySelector(`.slider__btn--left`);
sliderBtnRight.addEventListener(`click`, () => {
  nextSlide()
})

sliderBtnLeft.addEventListener(`click`, () => {
  previousSlide()
})



let slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
  showSlides(slideIndex += 1);
}

function previousSlide() {
  showSlides(slideIndex -= 1);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.querySelectorAll(".slider__img-container");

  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  dotsActive()
  for (let slide of slides) {
    slide.classList.remove(`active`)
  }

  slides[slideIndex - 1].classList.add(`active`)
}



//* change portfolio tittle
let portfolioBorderBot = document.querySelectorAll(`.portfolio-border-bottom`);
function addPortfolioBoard(numb) {
  portfolioBorderBot[numb].style.width = `100%`
}
function removePortfolioBoard() {
  portfolioBorderBot.forEach(item => {item.style.width = `0%`})
}
//*filter card 


let portfolioContainer = document.querySelector(`.portfolio-card__container`);
let portfolioCard = document.querySelectorAll(`.portfolio-card`);

let portfolioItems = document.querySelectorAll(`.portfolio-items__links`);
portfolioItems.forEach(item => {
  item.addEventListener(`click`, (i) => {
    if(i.target.classList.contains(`portfolio-items__links--brend`)) {
      removePortfolioBoard()
      addPortfolioBoard(1)
      changeDisplay()
      clearCard()
      portfolioCard.forEach(i => {
        if (i.classList.contains(`brend`)) {
          i.style.display = `flex`
        }
      })
    }
     else if(i.target.classList.contains(`portfolio-items__links--web-design`)) {
       removePortfolioBoard()
      addPortfolioBoard(2)
      changeDisplay()
      clearCard()
      portfolioCard.forEach(i => {
        if (i.classList.contains(`web-design`)) {
          i.style.display = `flex`
        }
      })
    }
     else if(i.target.classList.contains(`portfolio-items__links--mob-app`)) {
       removePortfolioBoard()
      addPortfolioBoard(3)
      changeDisplay()
      clearCard()
      portfolioCard.forEach(i => {
        if (i.classList.contains(`mob-app`)) {
          i.style.display = `flex`
        }
      })
    }
     else if(i.target.classList.contains(`portfolio-items__links--photo`)) {
       removePortfolioBoard()
      addPortfolioBoard(4)
      changeDisplay()
      clearCard()
      portfolioCard.forEach(i => {
        if (i.classList.contains(`photography`)) {
          i.style.display = `flex`
        }
      })
    }
    else {
      removePortfolioBoard()
      addPortfolioBoard(0)
      returnGrid()

    }
    
    
  })
})
function returnGrid() {
  portfolioCard.forEach(i => {
    i.style.display = `flex`
  })
  portfolioContainer.style.display = `grid`
}
function clearCard() {
  portfolioCard.forEach(i => {
    i.style.display = `none`
  })

}
function changeDisplay() {
  portfolioContainer.style.display = `flex`
  portfolioContainer.style.flexFlow = `row wrap`
}