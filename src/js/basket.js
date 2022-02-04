const basket = document.querySelector(".nav-basket")
const basketContent = document.querySelector(".basket-content")
const basketContentCenter = document.querySelector(".basket-content-center")
const basketMessageEmpty = document.querySelector(".basket-empty")
const basketCheckout = document.querySelector(".basket-checkout")
const countBasket = document.querySelector(".nav-basket-count")
const countBasketP = countBasket.childNodes[1]
let opened = false
let items = []

export const initBasket = () => {
    // Event click
    basket.addEventListener("click", () => {
        if (opened) basketContent.style.transform = "translate(-50%, -200%)"
        else basketContent.style.transform = "translate(-50%, 0%)"

        opened = !opened
    })
}

const checkDouble = (data) => {
    let checked = true

    items.forEach((item, index) => {
        if (item.id === data.id) {
            items[index] = {
                ...item,
                 quantity: data.quantity
            }

            let itemDom = basketContentCenter.childNodes[index]
            itemDom = itemDom.childNodes[0]
            itemDom = itemDom.childNodes[1]
            itemDom = itemDom.childNodes[1]

            itemDom.innerHTML = `$${item.price} x ${data.quantity} <strong>$${item.price * data.quantity}</strong>`

            checked = false
        }
    })

    return checked
}

const handleDeleteItem = (id) => {
    let index = -1
    items = items.filter((item, _index) => {
        index = _index
        return item.id !== id
    })
    
    if (index > -1) {
        let itemsDom = basketContentCenter.childNodes
        let itemDom = itemsDom[index]
        basketContentCenter.removeChild(itemDom)


        if (itemsDom.length === 0) {
            countBasket.style.visibility = "hidden"
            countBasketP.innerHTML = 0

            basketMessageEmpty.style.display = "block"
            basketCheckout.style.display = "none"
        }
    }
}

export const createItem = (data) => {  
    if (checkDouble(data)) {
        countBasket.style.visibility = "visible"
        countBasketP.innerHTML = items.length + 1
        if (items.length + 1 === 1) {
            basketMessageEmpty.style.display = "none"
            basketCheckout.style.display = "block"
        }

        const newBasketItem = document.createElement("li")
        const newBasketItemBox = document.createElement("div")
        const newBasketItemText = document.createElement("div")
    
        newBasketItem.key = data.id
    
        newBasketItem.classList.add("basket-item")
        newBasketItemBox.classList.add("basket-item-box")
        newBasketItemText.classList.add("basket-item-text")
    
        const newImg = document.createElement("img")
        const newDelete = document.createElement("img")
    
        newImg.src = data.img.src
        newImg.alt = data.img.alt
    
        newDelete.src = "images/icon-delete.svg"
        newDelete.alt = "Delete icon"
        newDelete.classList.add("basket-item-delete")
        newDelete.addEventListener("click", () => handleDeleteItem(data.id))
    
        const newName = document.createElement("p")
        const newPrice = document.createElement("p")
        const newTotal = document.createElement("strong")
    
        newName.innerHTML = `${data.name.substring(0, 15)} ..`
        newPrice.innerHTML = `$${data.price} x ${data.quantity}`
        newTotal.innerHTML = ` $${data.price * data.quantity}`
    
        newPrice.appendChild(newTotal)
    
        newBasketItemText.appendChild(newName)
        newBasketItemText.appendChild(newPrice)
    
        newBasketItemBox.appendChild(newImg)
        newBasketItemBox.appendChild(newBasketItemText)
    
        newBasketItem.appendChild(newBasketItemBox)
        newBasketItem.appendChild(newDelete)
    
        basketContentCenter.appendChild(newBasketItem)

        items.push(data)
    }
}