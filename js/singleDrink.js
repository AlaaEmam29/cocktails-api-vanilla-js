"use strict"
import displaySingleDrink from './displaySingleDrink.js';
import fetchDrinks from './fetchDrinks.js';
const singleDrink = async ()=>{
    const id = localStorage.getItem("drink")
    if(!id) 
    {
        location.replace("index.html")
    }
    else
{
    const data = await fetchDrinks(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    await displaySingleDrink(data)
}
}
singleDrink()