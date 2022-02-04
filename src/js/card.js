import { createItem } from "./basket"

const btnCheckout = document.querySelector(".section-content-checkout")
const btnPlus = document.querySelector(".section-plus")
const btnMinus = document.querySelector(".section-minus")
const inputCount = document.querySelector(".section-content-count-input")

export const initCard = () => {
    btnCheckout.addEventListener("click", () => {
        const value = parseInt(inputCount.value)

        if (value > 0) {
            createItem({
                id: 46,
                name: "Fall Limited Edition Sneakers",
                img: {
                    src: "images/image-product-1-thumbnail.jpg",
                    alt: "Fall Limited Edition Sneakers"
                },
                price: 125,
                quantity: value
            })
        }
    })

    btnPlus.addEventListener("click", () => {
        const value = parseInt(inputCount.value)
        inputCount.setAttribute("value", value + 1)
    })

    btnMinus.addEventListener("click", () => {
        const value = parseInt(inputCount.value)
        if (value > 0) inputCount.setAttribute("value", value - 1)
    })
}