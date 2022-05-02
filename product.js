
const URL = 'https://ca-cms-claes-folkestad.flywheelsites.com/wp-json/wc/store/products';

const productList = document.querySelector(".shop-items");

async function getProductResults (){
    try {
        const response = await fetch(URL);
        const responseJSON = await response.json()
        const games = responseJSON;
        console.log(games);
        console.log("linje 12 OK")

       for(let i = 0; i < games.length; i++){
        console.log("linje 15 OK")
            productList.innerHTML +=`<div class="productdiv"><br>
            <a href="details.html?id=${games[i].id}">
            <h3>${games[i].name}</h3>
            <div class="cart-item cart-column" >
              <img class="cart-item-image" src="${games[i].images[0].src}" alt="${games[i].images.alt}">
              <br>
              <span class="cart-item-title">${games[i].name}</span></a>
            </div>
            <br>
            <span class="cart-price cart-column">${games[i].prices.price / 100+"0"} NOK</span>
            <div class="cart-quantity cart-column">
            <!--<input type="number" class="cart-quantity-input" value="1" style="width: 40px;">
              <button class="removecartarticlebuttons" 
              style="background-color: red;" type="button">Remove</button>-->
              </div><br></div>`
        }

    }
    catch(error){
        console.log(error);
    }
}

getProductResults();

