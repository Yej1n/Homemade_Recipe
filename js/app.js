// 레시피 데이터
const recipes = [
    {
        name: "비빔밥",
        image: "src/비빔밥.png",
        ingredients: ["밥", "나물", "고추장", "참기름", "계란", "소고기"],
        instructions: "1. 밥을 그릇에 담습니다. 2. 나물과 고추장을 넣습니다. 3. 계란 후라이를 올립니다. 4. 참기름을 뿌리고 비빕니다."
    },
    {
        name: "불고기",
        image: "src/불고기.png",
        ingredients: ["소고기", "간장", "설탕", "다진 마늘", "양파", "당근"],
        instructions: "1. 소고기를 얇게 썹니다. 2. 간장, 설탕, 다진 마늘을 섞어 양념장을 만듭니다. 3. 소고기를 양념장에 재웁니다. 4. 양파와 당근을 넣고 볶습니다."
    },
    {
        name: "된장찌개",
        image: "src/된장찌개.png",
        ingredients: ["된장", "두부", "호박", "양파", "청양고추", "감자"],
        instructions: "1. 냄비에 물을 끓입니다. 2. 된장을 풀어줍니다. 3. 감자와 호박을 넣습니다. 4. 두부와 양파를 추가합니다. 5. 청양고추를 넣고 끓입니다."
    },
    {
        name: "김치찌개",
        image: "src/김치찌개.png",
        ingredients: ["김치", "돼지고기", "두부", "양파", "고춧가루", "대파"],
        instructions: "1. 냄비에 돼지고기를 볶습니다. 2. 김치를 넣고 볶습니다. 3. 물을 붓고 끓입니다. 4. 두부와 양파를 넣습니다. 5. 고춧가루와 대파를 넣고 끓입니다."
    },
    {
        name: "떡볶이",
        image: "src/떡볶이.png",
        ingredients: ["떡", "고추장", "설탕", "어묵", "양배추", "대파"],
        instructions: "1. 냄비에 물을 끓입니다. 2. 떡과 어묵을 넣습니다. 3. 고추장과 설탕을 넣고 끓입니다. 4. 양배추와 대파를 추가합니다."
    },
    {
        name: "잡채",
        image: "src/잡채.png",
        ingredients: ["당면", "소고기", "시금치", "당근", "양파", "간장"],
        instructions: "1. 당면을 삶습니다. 2. 소고기를 볶습니다. 3. 시금치와 당근을 볶습니다. 4. 양파를 추가합니다. 5. 모든 재료를 섞어 간장으로 양념합니다."
    },
    {
        name: "된장국",
        image: "src/된장국.png",
        ingredients: ["된장", "두부", "미역", "파", "마늘", "소금"],
        instructions: "1. 냄비에 물을 끓입니다. 2. 된장을 풀어줍니다. 3. 두부와 미역을 넣습니다. 4. 파와 마늘을 추가합니다. 5. 소금으로 간을 맞춥니다."
    },
    {
        name: "김밥",
        image: "src/김밥.png",
        ingredients: ["김", "밥", "단무지", "오이", "당근", "계란", "어묵"],
        instructions: "1. 밥에 소금을 넣고 섞습니다. 2. 김에 밥을 얇게 펴줍니다. 3. 단무지, 오이, 당근, 계란, 어묵을 올립니다. 4. 김을 말아줍니다."
    },
    {
        name: "육개장",
        image: "src/육개장.jpg",
        ingredients: ["고사리", "숙주", "쇠고기", "대파", "산초가루", "고추가루"],
        instructions: "1. 냄비에 쇠고기를 볶습니다. 2. 다른 재료들을 모두 넣고 끓입니다. 3. 대파를 넣고 끓입니다."
    }
];

// DOM 요소 가져오기
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('search');
const recipeContainer = document.getElementById('recipeContainer');

// 검색 버튼 클릭 이벤트
searchBtn.addEventListener('click', () => {
    const query = searchInput.value.toLowerCase();
    const results = recipes.filter(recipe => recipe.name.toLowerCase().includes(query));
    displayRecipes(results);
});

// 레시피 표시 함수
function displayRecipes(recipes) {
    recipeContainer.innerHTML = ''; // 기존 내용 지우기
    if (recipes.length === 0) {
        recipeContainer.innerHTML = '<p>레시피를 찾을 수 없습니다</p>';
        return;
    }

    recipes.forEach(recipe => {
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe');
        recipeDiv.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}">
            <h3>${recipe.name}</h3>
        `;
        recipeDiv.addEventListener('click', () => {
            localStorage.setItem('selectedRecipe', JSON.stringify(recipe));
            window.location.href = 'recipe.html';
        });
        recipeContainer.appendChild(recipeDiv);
    });
}

// 초기 모든 레시피 표시
displayRecipes(recipes);