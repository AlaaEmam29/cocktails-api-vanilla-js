import { cocktailsContainer } from "./queryElements.js";

export const showLoading = () => {
    cocktailsContainer.innerHTML = '<h1 class="py-5 drinkLoad text-uppercase text-center text-dark">loading...</h1>'

  };
  export const showError = () => {
    cocktailsContainer.innerHTML = '<h1 class="py-5 drinkLoad text-uppercase text-center text-dark">there was an error</h1>'

  };
  export const hideLoading = () => {
    cocktailsContainer.innerHTML = ''

  }