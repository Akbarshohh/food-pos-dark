// let genres = [{
//         "id": 1,
//         "name": "Hot dishes"
//     },
//     {
//         "id": 2,
//         "name": "Cold dishes"
//     },
//     {
//         "id": 3,
//         "name": "Soup"
//     },
//     {
//         "id": 4,
//         "name": "Grill"
//     },
//     {
//         "id": 5,
//         "name": "Appetizer"
//     },
//     {
//         "id": 6,
//         "name": "Dessert"
//     }
// ]




// const MenuTab = document.querySelector('.menu-tabs')
// const hot = document.querySelector('.hot')
// const cold = document.querySelector('.cold')
// const soup = document.querySelector('.soup')
// const grill = document.querySelector('.grill')
// const appetizer = document.querySelector('.appetizer')
// const dessert = document.querySelector('.dessert')

// var currentPage = 1;
// var nextPage = 2;
// var prevPage = 3;
// var lastUrl = '';
// var totalPages = 6;

// inp.addEventListener("input", () => {
//     console.log(inp.value);
// })





// async function menu() {
//     let data = await fetch("http://localhost:5000/category/");
//     let parseData = await data.json();
//     render(parseData.result);
//     console.log(parseData);


//     // for (let i of parseData) {
//     //     let li = document.createElement('li');
//     //     li.setAttribute("class", "header-item");
//     //     li.textContent = i.name;
//     //     HeaderList.append(li);

//     //     li.addEventListener("click", () => {
//     //         console.log(i.id);
//     //         count = i.id;
//     //         getFood(count);
//     //     });
//     // }
// }

// menu()

// async function render(arr) {


//     wrapper.innerHTML = null

//     for (let i of arr) {
//         let div = document.createElement("div");
//         div.setAttribute("class", "food-item");

//         div.innerHTML = `

//             <img class="food-img" width="132" height="132"
//             src="http://localhost:5000/${i.images}">
//             <div class="food-box">
//             <h3 class="food-title">${i.name}</h3>
//             <p class="price">${i.price}</p>
//             <span class="food-desk">${i.bowls} bowls avialble</span>
//             </div>

//             `
//         wrapper.append()
//     }
// }


// function getFoodList() {

//     fetch(`http://localhost:5000/category`)
//         .then(response => response.json())
//         .then(data => {
//             let html = "";
//             if (data.foods) {
//                 data.foods.forEach(i => {
//                     html += `
//                     <div class="grid-item">
//                     <img src="http://localhost:5000/${i.images}" alt="" />
//                     <h3>${i.name}</h3>
//                     <p>${i.price}</p>
//                     <h4>${i.bowls}</h4>
//                     </div>
//             `;
//                 });
//             }

//             wrapper.innerHTML = html;
//         });

// }
// inp.addEventListener("input", () => {
//     console.log(inp.value);
// });




// const mealList = document.querySelector('.main-content-grid')
// const input = document.getElementById('inp')


// input.addEventListener("input", () => {
//     const ingredient = input.value;
//     if (ingredient) {
//         const meals = await searchMealsByIngredient(ingredient);
//         displayMeals(meals);
//     }
// });

// mealList.addEventListener("click", async(e) => {
//     const card = e.target.closest('.meal-item');
//     if (card) {
//         const mealId = card.dataset.id;
//         const meal = await getMealDetails(mealId);
//         if (meal) {
//             showMealDetailsPopup(meal);
//         }
//     }
// });



// async function searchMealsByIngredient(ingredient) {
//     try {
//         const response = await fetch(`http://localhost:5000/category`);
//         const data = await response.json();
//         return data.meals;
//     } catch (error) {
//         console.error('Error bo\'lib qoldi :(', error);
//     }
// }


// async function getMealDetails(mealId) {
//     try {
//         const response = await fetch(``)
//     }
// }




let wrapper = document.querySelector('.main-content-grid')
async function getData() {
    let data = await fetch('http://localhost:5000/food/3')
    let parseData = await data.json()

    render(parseData)
}
getData()

function render(arr) {
    for (let i of arr) {
        let card = document.createElement('div')
        card.setAttribute('style', 'width', '200px')
        card.setAttribute('class', 'card')

        card.innerHTML = `
            <div id="ul" class="grid-item">
                <img src="http://localhost:5000/${i.images}" alt="" />
                <li><h3 id="h3">${i.name}</h3></li>
                <p>${i.price}$</p>
                <h4>${i.bowls} Bowls available</h4>
            </div>
        `
        wrapper.append(card)
    }
}




let foods = document.getElementById('foods')
let form = document.getElementById('form')
let search = document.getElementById('input')

search.addEventListener("input", (e) => {
    e.preventDefault()
    foods.innerHTML = null

    let filtered = data.filter((food) => (food.name.toLowerCase().includes(search.value.toLowerCase())))
    render(filtered)
    search.value = ''


})



let contentGrid = document.querySelector('.main-content-grid')
let orderContent = document.querySelector('.order-content')

contentGrid.addEventListener("click", () => {
    // e.preventDefault()
    orderContent.textContent = contentGrid
})