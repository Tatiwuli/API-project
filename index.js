async function fetchCoffeeData() {
  try {
    const response = await fetch("https://api.sampleapis.com/coffee/hot")
    const data = await response.json()
    console.log(data) // test in the console
  } catch (error) {
    console.error("Error fetching coffee data:", error)
  }
}

fetchCoffeeData()
