const search = () =>  {
    const searchValue = document.getElementById("recipes-search").value.toLowerCase();
    const cardsContainer = document.getElementById("cards-container");
    const productCards = document.querySelectorAll(".product-card");
    const title = document.querySelectorAll(".title");

    for(let i =0; i<title.length; i++) {
        let match = productCards[i].querySelector(".title");

        if(match) {
            let textValue = match.textContent || match.innerHTML;

            if(textValue.toLowerCase().indexOf(searchValue) > -1) {
                productCards[i].style.display = "";
            }
            else {
                productCards[i].style.display = "none";
            }
            
        }
    }
    console.log("vamshi");
}

const