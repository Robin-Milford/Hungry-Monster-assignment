// getting all id from html as a global variable

const inputMeal = document.getElementById('input-meal');
const submitMeal = document.getElementById('submit-meal');
const showResult = document.getElementById('show-item');
const errorMsg = document.getElementById('error-msg');
const randomMeal = document.getElementById('random-meal');


// function for search button

submitMeal.addEventListener('click', function() {
    const getName = inputMeal.value;
    //cheak the input field is blank or not
    if (getName.length == 0) {
        alert('Please enter a food name or first letter of your favorite desert😊😊');
    } else {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${getName}`)
            .then(res => res.json())
            .then(data => {
                errorMsg.innerHTML = `<h3 class="search-result">Search for ${getName} is: </h3>`
                    //cheak that,the api return something ,if return nothing then show a error message
                if (data.meals === null) {
                    errorMsg.innerHTML = `
                    <h3 class="error-msg">No food found for: ${getName}</h3>`
                    showResult.innerHTML = "";
                    randomMeal.innerHTML = " ";
                } else {
                    showResult.innerHTML = data.meals.map(meal => `
                 <div class="meal" onclick="displayMealInfo('${meal.idMeal}')">
                 <a href="#random-meal">
                 <img src="${meal.strMealThumb}">
                 </a>
                 <h5 class="meal-name">${meal.strMeal}</h5>
                 </div>
                `)

                }
            })

    }
})


// function for random meal when user clicked on an item
function displayMealInfo(id) {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => res.json())
        .then(data => {
            randomMeal.innerHTML = data.meals.map(meal => `
            <div class=random-details>
            <img src="${meal.strMealThumb}">
            <div class=ingredients-details>
            <h1>${meal.strMeal}</h1>
            <h4>Ingredients:</h4>
            <p>${meal.strIngredient1}</p>
            <p>${meal.strIngredient2}</p>
            <p>${meal.strIngredient3}</p>
            <p>${meal.strIngredient4}</p>
            <p>${meal.strIngredient5}</p>
            <p>${meal.strIngredient6}</p>
            <p>${meal.strIngredient7}</p>
            <p>${meal.strIngredient8}</p>
            <p>${meal.strIngredient9}</p>
            <p>${meal.strIngredient10}</p>
            <p>${meal.strIngredient11}</p>
            <p>${meal.strIngredient12}</p>
            <p>${meal.strIngredient13}</p>
            <p>${meal.strIngredient14}</p>
            <p>${meal.strIngredient15}</p>
            </div>
            </div>
            `)
        })
}