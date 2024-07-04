document.getElementById('mealPlanForm').addEventListener('submit', generateMealPlan);

function generateMealPlan(event) {
    event.preventDefault();

    const age = document.getElementById('age').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const gender = document.getElementById('gender').value;
    const activityLevel = document.getElementById('activityLevel').value;
    const numberOfMeals = document.getElementById('numberOfMeals').value;
    const dietPreferences = document.getElementById('dietPreferences').value;
    const healthSpecifications = document.getElementById('healthSpecifications').value;

    let bmr;
    if (gender === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else if (gender === 'female') {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    const calories = Math.round(bmr * activityLevel);
   

    // Edamam API details
    const appId = '944e91df';
    const appKey = '16c34adda31585b5f0158c556eed3d55';

    //API endpoint
    const apiUrl = `https://api.edamam.com/search?q=${dietPreferences}&app_id=${appId}&app_key=${appKey}&from=0&to=${numberOfMeals}`;
    
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => displayMealPlan(data.hits))
    .catch(error => console.error('Error:', error));
}


function displayMealPlan(meals) {
    const mealplanDisplay = document.getElementById('mealplanDisplay');
    mealplanDisplay.innerHTML = '';

    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.innerHTML = `
            <h2>${meal.recipe.label}</h2>
            <img src="${meal.recipe.image}" alt="${meal.recipe.label}" style="width: 100%; max-width: 500px;">
            <a href="${meal.recipe.url}" target="_blank">View Recipe</a>
            <p>${meal.recipe.ingredientLines.join(', ')}</p>`;
        mealplanDisplay.appendChild(mealDiv);
    });
}
