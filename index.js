const apiKey = "6c15264310d68da150f87264de5613b1"
const city = document.getElementById("searchbarInputField").value
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=stockholm&appid=${apiKey}`

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error("Response was not ok")
        }
        return response.json();
    })
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.error("there was a problem with the fetch operation", error)
    })