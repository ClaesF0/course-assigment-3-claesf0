
const URL = 'https://ca-cms-claes-folkestad.flywheelsites.com/wp-json/wc/store/products';
const corsUrl = "https://noroffcors.herokuapp.com/" + URL;

const productList = document.querySelector(".shop-items");

async function getProductResults (){
    try {
        const response = await fetch(corsUrl);
        const responseJSON = await response.json()
        const games = responseJSON;
       for(let i = 0; i < games.length; i++){
            productList.innerHTML +=`
            <div class="productdiv">
                <br>
                <a href="details.html?id=${games[i].id}">
                    <h3>${games[i].name}</h3>
                    <div class="cart-item cart-column">
                        <img class="cart-item-image" src="${games[i].images[0].src}" alt="${games[i].images.alt}">
                        <br>
                        <span class="cart-item-title">${games[i].name}</span>
                    </div>
                </a>
                <br>
                <span class="cart-price cart-column">${games[i].prices.price / 100+"0"} NOK</span>
                <div class="cart-quantity cart-column"></div>
                <br>
            </div>`
        }
    }
    catch(error){
        //TODO
        // is to create an empty error paragraph <p> and give it a class of error and then if you have an error then you innerHTML your error
    }
}

getProductResults();

