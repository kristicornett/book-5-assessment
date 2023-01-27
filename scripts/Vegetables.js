import { getVeggies, setVeggie } from "./database.js"

const veggies = getVeggies()

document.addEventListener(
    "change", 
    (changeEvent) => {
    if (changeEvent.target.name === "vegetable") {
        let chooseOption = changeEvent.target.value
        chooseOption = parseInt(chooseOption)
        setVeggie(chooseOption)
            for (let veggie of veggies) {
                //if (veggie.id === chooseOption)
                //window.alert(`You selected the ${veggie.type} option.`)
            }
    }
})

export const Veggies = () => {

    let html = `<ul>`
    const listItems = veggies.map(vegetable => {
        return `<li>
        <input type="radio" name="vegetable" value=${vegetable.id} /> ${vegetable.type}
        </li>`
        
    })
       html += listItems.join('')
       html += `</ul>`

    return html
}

