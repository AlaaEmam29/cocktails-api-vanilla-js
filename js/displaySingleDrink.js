import { hideLoading } from "./Loading.js";
import { cocktailsContainer } from "./queryElements.js";

const displaySingleDrink = async ({ drinks }) => {
  hideLoading();
  const drink = drinks[0];
  let container = ''
  const { strDrinkThumb: image, strDrink: name, strInstructions: desc } = drink;
  document.title = name;
  const ingredientsList = [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4,
    drink.strIngredient5
  ];
 const ingredientsContainer = ingredientsList.map((ingredient) => {
     if(!ingredient) return;
    return `
    <li><span class="fa-li"><i class="far fa-check-square"></i></span>${ingredient}</li>

    `;
  }).join(' ');
container += `
<div class="col-lg-6">
<div class="drink-img">
    <img src="${image}" class="w-100 " alt="">
</div>
</div>
<div class="col-lg-6 text-start  py-5">
<div class="drink-info ">
 <h2 class="drink-name">${name}</h2>
<p class="text-muted drink-desc py-2">
${desc}
</p>            
<ul class="fa-ul drink-ingredient" style="--fa-li-width: 3em;">
${ingredientsContainer}
</ul>
<a href="index.html" class="btn btn-primary px-4 text-uppercase allItem py-2 my-3">all cocktails</a>
</div>
</div>
`;
cocktailsContainer.innerHTML = container
};

export default displaySingleDrink;
