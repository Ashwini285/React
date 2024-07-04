document.addEventListener('DOMContentLoaded', function () {
    // Add event listener to the form
    document.getElementById('mealPlanForm').addEventListener('submit', function (event) {
        event.preventDefault();
        generateMealPlan();
    });
});

function generateMealPlan() {
    // Get form data (age, weight, etc.)
    const age = document.getElementById('age').value;
    const weight = document.getElementById('weight').value;

    // Mock data (replace this with actual API logic)
    const mockData = [
        [
            { name: 'Breakfast', image: 'image/bg1.jpg', ingredients: ['Eggs', 'Toast'] },
            { name: 'Lunch', image: 'https://via.placeholder.com/100', ingredients: ['Salad', 'Chicken'] },
            { name: 'Dinner', image: 'https://via.placeholder.com/100', ingredients: ['Pasta', 'Sauce'] }
        ],
        // Add more rows for different days
    ];

    const mealPlanData = processMealPlanData(mockData);
    displayMealPlan(mealPlanData);
}

function processMealPlanData(data) {
    // Process data as needed
    return data;
}

function displayMealPlan(mealPlanData) {
    const mealPlanTable = document.getElementById('mealPlanTable');
    mealPlanTable.innerHTML = ''; // Clear previous content

    // Create a table
    const table = document.createElement('table');

    // Create header row with weekdays
    const headerRow = document.createElement('tr');
    ['Breakfast', 'Lunch', 'Dinner'].forEach(meal => {
        const th = document.createElement('th');
        th.textContent = meal;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Create rows with meal data
    for (const dayMeal of mealPlanData) {
        const row = document.createElement('tr');

        // Create cells for each day
        dayMeal.forEach(meal => {
            const cell = document.createElement('td');

            // Create content for each cell
            const mealName = meal.name || 'No Meal';
            const mealImage = meal.image || 'https://via.placeholder.com/100';
            const mealIngredients = meal.ingredients || [];

            cell.innerHTML = `
                <strong>${mealName}</strong><br>
                <img src="${mealImage}" alt="${mealName}" style="width: 100px; height: 100px;"><br>
                Ingredients: ${mealIngredients.join(', ')}
            `;

            row.appendChild(cell);
        });

        table.appendChild(row);
    }

    // Append the table to the container
    mealPlanTable.appendChild(table);
}
