import { cocktailsContainer } from "./queryElements.js";
import { hideLoading } from './Loading.js';

const displayDrink =async ({drinks})=>
{
        if (!drinks) {
                hideLoading();
                cocktailsContainer.innerHTML = '<h2 class="text-center text-capitalize py-3">sorry, no drinks matched your search</h2>';
                return;
              }

            const drinksItems = drinks.map((drink)=>
            {
                const { idDrink: id, strDrink: name, strDrinkThumb: image ,strAlcoholic:category} = drink;
                return  `
                <a href="drink.html" class="col-lg-6 col-xl-4 cocktail mb-5 ">
                <div class="cocktail-body" data-id="${id}">
                <img src="${image}"  alt="${category}">
                <h3>${name}</h3>      
                </div>
                </a>
                `
                }).join('')
                cocktailsContainer.innerHTML = drinksItems;

                 return cocktailsContainer;
        
        }

   
    
export default displayDrink