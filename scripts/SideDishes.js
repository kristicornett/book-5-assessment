import { getSides, setSide } from "./database.js"

const sideDishes = getSides()

document.addEventListener("change", (event) => {
    if (event.target.name === "sideDish") {
       let chooseOption = parseInt(event.target.value)
        console.log(chooseOption)
        setSide(chooseOption)
        for (let sidedish of sideDishes) {
            //if (sidedish.id === chooseOption)
            //window.alert(`You selected the ${sidedish.title} option`)
        }
    }
})

// Requirement: The radio input elements that this component funcion renders must all have a name of "sideDish"
export const Sides = () => {
    let html = "<ul>"

    const listItems = sideDishes.map(dish => {
        
        return `<li>
        <input type="radio" name="sideDish" value="${dish.id}" /> ${dish.title}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

