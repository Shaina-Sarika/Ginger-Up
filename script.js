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






//redirecting to the signup page
function redirectToInbox() {
  window.location.href = "http://localhost:3000/inbox.html";
}

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

mongoose.connect('mongodb+srv://admin-shaina:Test123@cluster0.va63jkc.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', () => console.log("Error in Connecting to Database"));
db.once('open', () => console.log("Connected to Database"));

app.post("/sign_up", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phno = req.body.phno;
    const password = req.body.password;

    const data = {
        "name": name,
        "email": email,
        "phno": phno,
        "password": password
    }

    db.collection('users').insertOne(data, (err, collection) => {
        if (err) {
            console.error("Error inserting record:", err);
            return res.status(500).send("Error inserting record");
        }
        console.log("Record Inserted Successfully");

        // Return the "Signup Successful" message directly as a response
        return res.send("<h1>Signup Successful</h1>");
    });
});

app.get("/", (req, res) => {
    return res.redirect('/inbox.html');
});

app.listen(3000, () => {
    console.log("Listening on PORT 3000");
});