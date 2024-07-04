// mealPlanGenerator.js

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('mealPlanForm').addEventListener('submit', generateMealPlan);
});

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

    // Call the Edamam API or perform any other logic to retrieve recipe information
    // For demonstration purposes, let's just display a message
    const mealPlanData = generateDummyMealPlan(numberOfMeals);
    displayMealPlan(mealPlanData);
}

function generateDummyMealPlan(numberOfMeals) {
    // Generate a dummy meal plan data
    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const meals = [];

    for (let i = 0; i < numberOfMeals; i++) {
        const meal = {
            name: `Meal ${i + 1}`,
            image: 'https://via.placeholder.com/150', // Placeholder image URL
            ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3'],
        };

        meals.push(meal);
    }

    // Organize the meal plan by weekdays
    const mealPlanData = {};
    weekdays.forEach((day, index) => {
        mealPlanData[day] = meals.slice(index * numberOfMeals, (index + 1) * numberOfMeals);
    });

    return mealPlanData;
}

function displayMealPlan(mealPlanData) {
    // Create a table to display the meal plan
    const table = document.createElement('table');
    table.classList.add('meal-plan-table');

    // Create table headers for weekdays
    const headerRow = document.createElement('tr');
    Object.keys(mealPlanData).forEach(day => {
        const th = document.createElement('th');
        th.textContent = day;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Create rows for each meal
    const numberOfRows = Math.max(...Object.values(mealPlanData).map(meals => meals.length));
    for (let i = 0; i < numberOfRows; i++) {
        const mealRow = document.createElement('tr');

        Object.values(mealPlanData).forEach(meals => {
            const td = document.createElement('td');

            if (meals[i]) {
                const meal = meals[i];
                // Display meal name, image, and ingredients
                td.innerHTML = `
                    <strong>${meal.name}</strong><br>
                    <img src="${meal.image}" alt="${meal.name}" style="width: 100px; height: 100px;"><br>
                    Ingredients: ${meal.ingredients.join(', ')}
                `;
            }

            mealRow.appendChild(td);
        });

        table.appendChild(mealRow);
    }

    // Append the table to the document
    const mealPlanTable = document.getElementById('mealPlanTable');
    mealPlanTable.innerHTML = '';
    mealPlanTable.appendChild(table);
}
