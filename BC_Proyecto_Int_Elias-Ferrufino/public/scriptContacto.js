
//OPEN RESPONSIVE MENU
let  responsiveNavBar = document.querySelector(".responsiveNavBar")
let icono = document.querySelector("#responsiveMenuIcon")
let open=false;
icono.addEventListener("click", ()=>{
    if(!open){
        responsiveNavBar.classList.add("active");
        open=true
    }else {
        responsiveNavBar.classList.remove("active");
        open=false;
    }
})


form = document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
let inputs = document.querySelectorAll("input")
let name = inputs[2]
let email = inputs[3]
let subject = inputs[4]
let message  = document.querySelector("textarea")

let nameRegex = /^([A-Z]|[a-z])[abcdefghij1klmnñopqrstuvwxyzáéíóú]{2,9}$/
let regexSubject= /[a-z]*/
let regexMessage  = /[^!#$%&\=?¡|¬+{}*^:_~]{10,200}/i
let regexEmail = /^([a-z]|[0-9])*@*[a-z]+\.com$/
alert(validateName(name, nameRegex))
alert(validateEmail(email, regexEmail))
alert(validateSubject(subject, regexSubject))
alert(validateMessage(message, regexMessage))

})
function validateName(input, regex) {
    let value = input.value
    let restrictionName = ` °!"#$%&/()@=?¡|¬´+{}-.¨*[]:_^~,`.split("")
    if (value.length < 3 ||restrictionName.some(simbolo=> value.includes(simbolo) ) || value.length > 10 || !(regex.test(value)) ) {
        input.setAttribute("class", "invalid")
          return `NAME RULES:
                    - Required
                    - 3 at 10 characters
                    - Can have one Uppercase
                    - Supports Latin words
                    - Not white space`
    } else if (regex.test(value)) {
        input.setAttribute("class", "valid")
        return "Name Valid!"
    }
}

function validateMessage(input, regex) {
    let value = input.value
    let messageRestriction = `!#$%&/=?¡|¬+{}*[]:_^~,`.split("")
    if (messageRestriction.some(simbolo=> value.includes(simbolo) ) || value.length > 200 || !(regex.test(value)) ) {
        input.setAttribute("class", "invalid")
          return    `MESSAGE RULES:
                    -MAX 200 CHARACTERS
                    -NOT ANY WEIRD SYMBOL`
    } else if (regex.test(value)) {
        input.setAttribute("class", "valid")
        return "Message Valid!"
    }
}

function validateSubject(input, regex) {
    let value = input.value
    if (!regex.test(value)) {
        input.setAttribute("class", "invalid")
          return    `SUBJECT RULES:
                    -MIN 8 CHARACTERS
                    -ONLY WORDS`
    } else if (regex.test(value)) {
        input.setAttribute("class", "valid")
        return "Subject Valid!"
    }
}

function validateEmail(input, regex) {
    let value = input.value
    if (!regex.test(value) ) {
        input.setAttribute("class", "invalid")
          return    `EMAIL RULES:
                    -MIN 10 CHARACTERS
                    -MUST HAVE @ SYMBOL AND .COM
                    -ONLY ALPHANUMERIC CHARACTERS AND LOWERCASE`
    } else if (regex.test(value)) {
        input.setAttribute("class", "valid")
        return "Email Valid!"
    }
}