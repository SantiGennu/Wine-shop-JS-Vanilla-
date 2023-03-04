let cart = JSON.parse(localStorage.getItem("cart")) || []

let container = document.getElementById("container-cards")
let cartContainer = document.getElementById("cart-container")
let counter = document.getElementById("counter")
let totalPrice = document.getElementById("totalPrice")
let button = document.getElementById("button")
let buttons = document.querySelectorAll(".button-value")
let cards = document.querySelectorAll(".card")



// const showProducts = async () => {
//     const response = await fetch("../products.json")
//     const data = await response.json()
//     console.log(data)
//     data.forEach((item) => {
//         let div = document.createElement("div")
//         div.className = "col-12 col-md-4 "
//         div.classList.add("cards")
//         div.innerHTML = `
//                 <div class="card">
//                     <img class="card-img-top" src="${item.image}" alt="Card image cap">
//                     <div class="card-body">
//                         <h2 id="card-title">${item.name}</h2>
//                            <h3 class= ${item.variaty} id="type">${item.type}</h3>
//                         <h4 id="price"> $${item.price}</h4>
//                         <p id="card-text">${item.description}</p>
//                         <button class="btn btn-primary" id= ${item.id}>Add to cart </button>
//                     </div>
//                 </div>


//               `
//         container.appendChild(div)

//         let btn = document.getElementById(`${item.id}`)

//         btn.addEventListener("click", () => {
//             Swal.fire({
//                 position: 'top-end',
//                 icon: 'success',
//                 title: 'Your flight have been added to the Shopping cart',
//                 showConfirmButton: false,
//                 timer: 1500,
//             })
//             addToCart(item)



//         })

//     })

// }

// showProducts()



// function addToCart(item) {

//     let wine = data.find(wine => wine.id === item.id)
//     cart.push(wine)

//     actualizeProducts()

// }
// button.addEventListener("click", showCart)
// function showCart() {
//     cartContainer.innerHTML = ""
//     if (cart.length === 0) {
//         let div = document.createElement("div")
//         div.innerHTML = `<p id ="empty" >Shopping cart is empty</p>`
//         cartContainer.appendChild(div)
//     } else {
//         cart.forEach(item => {
//             let div = document.createElement("div")
//             div.className = "cart-container"
//             div.innerHTML = `  <p> ${item.name}</p>
//                     <p> ${item.type}</p>
//                      <p> ${item.variaty}</p>
//                     <p> $${item.price} </p>
//                      <span class="minus"> - </span>
//                     <p id="quantity">${item.quantity}</p>
//                     <span class="plus"> + </span>
//                      <p id="price">${item.quantity * item.price}</p>
//                     <button class="delete" id="btn-delete${item.id}"><span class="material-symbols-outlined">
//                     delete </span></button> `
//             cartContainer.appendChild(div)

//             let minus = div.querySelector(".minus")
//             minus.addEventListener("click", () => {
//                 if (item.quantity !== 1) {
//                     item.quantity--
//                 }

//                 showCart()


//             })
//             let plus = div.querySelector(".plus")
//             plus.addEventListener("click", () => {
//                 item.quantity++
//                 showCart()
//             })




//             actualizeProducts()
//             saveLocalStorage()

//             let buttonDelete = document.getElementById(`btn-delete${item.id}`)
//             buttonDelete.addEventListener("click", () => {
//                 let index = cart.indexOf(item)
//                 cart.splice(index, 1)
//                 actualizeProducts()
//                 saveLocalStorage()
//                 showCart()

//             })

//         })
//     }


// }


// function actualizeProducts() {
//     const cartLength = cart.length
//     localStorage.setItem("cartLength", JSON.stringify(cartLength))
//     counter.innerText = JSON.parse(localStorage.getItem("cartLength"))
//     totalPrice.innerText = cart.reduce((acc, el) => acc + (el.price * el.quantity), 0)


// }

// function filterProducts() {

//     buttons.forEach((button) => {
//         button.addEventListener("click", () => {
//             buttons.forEach((button) => {
//                 button.classList.remove("active")


//             })
//             button.classList.add("active")
//             let variaty = button.getAttribute("name")
//             data.map(w => (w.variaty))
//             if (variaty == "All") {
//                 showProducts(data)
//             } else {
//                 let wineFilter = data.filter(wine => (wine.variaty).toLowerCase().includes(variaty.toLowerCase()))
//                 showProducts(wineFilter)
//             }


//         })
//     })
// }


// function filterSearch(e) {

//     let wineFilter = data.filter(wine => (wine.name).toLowerCase().includes(e.target.value))
//     showProducts(wineFilter)
//     console.log(e.target.value)

// }

// window.addEventListener("keyup", filterSearch)

// filterProducts()


// saveLocalStorage = () => {
//     localStorage.setItem("cart", JSON.stringify(cart))

// }
// actualizeProducts()


showProducts(wineList)

function showProducts(wineList) {
    container.innerHTML = ""
    wineList.forEach(item => {
        let div = document.createElement("div")
        div.className = "col-12 col-md-4 "
        div.classList.add("cards")
        div.innerHTML = `
                <div class="card">
                    <img class="card-img-top" src="${item.image}" alt="Card image cap">
                    <div class="card-body">
                        <h2 id="card-title">${item.name}</h2>
                           <h3 class= ${item.variaty} id="type">${item.type}</h3>
                        <h4 id="price"> $${item.price}</h4>
                        <p id="card-text">${item.description}</p>
                        <button class="btn btn-primary" id= ${item.id}>Add to cart </button>
                    </div>
                </div>


              `
        container.appendChild(div)
        let btn = document.getElementById(`${item.id}`)

        btn.addEventListener("click", () => {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your flight have been added to the Shopping cart',
                showConfirmButton: false,
                timer: 1500,
            })
            addToCart(item)



        })

    })

}



function addToCart(item) {


    let wine = wineList.find(wine => wine.id === item.id)
    cart.push(wine)

    actualizeProducts()

}

button.addEventListener("click", showCart)
function showCart() {
    cartContainer.innerHTML = ""
    if (cart.length === 0) {
        let div = document.createElement("div")
        div.innerHTML = `<p id ="empty" >Shopping cart is empty</p>`
        cartContainer.appendChild(div)
    } else {
        cart.forEach(item => {
            let div = document.createElement("div")
            div.className = "cart-container"
            div.innerHTML = `  <p> ${item.name}</p>
                    <p> ${item.type}</p>
                     <p> ${item.variaty}</p>
                    <p> $${item.price} </p>
                     <span class="minus"> - </span>
                    <p id="quantity">${item.quantity}</p>
                    <span class="plus"> + </span>
                     <p id="price">${item.quantity * item.price}</p>
                    <button class="delete" id="btn-delete${item.id}"><span class="material-symbols-outlined">
                    delete </span></button> `
            cartContainer.appendChild(div)

            let minus = div.querySelector(".minus")
            minus.addEventListener("click", () => {
                if (item.quantity !== 1) {
                    item.quantity--
                }

                showCart()


            })
            let plus = div.querySelector(".plus")
            plus.addEventListener("click", () => {
                item.quantity++
                showCart()
            })




            actualizeProducts()
            saveLocalStorage()

            let buttonDelete = document.getElementById(`btn-delete${item.id}`)
            buttonDelete.addEventListener("click", () => {
                let index = cart.indexOf(item)
                cart.splice(index, 1)
                actualizeProducts()
                saveLocalStorage()
                showCart()

            })

        })
    }


}


function actualizeProducts() {
    const cartLength = cart.length
    localStorage.setItem("cartLength", JSON.stringify(cartLength))
    counter.innerText = JSON.parse(localStorage.getItem("cartLength"))
    totalPrice.innerText = cart.reduce((acc, el) => acc + (el.price * el.quantity), 0)


}

function filterProducts() {

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            buttons.forEach((button) => {
                button.classList.remove("active")


            })
            button.classList.add("active")
            let variaty = button.getAttribute("name")
            wineList.map(w => (w.variaty))
            if (variaty == "All") {
                showProducts(wineList)
            } else {
                let wineFilter = wineList.filter(wine => (wine.variaty).toLowerCase().includes(variaty.toLowerCase()))
                showProducts(wineFilter)
            }


        })
    })
}


function filterSearch(e) {

    let wineFilter = wineList.filter(wine => (wine.name).toLowerCase().includes(e.target.value))
    showProducts(wineFilter)
    console.log(e.target.value)

}

window.addEventListener("keyup", filterSearch)

filterProducts()




saveLocalStorage = () => {
    localStorage.setItem("cart", JSON.stringify(cart))

}
actualizeProducts()