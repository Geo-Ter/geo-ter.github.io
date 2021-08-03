   //! main text
   let describeTitles = document.querySelectorAll(`.product-information__navbar--text`);
   let describeText = document.querySelectorAll(`.product-information__text`);

   describeTitles.forEach(items => {
       items.addEventListener(`click`, (i) => {

           describeText.forEach(item => item.style.display = `none`)
           if (i.target.classList.contains(`product-information__navbar--text-about`)) {
               document.querySelector(`.product-information__text--about`).style.display = `flex`

           } else if (i.target.classList.contains(`product-information__navbar--text-guarantee`)) {
               document.querySelector(`.product-information__text--guarantee`).style.display = `flex`
           } else if (i.target.classList.contains(`product-information__navbar--text-design`)) {
               document.querySelector(`.product-information__text--design`).style.display = `flex`
           } else {
               document.querySelector(`.product-information__text--brend`).style.display = `flex`;
           }

       })

   })

   //!mobile menu arrow animation
   let mobArrow = document.querySelectorAll(`.product__gallery-btn--small`);

   mobArrow[0].addEventListener(`click`, () => {
     SmallImgShow(imgIndex -= 1)
       mobArrow[0].classList.add(`mobArrowActive`);
       setTimeout(() => {
           mobArrow[0].classList.remove(`mobArrowActive`);
       }, 900);

   })
   mobArrow[1].addEventListener(`click`, () => {
    SmallImgShow(imgIndex += 1)
       mobArrow[1].classList.add(`mobArrowActive`);
       setTimeout(() => {
           mobArrow[1].classList.remove(`mobArrowActive`);
       }, 900);

   })

   //! validation modal window 
   let validateForm = document.querySelector(`#modal-feedback`);
   let validateBtn = document.querySelector(`#feedback-number-button`);
   let validateInput = validateForm.querySelector(`#feedback-number`)

   let removeValidation = function () {
       let errors = validateForm.querySelectorAll('.error')

       for (let i = 0; i < errors.length; i++) {
           errors[i].remove()
       }
   }

   validateForm.addEventListener('submit', function (e) {
       e.preventDefault()
       removeValidation()
       if (!validateInput.value) {
           let error = document.createElement('div')
           error.className = 'error'
           error.style.color = 'tomato'
           error.innerHTML = 'Введите ваш номер!'
           validateInput.parentElement.insertBefore(error, validateInput)
       } else if (validateInput.value.length < 13 || validateInput.value.length > 13) {
           let error = document.createElement('div')
           error.className = 'error'
           error.style.color = 'tomato'
           error.innerHTML = 'Ведите номер по примеру: +380XXXXXXXXX!'
           validateInput.parentElement.insertBefore(error, validateInput)
       } else {
           $(this).unbind('submit').submit()
       }

   })
   validateBtn.addEventListener(`click`, (e) => {
       removeValidation()
       if (!validateInput.value) {
           let error = document.createElement('div')
           error.className = 'error'
           error.style.color = 'tomato'
           error.innerHTML = 'Введите ваш номер!'
           validateInput.parentElement.insertBefore(error, validateInput)
       } else if (validateInput.value.length < 13 || validateInput.value.length > 13) {
           let error = document.createElement('div')
           error.className = 'error'
           error.style.color = 'tomato'
           error.innerHTML = 'Ведите номер по примеру: +380XXXXXXXXX!'
           validateInput.parentElement.insertBefore(error, validateInput)
       } else {
           validateForm.submit()
       }

   })


   //! gallery menu

   let gallerySmallImges = document.querySelectorAll(`.product__gallery-img`);
   let galleryNextBtn = document.querySelector(`.product__gallery-container--next`);
   let galleryPreviousBtn = document.querySelector(`.product__gallery-container--previous`);
   

   let imgIndex = 0;


   SmallImgShow(imgIndex)

   galleryNextBtn.addEventListener(`click`, () => {
       SmallImgShow(imgIndex += 1)
   })
   galleryPreviousBtn.addEventListener(`click`, () => {
       SmallImgShow(imgIndex -= 1)
   })

   function SmallImgShow(n) {
       if (n > gallerySmallImges.length) {
           imgIndex = 1
       }
       if (n < 1) {
           imgIndex = gallerySmallImges.length
       }
       for (let slide of gallerySmallImges) {
           slide.classList.remove(`active-img`)
       }
       gallerySmallImges[imgIndex - 1].classList.add(`active-img`);
   }