import { showError, showLoading } from "./Loading.js";

const fetchDrinks = async (url) => {
    showLoading()
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
       showError()
  }
};

export default fetchDrinks;
