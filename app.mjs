import digimonCardFactory from "./digimoncardfactory.js";
import deleteCards from "./deletecards.js";
import apiURL from "./apiURL.js";

let buttn = document.getElementById("button");
let allDigimon;
let container = document.getElementById("container");

async function fetchData(){
     try {
        const response = await fetch(apiURL,{
            method: "GET",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers:{
                "Content-Type": "application/json",
            },
            })
        if(!response.ok){
            throw new Error("couldn't find this digimon");
        }
        const data = await response.json();
        return data
    } catch (error) {
        console.error(error)
    }
}

fetchData().then((digimon) => {
    allDigimon = digimon
})

function findDigimon(digimon){
    for(const [key, value] of Object.entries(allDigimon)){
        
        if(digimon == value.name){
            let foundDigimon =
             {
                name: value.name,
                img: value.img,
                level: value.level
            }
            return foundDigimon
        } 
       

    } return false
}

let digi = document.getElementById("digimonName")

buttn.addEventListener("click", ()=>{
    deleteCards(container);
    let usersDigimon = findDigimon(digi.value)
    if (usersDigimon != false){
        let digimonCard = digimonCardFactory(usersDigimon)
        container.appendChild(digimonCard);
    }else{
        alert("Digimon does not exist");
    }
})

digi.addEventListener("keypress", (event)=>{
    deleteCards(container);
    let usersDigimon = findDigimon(digi.value)
    if(event.key === "Enter"){
    if (usersDigimon != false){
        let digimonCard = digimonCardFactory(usersDigimon)
        container.appendChild(digimonCard);
    }else{
        alert("Digimon does not exist");
    }
}})

