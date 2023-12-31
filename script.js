//start of mealdb
const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const mealDetailsContent = document.querySelector('.meal-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');

// event listeners
searchBtn.addEventListener('click', getMealList);
mealList.addEventListener('click', getMealRecipe);
recipeCloseBtn.addEventListener('click', () => {
    mealDetailsContent.parentElement.classList.remove('showRecipe');
});

// get meal list that matches with the search input
function getMealList() {
    let searchInputTxt = document.getElementById('search-input').value.trim();
    const apiPaths = [
      `filter.php?i=${searchInputTxt}`,
      `search.php?s=${searchInputTxt}`,
      `search.php?f=${searchInputTxt.charAt(0)}`,
      `filter.php?c=${searchInputTxt}`,
      `filter.php?a=${searchInputTxt}`
    ];
    const requests = apiPaths.map(apiPath =>
      fetch(`https://www.themealdb.com/api/json/v1/1/${apiPath}`)
        .then(response => response.json())
    );
    Promise.all(requests)
      .then(responses => {
        let html = "";
        let mealsFound = false;
  
        responses.forEach(data => {
          if (data.meals) {
            mealsFound = true;
            data.meals.forEach(meal => {
              html += `
                <div class="meal-item" data-id="${meal.idMeal}">
                  <div class="meal-img">
                    <img src="${meal.strMealThumb}" alt="food">
                  </div>
                  <div class="meal-name">
                    <h3>${meal.strMeal}</h3>
                    <a href="#" class="recipe-btn">Get Recipe</a>
                  </div>
                </div>
              `;
            });
          }
        });
        if (mealsFound) {
          mealList.classList.remove('notFound');
        } else {
          html = "Sorry, we didn't find any meal!";
          mealList.classList.add('notFound');
        }
        mealList.innerHTML = html;
      });
  }
  


// get recipe of the meal
function getMealRecipe(e){
    e.preventDefault();
    if(e.target.classList.contains('recipe-btn')){
        let mealItem = e.target.parentElement.parentElement;
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
        .then(response => response.json())
        .then(data => mealRecipeModal(data.meals));
    }
}
// create a modal
function mealRecipeModal(meal){
    console.log(meal);
    meal = meal[0];
    let html = `
        <h2 class = "recipe-title">${meal.strMeal}</h2>
        <p class = "recipe-category">${meal.strCategory}</p>
        <div class = "recipe-instruct">
            <h3>Instructions:</h3>
            <p>${meal.strInstructions}</p>
        </div>
        <div class = "recipe-meal-img">
            <img src = "${meal.strMealThumb}" alt = "">
        </div>
        <div class = "recipe-link">
            <a href = "${meal.strYoutube}" target = "_blank">Watch Video</a>
        </div>
    `;
    mealDetailsContent.innerHTML = html;
    mealDetailsContent.parentElement.classList.add('showRecipe');
}
// end of mealdbapi








