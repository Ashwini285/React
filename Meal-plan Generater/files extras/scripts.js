document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('mealPlanForm').addEventListener('submit', generateMealPlan);
});

function generateMealPlan() {
    const age = document.getElementById('age').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const gender = document.getElementById('gender').value;
    const activityLevel = document.getElementById('activityLevel').value;
    const numberOfMeals = document.getElementById('numberOfMeals').value;
    const dietPreferences = document.getElementById('dietPreferences').value;
    const healthSpecifications = document.getElementById('healthSpecifications').value;

    // Call the Edamam API to retrieve recipe information
    const appId = '944e91df'; // Replace with your Edamam API app ID
    const appKey = '16c34adda31585b5f0158c556eed3d55'; // Replace with your Edamam API app key
    const apiUrl = `https://api.edamam.com/search?q=${dietPreferences}&app_id=${appId}&app_key=${appKey}&from=0&to=${numberOfMeals}`;

   
function processEdamamData(recipeHits) {
    // Process the Edamam API response to extract relevant data
    return recipeHits.map(hit => ({
        name: hit.recipe.label,
        image: hit.recipe.image,
        ingredients: hit.recipe.ingredientLines,
    }));
}

function displayMealPlan(mealPlanData) {
    // Create a table to display the meal plan
    const table = document.createElement('table');
    table.classList.add('meal-plan-table');

    // Rest of your code for creating the table and displaying the meal plan
    // (I'm continuing from where your code snippet left off)

    // ... (previous code)

    // Append the table to the document body or any other desired location
    document.body.appendChild(table);
}

    // Create table headers for weekdays
    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const headerRow = document.createElement('tr');
    weekdays.forEach(day => {
        const th = document.createElement('th');
        th.textContent = day;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Create rows for each meal
    for (let i = 0; i < mealPlanData.length; i++) {
        const mealRow = document.createElement('tr');

        for (let j = 0; j < weekdays.length; j++) {
            const td = document.createElement('td');

            if (mealPlanData[i + j]) {
                const meal = mealPlanData[i + j];

                // Display meal name, image, and ingredients
                td.innerHTML = `
                    <strong>${meal.name}</strong><br>
                    <img src="${meal.image}" alt="${meal.name}" style="width: 100px; height: 100px;"><br>
                    Ingredients: ${meal.ingredients.join(', ')}
                `;
            }

            mealRow.appendChild(td);
        }

        table.appendChild(mealRow);
    }

    // Append the table to the document
    const mealPlanTable = document.getElementById('mealPlanTable');
    mealPlanTable.innerHTML = '';
    mealPlanTable.appendChild(table);
}
