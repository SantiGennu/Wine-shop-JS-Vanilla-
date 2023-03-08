let cart = JSON.parse(localStorage.getItem("cart")) || []
let container = document.getElementById("container-cards")
let cartContainer = document.getElementById("cart-container")
let counter = document.getElementById("counter")
let totalPrice = document.getElementById("totalPrice")
let button = document.getElementById("button")
let buttons = document.querySelectorAll(".button-value")
let cards = document.querySelectorAll(".card")


<<<<<<< HEAD
const getDataFromJson = async () => {
=======
const getDataFromJson = async()=> {
>>>>>>> c377c89d3334eb004cae8063fd415e0caccf4e61
    try {
        const response = await fetch("products.json")
        const data = await response.json()
        return data
<<<<<<< HEAD

    } catch (error) {
        console.log("Tuvimos un error al obtener el .JSON", error)
    }
}

const wine = getDataFromJson()
console.log(wine)
=======
    } catch (error) {
        console.log("Tuvimos un error al obtener el .JSON",error)
    }
}
>>>>>>> c377c89d3334eb004cae8063fd415e0caccf4e61

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



// showProducts(wineList)
async function showProducts(data) {
    container.innerHTML = ""
    const list = await data
    console.log(list)
    list.forEach(item => {
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

<<<<<<< HEAD
showProducts(wine)
console.log(wine)

async function addToCart(item) {
=======
showProducts(getDataFromJson())
>>>>>>> c377c89d3334eb004cae8063fd415e0caccf4e61

    const wineList = await wine
    const add = wineList.find(wine => wine.id === item.id)
    cart.push(add)

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
                     <span class="minus material-symbols-outlined">remove</span>
                    <span id="quantity"> <span class="itemQty">${item.quantity}</span></span>
                  <span class="plus material-symbols-outlined">add</span>
                     <p id="price">${item.quantity * item.price}</p>
                    <button class="delete" id="btn-delete${item.id}"><span class="material-symbols-outlined">
                    delete </span></button>
                    <span class="done material-symbols-outlined">done</span> `
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

async function filterProducts() {
    const filter = await wine

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            buttons.forEach((button) => {
                button.classList.remove("active")

            })
            button.classList.add("active")
            let type = button.getAttribute("name")
            filter.map(w => (w.variaty))
            if (type == "All") {
                showProducts(filter)
            } else {
                let wineFilter = filter.filter(wine => (wine.type).toLowerCase().includes(type.toLowerCase()))
                showProducts(wineFilter)
            }


        })
    })
}


async function filterSearch(e) {
    const filtro = await wine

    let wineFilter = filtro.filter(wine => (wine.name).toLowerCase().includes(e.target.value))
    showProducts(wineFilter)


}

window.addEventListener("keyup", filterSearch)

filterProducts()




saveLocalStorage = () => {
    localStorage.setItem("cart", JSON.stringify(cart))

}
actualizeProducts()

const $form = document.querySelector("#form")
const $mailTo = document.querySelector("#mailTo")
$form.addEventListener("submit", handleSubmit)

function handleSubmit(e) {
    e.preventDefault()
    const form = new FormData(this)
    $mailTo.setAttribute('href', `mailto:me@santigennu5.com?subject=name ${form.get('name')}  correo ${form.get('email')}&body=${form.get('message')}`)
    $mailTo.click()
}