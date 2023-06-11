// Consumindo API Fake Store
const apiUrl = "https://diwserver.vps.webdock.cloud/products/?page_items=60&page=100";

fetch(apiUrl)
  .then(response => response.json())
  .then(json => {

    for(i = 0; i < json.products.length; i++) {
      // Selecionando a Row
      const wrapperCards = document.getElementById("wrapper-cards");

      // Criando a col de cada card
      const col = document.createElement("div");
      col.className = "col-lg-4 col-md-6 col-sm-12 col-cards"

      // Link englobando a div - detalhes
      const linkCard = document.createElement("a");
      linkCard.className = "link-card";
      linkCard.href = `../details/details.html?id=${json.products[i].id}`;

      // Div de cada card
      const card = document.createElement("div");
      card.className = "card"

      // Imagem do card
      const image = document.createElement("img");
      image.src = `${json.products[i].image}`;
      image.className = "product-image"
  
      // Título do card
      const title = document.createElement("h2");
      title.innerText = `${json.products[i].title}`
      title.className = "product-title"

      // Categoria do card
      const category = document.createElement("p");
      category.innerText = `${json.products[i].category}`
      category.className = "category-name"
      // category.style.display = "none"

      // Avaliações do card
      const wraperRating = document.createElement("div");
      wraperRating.className = `wraper-rating`;

      const rating = document.createElement("span");
      if(json.products[i].rating.rate >= 0 && json.products[i].rating.rate <= 1.4) {
        rating.innerText = `★☆☆☆☆`
      }

      else if(json.products[i].rating.rate >= 1.5 && json.products[i].rating.rate <= 2.4) {
        rating.innerText = `★★☆☆☆`
      }

      else if(json.products[i].rating.rate >= 2.5 && json.products[i].rating.rate <= 3.4) {
        rating.innerText = `★★★☆☆`
      }

      else if(json.products[i].rating.rate >= 3.5 && json.products[i].rating.rate <= 4.4) {
        rating.innerText = `★★★★☆`
      }
      
      else {
        rating.innerText = `★★★★★`
      }
      rating.className = "rating"

      // Contagem de avaliações
      const count = document.createElement("span");
      count.innerText = `${json.products[i].rating.count}`
      count.className = "count"
  
      const price = document.createElement("p");
      price.innerText = `R$${json.products[i].price},00`
      price.className = "product-price"
  
      wrapperCards.appendChild(col);
      col.appendChild(linkCard);
      linkCard.appendChild(card);
      card.appendChild(image);
      card.appendChild(category);
      card.appendChild(title);
      card.appendChild(wraperRating);
      wraperRating.appendChild(rating);
      wraperRating.appendChild(count);
      card.appendChild(price);
    }

    console.log(json)

    function saveLocalStorage() {
      localStorage.setItem("products", JSON.stringify(json))
      return json;
    }
  
    saveLocalStorage()
  })







// const card = document.getElementById("card");
// const title = document.createElement("p");
// title.innerText = `${products[0].title}`

// function createCard() {
//   const card = document.createElement("div")
//   card.className = "col-4";

//   const link = document.createElement("a")
//   link.href = "details.html"

//   const image = document.createElement("img");
//   image.src = "https://source.unsplash.com/random";
//   image.className = "image-cards"

//   const title = document.createElement("h2");
//   title.innerText = `${products[0].title}`

//   const price = document.createElement("p");
//   price.innerText = "Test"

//   productCards.appendChild(card)
//   card.appendChild(link)
//   link.appendChild(image)
//   link.appendChild(title)
//   link.appendChild(price)
// }

// createCard();







// fetch('https://fakestoreapi.com/products')
//   .then(response => response.json())
//   .then(json => console.log(json))