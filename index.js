async function fetchCoffeeData() {
  try {
    const response = await fetch("https://api.sampleapis.com/coffee/hot")
    const data = await response.json()
    displayCoffeeData(data)
  } catch (error) {
    console.error("Error fetching hot coffee data:", error)
  }
}

async function fetchIcedCoffeeData() {
  try {
    const response = await fetch("https://api.sampleapis.com/coffee/iced")
    const data = await response.json()
    displayCoffeeData(data)
  } catch (error) {
    console.error("Error fetching iced coffee data:", error)
  }
}

function displayCoffeeData(coffees) {
  const coffeeList = document.getElementById("coffee-list")
  coffeeList.innerHTML = ""

  coffees.forEach((coffee) => {
    const coffeeItem = document.createElement("div")
    coffeeItem.classList.add("coffee-item")

    const title = document.createElement("h2")
    title.textContent = coffee.title
    coffeeItem.appendChild(title)

    const image = document.createElement("img")
    image.src = coffee.image
    image.alt = coffee.title
    image.width = 200
    coffeeItem.appendChild(image)

    const description = document.createElement("p")
    description.textContent = coffee.description
    coffeeItem.appendChild(description)

    const ingredients = document.createElement("p")
    ingredients.innerHTML = `<strong>Ingredients:</strong> ${coffee.ingredients.join(
      ", "
    )}`
    coffeeItem.appendChild(ingredients)

    coffeeList.appendChild(coffeeItem)
  })
}

fetchCoffeeData()

document.getElementById("fetch-iced-coffee").addEventListener("click", () => {
  fetchIcedCoffeeData()
})
