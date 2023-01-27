import { FoodTruck } from "./FoodTruck.js"
import { entreeChoice } from "./Entrees.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = FoodTruck()
}



document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})

renderAllHTML()