productStorage = localStorage.getItem('productStr') ? JSON.parse(localStorage.getItem('productStr')) : []
pricesStorage = localStorage.getItem('pricesStr') ? JSON.parse(localStorage.getItem('pricesStr')) : []

const itemHow = document.getElementById("itemsHow")

function cart(text) {

    let totalPrice = 0

    productStorage.forEach(ele => {
        totalPrice += ele.quantity * ele.price
    })

    if (pricesStorage[pricesStorage.length -1] == totalPrice) {
        text = "GRATIS"
    } else {
        text = "9,00€"
    }

    productStorage.forEach(product => {
        itemHow.innerHTML += `<div id= "ca1">
        
        <div id ="col">
                
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
                
        </div>`
    })


    itemHow.innerHTML += `
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
    `
    
    productStorage = []
    localStorage.setItem('pricesStr', JSON.stringify(pricesStorage))
    localStorage.setItem('productStr', JSON.stringify(productStorage))
}

window.addEventListener("load", cart)


