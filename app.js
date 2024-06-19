// fetch("https://digi-api.com/api/v1/digimon")
// .then(response => console.log(response))
// .catch(error => console.log(error));

async function fetchData(){
    try {
        const digimonName = document.getElementById("digimonName").value.toLowerCase();
        const response = await fetch(`https://digi-api.com/api/v1/digimon/${digimonName}`);
        if(!response.ok){
            throw new Error("couldn't find this digimon");
        }
        const data = await response.json();
    } catch (error) {
        console.error(error)
    }
}
fetchData();