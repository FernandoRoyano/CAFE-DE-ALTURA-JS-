productStorage = localStorage.getItem('productStr') ? JSON.parse(localStorage.getItem('productStr')) : []
pricesStorage = localStorage.getItem('pricesStr') ? JSON.parse(localStorage.getItem('pricesStr')) : []

const sectionCart = document.getElementById('sectionCart')
const free = document.getElementById("free")
const paid = document.getElementById("paid")


function cart(text) {

    sectionCart.innerText = ``

    box2 = document.createElement("div")
    box2.setAttribute('id', 'box2')


    let totalPrice = 0

    productStorage.forEach(ele => {
        totalPrice += ele.quantity * ele.price
    })

    if (pricesStorage[pricesStorage.length -1] == totalPrice) {
        text = "GRATIS"
    } else {
        text = "9,00€"
    }


    
    box2.innerHTML = `
    <h4>Total del carrito</h4>

    <div class="fi">
    <p class="sub">SUBTOTAL</p>
    <p class ="pr">${totalPrice}€</p>
    </div>

    <div class="fi">
    <p class="sub">ENVÍO</p>
    <p class ="pr">${text}</p>
    </div>

    <div class="fi" id="fi1">
    <p class ="pr">TOTAL</p>
    <p class ="pr">${pricesStorage[pricesStorage.length -1]},00€</p>
    </div>


    <div class="fi">
    <button onclick="validation(this)" id="checkout">Pagar y realizar pedido</button>
    </div>
    `

    sectionCart.appendChild(box2)
    localStorage.setItem('pricesStr', JSON.stringify(pricesStorage))
}


window.addEventListener("load", cart)


//CHECKBOX
const debt = document.getElementById('debt')
const titular = document.getElementById("titular")
const target = document.getElementById("target")
const date = document.getElementById("date")
const cvc2 = document.getElementById("cvc2")

const inputRadio = document.getElementById("inputRadio")

//DIRECCIÓN
const name = document.getElementById("name")
const lastNames = document.getElementById("lastNames")
const phone = document.getElementById("phone2")
const email = document.getElementById("email")
const country = document.getElementById("country")
const cp = document.getElementById("cp")
const population = document.getElementById("population")
const street = document.getElementById("street")
const numbers = document.getElementById("numbers")
const door = document.getElementById("door")
const apartment = document.getElementById("apartment")

const checkout = document.getElementById("checkout")

const validation = () => {

    function validarNom(name) {
        let lettersVal = /^[A-Z ]+$/i
        return lettersVal.test(name)
    }

    function expiration(date) {
        let validated = /^[0-9/]+$/;
        return validated.test(date)
    }

    function validEmail(email) {
        let validated = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return validated.test(email)
    }

    function validNumber(number) {
        let validated = /^[0-9]+$/
        return validated.test(number)
    }

    if (debt.checked) {
        if (!validarNom(titular.value)) {
            alert('Introduce un nombre válido')
            titular.focus()
            return
        }
    
        if (titular.value.length < 3) {
            alert('El nombre tiene que tener 3 o mas catacteres ')
            titular.focus()
            return
        }
        if (!(target.value * 1)) {
            alert('Introduza un número de tarjeta válido')
            target.focus()
            return
        }
    
        if (target.value.length > 16) {
            alert('Introduza un número de tarjeta válido')
            target.focus()
            return
        }
    
        if (date.value.length !== 5) {
            alert('Introduza una fecha valida')
            date.focus()
            return
        }
    
        if (!expiration(date.value)) {
            alert('Introduza una fecha valida')
            date.focus()
            return
        }
    
        if (!(cvc2.value * 1)) {
            alert('Introduza un CVC válido')
            cvc.focus()
            return
        }
    
        if (cvc2.value.length !== 3) {
            alert('Introduza un CVC válido')
            cvc.focus()
            return
        }
    }

    if (!validarNom(name.value)) {
        alert('Introduce un nombre válido')
        name.focus()
        return
    }

    if (name.value.length < 3) {
        alert('El nombre tiene que tener 3 o mas catacteres ')
        name.focus()
        return
    }

    if (!validarNom(lastNames.value)) {
        alert('Introduce un apellido válido')
        lastNames.focus()
        return
    }

    if (lastNames.value.length < 3) {
        alert('El apellido tiene que tener 3 o mas catacteres ')
        lastNames.focus()
        return
    }

    if (!(phone2.value * 1)) {
        alert('Introduza un número de teléfono válido')
        phone.focus()
        return
    }

    if (phone2.value.length !== 9) {
        alert('Introduza un número de teléfono válido')
        phone2.focus()
        return
    }

    if (!validEmail(email.value)) {
        alert('Introduza email válido')
        email.focus()
        return
    }

    if (country.value === `none`) {
        alert('Seleccione un país')
        country.focus()
        return
    }

    if (!validarNom(population.value)) {
        alert('Introduce una población válida')
        population.focus()
        return
    }

    if (!(cp.value * 1)) {
        alert('Introduza un código postal válido')
        cp.focus()
        return
    }

    if (cp.value.length !== 5) {
        alert('Introduza un código postal válido')
        cp.focus()
        return
    }

    if (!validarNom(street.value)) {
        alert('Introduza una calle válida')
        street.focus()
        return
    }

    if (!(numbers.value * 1)) {
        alert('Introduza un número válido')
        numbers.focus()
        return
    }

    if (numbers.length > 3) {
        alert('Introduza un número válido')
        numbers.focus()
        return
    }

    window.location.href = "./confirmated.html"

}


