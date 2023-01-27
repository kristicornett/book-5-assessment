import { getPurchase } from "./database.js"
import { entreeChoice } from "./Entrees.js"
import { Sales } from "./Sales.js"
import { Sides } from "./SideDishes.js"
import { Veggies } from "./Vegetables.js"
import { addCustomerOrder } from "./database.js"

document.addEventListener(
    "click", 
    (event) => {
    if (event.target.id === "purchase") {
        addCustomerOrder()
    }
})

export const FoodTruck = () => {
    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>
    <div class="parent">
        <article class="choices">
            <section class="entree_choice">
                <h2>Base Dish</h2>
                ${entreeChoice()}
            </section>
         </article>

         <article class="choices">
            <section class="sidedish_choice">
                <h2>Side dishes</h2>
                ${Sides()}
            </section>
        </article>

        <article class="choices">
            <section class="vegetable_choice">
            <h2>Vegetable</h2>
            ${Veggies()}
        </section>
    </article>
    </div>

        <article>
            <button id="purchase">Purchase Combo</button>
        </article>

        <article class="customerOrders">
            <h2 class="sales">Monthly Sales</h2>
            ${Sales()}
        </article>

    `
}
