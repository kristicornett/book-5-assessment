import { getEntrees, setEntree } from "./database.js"

const entrees = getEntrees()

document.addEventListener(
    'change',
    (changeEvent) => {
        if (changeEvent.target.name === 'entree') {
            let chooseOption = changeEvent.target.value
            chooseOption = parseInt(chooseOption)
            console.log(chooseOption)
            setEntree(chooseOption)
            for (let entree of entrees) {
                //if (entree.id === chooseOption)
                //window.alert(`You selected the ${entree.name} option`)
            }
        }
    }
)

// Requirement: The radio input elements that this component funcion renders must all have a name of "entree"
export const entreeChoice = () => {
let html = `<ul>`


const listItems = entrees.map(entree => {
    return `<li>
        <input type="radio" name="entree" value="${entree.id}" /> ${entree.name}
    </li>`
})

html += listItems.join("")
html += "</ul>"

return html
}

/*export const entreeChoice = () => {
    let html =  `<input type="radio" name="entree" value=${entree.id"}`
}*/