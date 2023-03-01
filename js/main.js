let cart = []

let container = document.getElementById("container-cards")
let cartContainer = document.getElementById("cart-container")
let counter = document.getElementById("counter")
let totalPrice = document.getElementById("totalPrice")
let button = document.getElementById("button")
let buttons = document.querySelectorAll(".button-value")
let cards = document.querySelectorAll(".card")




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

showProducts(wineList)

function addToCart(item) {


    let wine = wineList.find(wine => wine.id === item.id)
    cart.push(wine)
    localStorage.setItem("agregado", JSON.stringify(cart))




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
                    <button class="delete" id="btn-delete${item.id}"><span class="material-symbols-outlined">
                    delete </span></button> `
            cartContainer.appendChild(div)
            actualizeProducts()
            localStorage.setItem("carrito", JSON.stringify(cart))

            let buttonDelete = document.getElementById(`btn-delete${item.id}`)
            buttonDelete.addEventListener("click", () => {
                let index = cart.indexOf(item)
                cart.splice(index, 1)
                actualizeProducts()
                showCart()

            })

        })
    }


}


function actualizeProducts() {
    counter.innerText = cart.length
    totalPrice.innerText = cart.reduce((acc, el) => acc + el.price, 0)
}

function filterProducts() {

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            buttons.forEach((button) => {
                button.classList.remove("active")


            })
            button.classList.add("active")
            let btn = button.getAttribute("name")
            console.log(btn)




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

// window.onload = () => {
//     filterProducts("all");
// };

