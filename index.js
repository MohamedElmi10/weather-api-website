const apiKey = "6c15264310d68da150f87264de5613b1"
const d = new Date();
const weekdays = ["sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const weekday = weekdays[d.getDay()]
console.log(weekday)
const dayOfTheMonth = d.getDate()
console.log(dayOfTheMonth)
const month = d.getMonth()
console.log(month)
const incrementMonth = month + 1
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthName = monthNames[month]
console.log(monthName)

const button = document.getElementById("buttonForSearch")

function handleClick() {
    const city = document.getElementById("searchbarInputField").value
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Response was not ok")
            }
            return response.json();
        })
        .then(data => {
            console.log(data)
            document.getElementById("showcaseGeneralInfo").innerHTML = `
            <h2>${data.name}</h2>
                <h4>${weekday}  ${dayOfTheMonth}  ${monthName} </h4>
                <h5>09:00</h5>
                <img src="pictures/Weather icons/cold-weather.png" alt="" id="weatherImage">
                <h2>-11</h2>
                <h5>Light snow</h5>
            
            `
        })
        .catch(error => {
            console.error("there was a problem with the fetch operation", error)
        })

}

button.addEventListener("click", handleClick)