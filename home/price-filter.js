// Filtro de preço
const filterPrice = document.getElementById("filter-price")
// const cards = document.getElementsByClassName("col-cards")

filterPrice.addEventListener("change", filterCards)

function filterCards() {
  if(filterPrice.value != "") {
    for(let card of cards) {
      let price = card.querySelector(".product-price").textContent
      let priceClean = price.replace(/R\$|\,00/g, "");

      if (filterPrice.value === '0-1000') {
        if(priceClean >= 0 && priceClean <= 1000) {
          card.style.display = "block"
        } else {
          card.style.display = "none"
        }
        // return price >= 0 && price <= 1000;
      } else if (filterPrice.value === '1001-10000') {
        if(priceClean >= 1001 && priceClean <= 10000) {
          card.style.display = "block"
        } else {
          card.style.display = "none"
        }
        // return price >= 1001 && price <= 10000;
      } else if (filterPrice.value === '10000+') {
        if(priceClean > 10000) {
          card.style.display = "block"
        } else {
          card.style.display = "none"
        }
        // return price > 10000;
      }
    }
  } else {
    for(let card of cards) {
      card.style.display = "block"
    }
  }
}

