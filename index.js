const apiKey = "6c15264310d68da150f87264de5613b1";
const d = new Date();
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const weekday = weekdays[d.getDay()];
console.log(weekday);
const dayOfTheMonth = d.getDate();
console.log(dayOfTheMonth);
const month = d.getMonth();
console.log(month);
const incrementMonth = month + 1;
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthName = monthNames[month];
console.log(monthName);


const button = document.getElementById("buttonForSearch");

function handleClick() {
    const city = document.getElementById("searchbarInputField").value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Response was not ok");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            const timeStamp = data.dt * 1000;
            const date = new Date(timeStamp);
            const fullHour = date.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
            });
            console.log(date);
            console.log(fullHour);

            const tempCelcius = Math.round(data.main.temp - 273.15);
            const generalInfo = `
            <h2>${data.name}</h2>
                <h4>${weekday}  ${dayOfTheMonth}  ${monthName} </h4>
                <h5>${fullHour}</h5>
                <img src="pictures/Weather icons/cold-weather.png" alt="" id="weatherImage">
                <h2>${tempCelcius}</h2>
                <h5>${data.weather[0].description}</h5>
             </div>
            `;


            const detailsHTML = `
                <div id="leftSideInfo">
                    <h5>Max Temperature: ${Math.round(data.main.temp_max - 273.15)}°C</h5>
                    <h5> Min Temperature: ${Math.round(data.main.temp_min - 273.15)}°C</h5>
                    <h5>Feels Like: ${Math.round(data.main.feels_like - 273.15)}°C</h5>
                    <h5> Humidity: ${data.main.humidity}%</h5>
                </div>
                <div id="rightSideInfo">
                    <h5>Wind Speed: ${data.wind.speed} m/s </h5>
                    <h5>Wind Direction: ${data.wind.deg}° </h5>
                    <h5>Wind Gust Speed: ${data.wind.gust} m/s </h5>
                 </div>`;
            document.getElementById("showcaseGeneralInfo").innerHTML=generalInfo;
            document.getElementById("containerForDetails").innerHTML = detailsHTML;
        })  
        .catch(error => console.error('Error:', error));
}

button.addEventListener("click",handleClick);
