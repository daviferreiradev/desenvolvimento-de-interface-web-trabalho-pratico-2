// Selecionando o ID na URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

// Consumindo API Fake Store
const apiUrl = `https://diwserver.vps.webdock.cloud/products/${productId}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(json => {
    console.log(json)

    // Coluna de informações da esquerda
    const colImage = document.getElementById("col-image")

    const category = document.createElement("p");
    category.innerHTML = `Início / Detalhes / <b>${json.category}</b>`
    category.className = "details-category"

    const image = document.createElement("img");
    image.src = `${json.image}`
    image.className = "details-image"
  
    colImage.appendChild(category)
    colImage.appendChild(image)
    
  
    // Coluna de informações da direita
    const colInfos = document.getElementById("col-infos")
  
    const title = document.createElement("h2");
    title.innerText = `${json.title}`
    title.className = "details-title"

    // Avaliações do card
    const rating = document.createElement("span");
    rating.className = "rating"
    if(json.rating.rate >= 0 && json.rating.rate <= 1.4) {
      rating.innerText = `★☆☆☆☆`
    }

    else if(json.rating.rate >= 1.5 && json.rating.rate <= 2.4) {
      rating.innerText = `★★☆☆☆`
    }

    else if(json.rating.rate >= 2.5 && json.rating.rate <= 3.4) {
      rating.innerText = `★★★☆☆`
    }

    else if(json.rating.rate >= 3.5 && json.rating.rate <= 4.4) {
      rating.innerText = `★★★★☆`
    }
    
    else {
      rating.innerText = `★★★★★`
    }
  
    const price = document.createElement("p");
    price.innerText = `R$${json.price},00`
    price.className = "details-price"


    const button = document.createElement("button");
    button.textContent = `Comprar agora`
    button.className = "purchase-button"
  
    const description = document.createElement("p");
    description.innerHTML = `${json.description}`
    description.className = "details-description"
  
    colInfos.appendChild(title)
    colInfos.appendChild(rating)
    colInfos.appendChild(price)
    colInfos.appendChild(button)
    colInfos.appendChild(description)
  })