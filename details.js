const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const gameID = params.get("id"); 
const singleGameURL = `https://ca-cms-claes-folkestad.flywheelsites.com/wp-json/wc/store/products/${gameID}`;


const gameDetails = document.querySelector(".detailscontainer");

async function getGameDetails(){
    try{
        const response = await fetch(singleGameURL);
        console.log(response)
        const singleGameDetails = await response.json();
        console.log(singleGameDetails);

/*
        const breadCrumb = document.querySelector(".bread-crumb-container")
        if(breadCrumb !== undefined)
    {
        breadCrumb.innerHTML = `
        <div class="bread-crumb-container">
        <ol class="bread-crumb">
        <li>
        <ol class="bread-crumb"><li><a href="index.html">Home</a></li><li><a href="all-games.html">Games</a></li><li><p class="bread-crumb-container">${singleGameDetails.name}</p></a></li>
        <!--</li><li><a href="productpage.html">Games</a></li><li><a href="#"> G A M E  N A M E -->
        </li>
        </ol>
        </div>`
    } else { 
        console.log("hello banana");
    }
*/

        gameDetails.innerHTML =

        `<div class="product-container">
                <div class="imagecontainer">
                  <img src="${singleGameDetails.images[0].src}" alt="${singleGameDetails.alt}" style="width: 70%"/>
                </div>
                <div class="description">
                    <h2>${singleGameDetails.name}</h2>
                    <h4 style="text-align: left;">${singleGameDetails.description}</h4>
                    <br><br>
                    <div>
                    <p>${singleGameDetails.prices.price / 100 + "0"+" NOK"}</p>
                    <a href="cart.html">
                    <button class="button button-sml shop-item-button">
                        <h3>Add to cart </h3>
                        <img src="./images/icons/iconcart.svg" alt="" />
                    </button></div>
                </div>
            </div>
        `
    } catch (error) {
        console.log(error , "details.js er linket, function gamedetails har kjørt");
    }
}
getGameDetails();