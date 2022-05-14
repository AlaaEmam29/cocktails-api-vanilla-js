
import displayDrink from './displayDrinks.js';
import fetchDrinks from './fetchDrinks.js';
import { hideLoading } from './Loading.js';
const searchForm = async (value) => {

const data = await fetchDrinks(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`);
await displayDrink(data)

}
export default searchForm