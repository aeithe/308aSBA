import digimonCardFactory from "./digimoncardfactory";
let buttn = document.getElementById("button");
let allDigimon;

async function fetchData(){
     try {
        const response = await fetch(`https://digimon-api.vercel.app/api/digimon`,{
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

buttn.addEventListener("click", ()=>{
    let digi = document.getElementById("digimonName").value
    let usersDigimon = findDigimon(digi)
    console.log(usersDigimon)
})


