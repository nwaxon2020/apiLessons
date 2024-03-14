
const carMake = document.querySelectorAll("[name = 'carz']");
const searchPercent = document.querySelectorAll(".searchPercent");

let carMakeName;

carMake.forEach((car, index) => {

    carMakeName = "";
    let countCarSearch = localStorage.getItem("answer"); //get the percentage of the Car Make Search
    car.addEventListener("input", () => {

        countCarSearch++; //Individual Car Search Count

        carMakeName = car.value;

        searchPercent[index].textContent = `${countCarSearch} pdate
        search`;
        localStorage.setItem("answer", countCarSearch); //Save the Percentage of the Car make Search
    })

});


const url = `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?limit=20&refine=make%3A%22${carName}%22`;


async function cars() {
    try {
        const response = await fetch(url);
        if (response.ok) {

            const data = await response.text();
            console.log(data);

        } else {
            throw Error(response.text());
        }

    } catch (error) {
        console.error(error);
    }

}

cars();
