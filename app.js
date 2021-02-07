const inputMeal = document.getElementById('input-meal');
const submitMeal = document.getElementById('submit-meal');
const showResult = document.getElementById('show-item');
const resultMsg = document.getElementById('result-msg')

submitMeal.addEventListener('click', function() {
    const getName = inputMeal.value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${getName}`)
        .then(res => res.json())
        .then(data => {
            showResult.innerHTML = data.meals.map(meal => `
                 <div class="meal">
                 <img src="${meal.strMealThumb}">
                 <h5 class="meal-name">${meal.strMeal}</h5>
                 </div>
                `)

        })
})
showResult.addEventListener('click', function() {

})