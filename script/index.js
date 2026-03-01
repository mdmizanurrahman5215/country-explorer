console.log("index connected");

const inputElem = document.getElementById("input");
const buttonElem = document.getElementById("search-btn");
const countryContainer = document.getElementById("country-container");
const mapContainer = document.getElementById("map-container");
const loading = document.getElementById("loading");
const errorElem = document.getElementById("error");

const fetchData = async (name) => {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    const data = await response.json();
    const country = data[0];
    displayCountryDetails(country);
    console.log(country);
  } catch (error) {
    console.log(error);
  }
};

buttonElem.addEventListener("click", function () {
  const countryName = inputElem.value.trim();
  console.log(countryName);
  fetchData(countryName);
});

const displayCountryDetails = (country) => {
  countryContainer.innerHTML = "";
  const language = Object.values(country.languages).join(",")

  const div = document.createElement("div");
  div.innerHTML = `
       <img src="${country.flags.png}" alt="${country.flags.alt}">
                <h1 class = "text-3xl font-bold">country name : <span>${country.name.common}</span> </h1>
                <p class = "text-3xl font-bold">Capital : <span>${country.capital}</span> </p>
                <p class = "text-3xl font-bold">Population : <span> ${country.population.toLocaleString()}</span> </p>
                <p class = "text-3xl font-bold" id="languages" >Language :<span> ${language}</span></p>
    `;
  countryContainer.appendChild(div);

//   const languageContainer = document.getElementById("languages");
//   let countryLanguages = country.languages;
//   console.log(countryLanguages);
// //   languageContainer.innerHTML = "";
//   for (const language in countryLanguages) {
//     const li = document.createElement("li");
//     li.innerText = language;
//     languageContainer.appendChild(li);
//     console.log(language);
//   }
};
