document.addEventListener('DOMContentLoaded', () => {
    const recipe = JSON.parse(localStorage.getItem('selectedRecipe'));

    if (recipe) {
        document.getElementById('recipeImage').src = recipe.image;
        document.getElementById('recipeTitle').textContent = recipe.name;
        document.getElementById('recipeIngredients').innerHTML = recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('');
        document.getElementById('recipeInstructions').textContent = recipe.instructions;
    }

    document.getElementById('backBtn').addEventListener('click', () => {
        window.location.href = 'index.html';
    });
});
