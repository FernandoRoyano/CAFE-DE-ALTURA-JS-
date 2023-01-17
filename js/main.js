productStorage = localStorage.getItem('productStr') ? JSON.parse(localStorage.getItem('productStr')) : []
const cardBox = document.getElementById('apProd')


axios
    .get(`https://cafe-de-altura-api.vercel.app/api/products`)
    .then(response => {

        let cafe = response.data.products
        cafe = cafe.slice(0, 4)

            cafe.forEach(prod => {

            let cafeBox = document.createElement('div')
            cafeBox.setAttribute('class', 'col-3 newsBox')
            cardBox.appendChild(cafeBox)

            let news = document.createElement('div')
            cafeBox.setAttribute('class', 'news')
            cafeBox.appendChild(news)

            let imgCard = document.createElement('img')
            imgCard.setAttribute('src', `${prod.img_url}`)
            news.appendChild(imgCard)

            let brand = document.createElement('p')
            brand.innerText = `${prod.brand}`
            news.appendChild(brand)

            let price = document.createElement('p')
            price.innerText = `${prod.price},00€`
            news.appendChild(price)

            let btn1 = document.createElement('button')
            btn1.innerText = `Añadir`
            cafeBox.appendChild(btn1)


            btn1.onclick = () => {
                
                const real = productStorage.some(product => product._id === prod._id)
                if (real) {
                    productStorage.forEach(product => {
                        if (product._id === prod._id) {
                            product.quantity += 1
                        }
                    })
                } else {
                    prod.quantity = 1
                    productStorage.push(prod)
                }
                noDuplicate()
                btnDeletes.style.display = "inline"
                goBag.style.display = "inline"
            }

        })
    

    })

//ACORDEÓN
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}