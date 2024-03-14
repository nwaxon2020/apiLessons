
const carMake = document.querySelectorAll("[name = 'carz']");
const searchPercent = document.querySelectorAll(".searchPercent");

const carInput = document.getElementById("carInput");
const carSearchBtn = document.getElementById("btnCar");
let carsInfoDisplay = document.querySelector(".carsss");

const baseModel = document.getElementById("base-model");
const model = document.getElementById("model");
const dateMF = document.getElementById("date-manufactured");
const engine = document.getElementById("engine-cylender");
const gear = document.getElementById("gear");
const drive = document.getElementById("drive");

let carMakeName;

carMake.forEach((car, index) => {

    carMakeName = "";
    let countCarSearch = 0;
    let url = "";

    car.addEventListener("input", () => {

        carsInfoDisplay.style.display = "none";

        localStorage.getItem("answer");
        countCarSearch++;

        localStorage.getItem("answer");

        ////////////////////////////////////////////////////////////////
        carMakeName = car.value;
        url = `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?limit=20&refine=make%3A%22${carMakeName}%22`;

        async function cars() {
            try {
                const response = await fetch(url);
                if (response.ok) {

                    const data = await response.json();
                    console.log(data);

                    carData(data);

                } else {
                    throw Error(response.text());
                }

            } catch (error) {
                console.error(error);
            }

            function carData(data) {
                data.results.forEach(carz => {
                    carInput.addEventListener("input", () => {

                        carsInfoDisplay.style.display = "none";

                        if (carInput.value === carz.model) {

                            baseModel.innerHTML = `Model: <span>${carz.basemodel}</span>`;
                            model.innerHTML = `Model No: <span>${carz.model}</span>`;
                            dateMF.innerHTML = `Year: <span>${carz.year}</span>`;
                            engine.innerHTML = `Cylender: <span>${carz.cylinders}</span>`;
                            gear.innerHTML = `Drive-type: <span>${carz.trany}</span>`;
                            drive.innerHTML = `Wheel-Drive: <span>${carz.drive}</span>`;
                        }

                    })

                });
            }

        }

        cars();

        ////////////////////////////////////////////////////////////////////////
        let ann = searchPercent[index].textContent = `${countCarSearch} search`;
        localStorage.setItem("answer", ann);//Individual Car Search Count and Save the Percentage of the Car make Search

    })

});

carSearchBtn.addEventListener("click", () => {
    carsInfoDisplay.style.animation = "carslide 5s ease-out";
    carsInfoDisplay.style.display = "block";
})




