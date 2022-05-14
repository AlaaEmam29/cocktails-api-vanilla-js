"user strict"

import displayDrink from "./displayDrinks.js"
import fetchDrinks from "./fetchDrinks.js"
import searchForm from "./searchForm.js";
import setDrink from "./setDrink.js"

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';
const drinkInput = document.getElementById("drinkInput")
const startApp = async () =>
{
    const data = await fetchDrinks(URL)
    const section = await displayDrink(data)
    if(section)
    {
    setDrink(section)
       
        
       
    }
}
window.addEventListener("DOMContentLoaded",function(){
    startApp()
})
drinkInput.addEventListener("keyup",function(e)
{
    searchForm(e.target.value)
})