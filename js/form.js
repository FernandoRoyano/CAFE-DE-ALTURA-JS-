const form = document.querySelector("#formU")
const username = document.querySelector("#username")
const inputEmail = document.querySelector("#inputEmail4")
const tel = document.querySelector("#tel")
const textarea = document.querySelector("#textarea")
const check = document.querySelector("#gridCheck")
const btnForm = document.querySelector("#btnForm")


const validated = (e) => {
    e.preventDefault()
    if (!username.value) {
        alert('Introduce tu nombre.')
        username.focus()
        return
    }

    if (!inputEmail.value.includes('@') || (!inputEmail.value.includes('.'))) {
        alert('No es un correo válido')
        inputEmail.focus()
        return
    }
    if(!(tel.value * 1) || tel.value.length > 11 || tel.value.length < 9){
        alert('Número de teléfono incorrecto')
        tel.focus()
        return
    }
    if (!check.checked) {
        alert('Debes aceptar los términos y condiciones.')
        check.focus()
        return
    } 
}

form.addEventListener('submit', validated)


