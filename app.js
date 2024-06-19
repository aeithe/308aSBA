// fetch("https://digi-api.com/api/v1/digimon")
// .then(response => console.log(response))
// .catch(error => console.log(error));
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
    //console.log(digimon)
    allDigimon = digimon
})

// console.log(allDigimon[0]);
buttn.addEventListener("click", ()=>{
    let digi = document.getElementById("digimonName").value
    // console.log(allDigimon);
        for(const [key, value] of Object.entries(allDigimon)){
            console.log(value.name)
            console.log(digi)
            if(digi == value.name){
                console.log(value.img)
            } else{
                console.log("This Digimon was not found")
            }

        }
    
    
})

