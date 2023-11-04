const recipeContainer = document.getElementById("recipeContainer");

const jsonData = [
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
]

const search = () => {
    const searchValue = document.getElementById("recipes-search").value.toLowerCase();
    const cardsContainer = document.getElementById("cards-container");
    const productCards = document.querySelectorAll(".product-card");
    const title = document.querySelectorAll(".title");

    for (let i = 0; i < title.length; i++) {
        let match = productCards[i].querySelector(".title");

        if (match) {
            let textValue = match.textContent || match.innerHTML;

            if (textValue.toLowerCase().indexOf(searchValue) > -1) {
                productCards[i].style.display = "";
            }
            else {
                productCards[i].style.display = "none";
            }

        }
    }
}



function createRecipeCard(recipe) {
    const card = document.createElement("div");
    card.classList.add("product-card"); 

    const image = document.createElement("img");
    image.src = recipe.imageSrc; 
    card.appendChild(image);

    const category = document.createElement("p");
    category.id = "category"; 
    category.innerText = recipe.type; 
    card.appendChild(category);

    const titleRating = document.createElement("div");
    titleRating.classList.add("title-rating"); 

    const title = document.createElement("p");
    title.classList.add("title"); 
    title.innerText = recipe.name; 
    titleRating.appendChild(title);

    const rating = document.createElement("div");
    const starImage = document.createElement("img");
    starImage.src = "./images/star.svg"; 
    const ratingValue = document.createElement("span");
    ratingValue.innerText = recipe.rating; 

    rating.appendChild(starImage);
    rating.appendChild(ratingValue);
    titleRating.appendChild(rating);

    card.appendChild(titleRating);

    const timeLikes = document.createElement("div");
    timeLikes.classList.add("time-likes"); 

    const time = document.createElement("p");
    time.classList.add("time"); 
    time.innerText = recipe.time; 
    timeLikes.appendChild(time);

    const likeButton = document.createElement("button");
    const likeImage = document.createElement("img");

    likeButton.appendChild(likeImage);

    
    likeImage.src = recipe.isLiked ? "./images/like.svg" : "./images/greylike.svg";

    likeImage.addEventListener("click", () => {
        
        recipe.isLiked = !recipe.isLiked;

        
        likeImage.src = recipe.isLiked ? "./images/like.svg" : "./images/greylike.svg";
    });

    const commentsImage = document.createElement("img");
    commentsImage.src = "./images/comments.svg"; 

    timeLikes.appendChild(likeImage);
    timeLikes.appendChild(commentsImage);

    card.appendChild(timeLikes);

    recipeContainer.appendChild(card); 
};

function displayAllRecipes() {
    recipeContainer.innerHTML = '';
    jsonData.forEach(createRecipeCard);
    console.log("displayall recipes");
}


function onClickAllRecipes() {
    location.reload();
}

function filterRecipes(category) {
    console.log("fileter");
    recipeContainer.innerHTML = '';
    jsonData.filter((recipe) => {
        if (category === "veg" && recipe.type === "veg") {
            createRecipeCard(recipe);
        } else if (category === "non-veg" && recipe.type === "non-veg") {
            createRecipeCard(recipe);
        }
    });
}

function filterRating(condition) {
    recipeContainer.innerHTML = '';
    jsonData.filter((recipe) => {
        if (condition === "above" && recipe.rating > 4.5) {
            createRecipeCard(recipe);
        } else if (condition === "below" && recipe.rating < 4) {
            createRecipeCard(recipe);
        }
    });
}

displayAllRecipes();




























