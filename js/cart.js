productStorage = localStorage.getItem('productStr') ? JSON.parse(localStorage.getItem('productStr')) : []
pricesStorage = localStorage.getItem('pricesStr') ? JSON.parse(localStorage.getItem('pricesStr')) : []

const sectionCart = document.getElementById('sectionCart')
const free = document.getElementById("free")
const paid = document.getElementById("paid")

function cart(text) {

    sectionCart.innerText = ``
    let count = 0

    productStorage.forEach(e => {
        count += e.quantity
    })

    sectionCart.innerHTML = `
    <div>
    <h3>Cesta (${count})</h3>
    <h5>Productos</h5>
    </div>
    `



    productStorage.forEach(product => {

        let cartBox = document.createElement('div')
        cartBox.setAttribute('id', 'cartBox')
        sectionCart.appendChild(cartBox)

        cartBox.innerHTML = `
       <div id= "ca1">
        
            <div id ="col">

                <div id="chil1">
                <button onclick ="lessProduct(this)">-</button><p> ${product.quantity} </p><button onclick = "plus(this)">+</button>
                </div>

                <div id="chil2">
                <img src="${product.img_url}" alt="">
                </div>


                <div id= "chil3">
                <h4>${product.brand}</h4>
                <p>Paquete de café, 250 gr</p>
                </div>
                

            </div>

            <div id="chil4">
            <p>${product.quantity * product.price}€</p>
            </div>

      </div>
        `
    })

    //CAJA CARRITO

    box2 = document.createElement("div")
    box2.setAttribute('id', 'box2')


    let totalPrice = 0
    let envio = 0

    productStorage.forEach(ele => {
        totalPrice += ele.quantity * ele.price
        envio += ele.quantity * ele.price
    })

    if (free.checked) {

        text = "GRATIS"
        pricesStorage.push(envio)
        
    }
    if (paid.checked) {

        text = "9,00€"
        envio += 9
        pricesStorage.push(envio)

    }

    let IVA = envio - (envio / 1.21)

    
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
    <p class ="pr">${envio}€</p>
    </div>

    <br>
    <div class="fi">
    <a href="./pasarela.html"><button id="checkout">Ir al checkout</button></a>
    <a href="./products.html"><button id="contin">Seguir comprando</button></a>
    </div>

    <p id= "IVA">Incluye ${IVA.toFixed(2)}€ de IVA</p>
    `

    sectionCart.appendChild(box2)
    localStorage.setItem('pricesStr', JSON.stringify(pricesStorage))

}

window.addEventListener("load", cart)



free.onclick = (e) => {
    e.preventDefault
    cart("GRATIS")
}

paid.onclick = (e) => {
    e.preventDefault
    cart("9,00€")
}





//CARRITO

const shopCart = document.querySelector("#shopCart")
const cart2 = document.querySelector("#cart2")
const goBag = document.getElementById("goBag")
let count = document.getElementById("count")

function noDuplicate() {

    shopCart.innerHTML = ``

    let totalProduct = 0

    productStorage.forEach(element => {

        let wrapper = document.createElement(`div`)
        wrapper.setAttribute(`class`, `wrapper`)

        wrapper.innerHTML = `
        <div class = "borderPrd">
        <img src="${element.img_url}" alt="">
        <h6>${element.brand}</h6>
        </div>
        
        <div class= "itemPrce">
         
        <p class= "textJs">Unidad: ${element.quantity}</p>
        <p>Precio total: ${element.quantity * element.price}</p>
        
        </div>

        <div>
        <button onclick ="plus(this)">+</button>${element.quantity}<button onclick = "lessProduct(this)">-</button>
        <button id= "removStyle" class = "btnStyle" onclick="deleteItem(this)">X</button>
        </div>
        `
        shopCart.appendChild(wrapper)
        totalProduct += element.quantity

    })

    count.textContent = totalProduct

    if (totalProduct < 1) {
        count.style.display = "none"
    } else {
        count.style.display = "inline-block"
    }

    localStorage.setItem('productStr', JSON.stringify(productStorage))

}


noDuplicate()




// ABRIR Y CERRAR CESTA

const buttonBag = document.querySelector("#bagLogo")

buttonBag.onclick = (e) => {

    e.preventDefault()

    if (cart2.style.display === "none") {
        cart2.style.display = "block"
    } else {
        cart2.style.display = "none"
    }

}



// // BOTÓN VACIAR

btnDeletes.onclick = (e) => {
    e.preventDefault()


    productStorage.forEach(e => {
        productStorage = []
    })

    cart()
    noDuplicate()
    btnDeletes.style.display = "none"
    goBag.style.display = "none"
    shopCart.innerHTML = "<p>Su cesta está vacía</p>"
}



// // RETIRAR PRODUCTO 

const deleteItem = (btn) => {

    btn = btn.parentNode.parentNode.firstElementChild.textContent
    console.log(btn);


    productStorage.forEach(e => {

        if (btn.includes(e.brand)) {
            productStorage.splice(productStorage.indexOf(e), 1)
            e.quantity = 1
        }
    })

    cart()
    noDuplicate()
}



//BTN RESTAR

const lessProduct = (btn) => {

    btn = btn.parentNode.parentNode.textContent

    productStorage.forEach(e => {
        if (btn.includes(e.brand)) {
            productStorage[productStorage.indexOf(e)].quantity -= 1
        }
        if (e.quantity === 0) {
            productStorage.splice(productStorage.indexOf(e), 1)
        }
    })

    cart()
    noDuplicate()

}


const plus = (button) => {

    button = button.parentNode.parentNode.textContent

    console.log(button);

    productStorage.forEach(e => {
        if (button.includes(e.brand)) {
            productStorage[productStorage.indexOf(e)].quantity += 1
        }
    })

    cart()
    noDuplicate()
}