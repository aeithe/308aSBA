// const breedSelect = document.getElementById("breedSelect");
// const infoDump = document.getElementById("infoDump");
// const progressBar = document.getElementById("progressBar");
// const getFavouritesBtn = document.getElementById("getFavouritesBtn");
// const API_KEY =
//   "live_cTBlPlitjQXr92cOiyHljrHCUgNRtTVHXbjSTprMCloO2IXWS2tGbPxB6KvYSsbA";

// const url = `https://api.thecatapi.com/v1/breeds`;
// let storedBreeds = [];

// fetch(url, {
//   headers: {
//     "x-api-key": API_KEY,
//   },
// })
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     data = data.filter((img) => img.image?.url != null);

//     storedBreeds = data;

//     for (let i = 0; i < storedBreeds.length; i++) {
//       const breed = storedBreeds[i];
//       let option = document.createElement("option");
//       if (!breed.image) continue;

//       option.value = i;
//       option.innerHTML = `${breed.name}`;
//       breedSelect.appendChild(option);
//     }
//     showBreedImage(0);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// // function showBreedImage(index) {
// //   document.getElementById("breed_image").src = storedBreeds[index].image.url;

// //   document.getElementById("breed_json").textContent =
// //     storedBreeds[index].temperament;

// //   document.getElementById("wiki_link").href = storedBreeds[index].wikipedia_url;
// //   document.getElementById("wiki_link").innerHTML =
// //     storedBreeds[index].wikipedia_url;
// // }

// const url = `digi-api.com/api/v1/digimon/`;
// let storeDigimon = [];

class DigiDex{
    constructor(){
        this._digimon = []
    }
    async fetchDigimon(){
        try{
            const response = await fetch ("digi-api.com/api/v1/digimon/");
            const data = await response.json();
            this._digimon = data.results;
            for(let i = 0; i <this._digimon.length; i++){
                console.log(this._digimon[i].name);
            }
        } catch (error){
            console.error(error);
        }
    }
}

const digi = new DigiDex();
digi.fetchDigimon();


