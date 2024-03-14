const weatherCard = document.querySelector(".card");
const search = document.querySelector('[type="submit"]');
const input = document.querySelector("input");

const cityName = document.querySelector(".cityName");
const deg = document.querySelector(".deg");
const humidity = document.querySelector(".humidity");
const desc = document.querySelector(".decs");
const emoji = document.querySelector(".emoji");
const error = document.querySelector(".error");

weatherCard.style.display = "none";

input.addEventListener("input", () => {

    weatherCard.style.animation = "slideout 4s ease";

    // To target one animation use the parameter "event"... else to target all animations use no parameter.
    weatherCard.addEventListener("animationend", (event) => {

        if (event.animationName === "slideout") {
            weatherCard.style.display = "none";
        }

    });

    let city = input.value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8ff88ca07a7754595cce502a141a604f&units=metric`;

    async function weather() {
        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                enteredData(data);
            } else {
                throw Error(response.text)
            }

        } catch (error) {
            console.log(`An Error Occured: ${error}`);
        }
    }

    function enteredData(data) {
        const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        cityName.textContent = `${data.name}`;
        deg.innerHTML = `${data.main.temp} &deg;C`;
        desc.innerHTML = `Condition: ${data.weather[0].description}`
        humidity.innerHTML = `${data.main.humidity}% <span style="color: rgb(59, 53, 38); font-size: 0.8rem;">humidity</span>`;
        emoji.setAttribute("src", iconsrc);
        emoji.setAttribute("alt", `${data.weather[0].description}`);
        emoji.style.width = "8rem";
    }
    weather();

})

search.addEventListener("click", () => {
    weatherCard.style.animation = "slide 4s ease-out ";
    weatherCard.style.display = "block";
})


// const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=8ff88ca07a7754595cce502a141a604f";

