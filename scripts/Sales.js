import { getVeggies } from "./database.js"
import { getPurchase } from "./database.js"
import { getEntreePrice, getSidePrice, getVeggiePrice} from './database.js'

/*const buildOrderListItem = (order) => {
    const veggies = getVeggies()


    const total = veggiePrice + entreePrice + sidePrice
    

    return `<li>
        Receipt #${order.id} = ${total.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })}
    </li>`
}*/

export const Sales = () => {
    const sales = getPurchase()
    let html = `<ul>`

    for (let sale of sales){
        let totalPrice = 0
        totalPrice += getEntreePrice(sale.entreeId)
        totalPrice += getSidePrice(sale.sideId)
        totalPrice += getVeggiePrice(sale.veggieId)
        html += `<li>
        Receipt #${sale.id} ${totalPrice.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })}
            </li>`
    }   
    
    html += `</ul>`    
    
    return html
        
    
}

