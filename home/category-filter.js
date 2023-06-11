// Consumindo API Fake Store - Categorias
const apiUrlCategories = "https://diwserver.vps.webdock.cloud/products/categories";

fetch(apiUrlCategories)
  .then(response => response.json())
  .then(json => {

  json.forEach(element => {
    const option = document.createElement("option")
    option.value = `${element}`
    option.textContent = `${element}`
    filterSelect.appendChild(option)
  });
})

const filterSelect = document.getElementById("filter-select")

// const cards = document.getElementsByClassName("col-cards")
filterSelect.addEventListener("change", filterCards)

// const optionText = filterSelect.querySelectorAll("option")
// console.log(optionText)

function filterCards() {
  if(filterSelect.value != "") {
    for(let card of cards) {
      let category = card.querySelector(".category-name").textContent
      if(filterSelect.value.includes(category)) {
        card.style.display = "block"
      } else {
        card.style.display = "none"
      }
    }
  } else {
    for(let card of cards) {
      card.style.display = "block"
    }
  }
}