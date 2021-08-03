//* input placholder
let signInInput = document.querySelectorAll(`.sign-in__input`);

signInInput[0].placeholder = `User Name`
signInInput[1].placeholder = `Password`



//* Tooltips
let PasswordSave = document.querySelector(`.sign-in__checkbox--text`);
let CheckboxSquard = document.querySelector(`.sign-in__checkbox--customize`);

function tooltipsVisible() {
    document.querySelector(`.sign-in__tooltips`).style.visibility = 'visible';
    document.querySelector(`.sign-in__tooltips`).style.opacity = '1';
}

function tooltipsInvisible() {
    document.querySelector(`.sign-in__tooltips`).style.visibility = 'hidden';
    document.querySelector(`.sign-in__tooltips`).style.opacity = '0';
}

PasswordSave.addEventListener(`mouseover`, () => {
    tooltipsVisible()
})
PasswordSave.addEventListener(`mouseout`, () => {
    tooltipsInvisible()
})

CheckboxSquard.addEventListener(`mouseover`, () => {
    tooltipsVisible()
})
CheckboxSquard.addEventListener(`mouseout`, () => {
    tooltipsInvisible()
})


//! Validation 
const form = document.querySelectorAll(`form`);

function validateEmail(email) {
    var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(String(email).toLowerCase());
}
//* Sign-in valiadtion
form[0].addEventListener(`submit`, formSendIn)
let formReqIn = form[0].querySelectorAll(`._req`);

function formSendIn(e) {
    e.preventDefault()
    signName(formReqIn[0])
    signPassword(formReqIn[1])
    if (formReqIn[0].classList.contains(`_checked`) && formReqIn[1].classList.contains(`_checked`)) {
        form[0].submit()
    }



}
async function signName(f) {
    f.classList.remove(`_checked`)
    if (formValidate(f) === false) {
        f.classList.add(`_checked`)
    }
}
async function signPassword(f) {
    f.classList.remove(`_checked`)
    if (formValidate(f) === false) {
        f.classList.add(`_checked`)
    }

}

function formValidate(item) {
    formRemoveError(item)
    formRemoveCheck(item)
    if (item.value === `` || item.value.length < 4) {
        formRemoveCheck(item)
        formAddError(item)
        return true
    } else {
        formRemoveError(item)
        formAddCheck(item)
        return false
    }

}

function formAddError(i) {
    if (i.classList.contains(`sign-up__input`)) {
        i.parentNode.classList.add(`_error--sign-up`)
    } else {
        i.parentNode.classList.add(`_error`)
    }
}

function formRemoveError(i) {
    if (i.classList.contains(`sign-up__input`)) {
        i.parentNode.classList.remove(`_error--sign-up`)
    } else {
        i.parentNode.classList.remove(`_error`)
    }
}

function formAddCheck(i) {
    if (i.classList.contains(`sign-up__input`)) {
        i.parentNode.classList.add(`_check--sign-up`)
    } else {
        i.parentNode.classList.add(`_check`)
    }
}

function formRemoveCheck(i) {
    if (i.classList.contains(`sign-up__input`)) {
        i.parentNode.classList.remove(`_check--sign-up`)
    } else {
        i.parentNode.classList.remove(`_check`)
    }
}


//* sign-up Validation
form[1].addEventListener(`submit`, formSendUp)
let formReqUp = form[1].querySelectorAll(`._req`);

function formSendUp(e) {
    e.preventDefault()
    signEmail(formReqUp[0])
    signName(formReqUp[1])
    signPassword(formReqUp[2])
    if (formReqUp[0].classList.contains(`_checked`) && formReqUp[1].classList.contains(`_checked`) && formReqUp[2].classList.contains(`_checked`)) {
        form[1].submit()
    }


}

function signEmail(f) {
    f.classList.remove(`_checked`)
    if (formValidateEmail(f) === false) {
        f.classList.add(`_checked`)
    }
}

function formValidateEmail(item) {
    formRemoveError(item)
    formRemoveCheck(item)
    if (item.value === `` || !validateEmail(item.value)) {
        formRemoveCheck(item)
        formAddError(item)
        return true
    } else {
        formRemoveError(item)
        formAddCheck(item)
        return false
    }
}