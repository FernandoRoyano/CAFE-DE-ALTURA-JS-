productStorage = localStorage.getItem('productStr') ? JSON.parse(localStorage.getItem('productStr')) : []
const shop = document.getElementById('shop')

axios
    .get(`https://cafe-de-altura-api.vercel.app/api/products`)
    .then(response => {

        let cafe = response.data.products

        cafe.forEach(prod => {

            let cafeBox = document.createElement('div')
            cafeBox.setAttribute('class', 'newsBox')
            shop.appendChild(cafeBox)

            let news = document.createElement('div')
            if (!prod.available) {
                news.style.opacity = "40%"
            }
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
            if (!prod.available) {
                btn1.setAttribute("disabled", "disabled")
                btn1.style.opacity = "20%"
            }
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