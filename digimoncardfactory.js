export default function digimonCardFactory(digimon){
    console.log(digimon)
    let card = document.createElement("div");
    let img = document.createElement("img");
    let cardBody = document.createElement("div");

    let digimonName = document.createElement("h1");
    let digiLevel = document.createElement("p");

    card.classList = "card";
    cardBody.classList = "card-body";
    digimonName.classList = "card-title";
    digiLevel.classList = "card-text";

    digimonName.innerHTML = digimon.name;
    digiLevel.innerHTML = digimon.level;
    img.src = digimon.img; 

    cardBody.appendChild(digimonName);
    cardBody.appendChild(digiLevel);

    card.appendChild(img);
    card.appendChild(cardBody);

    return card
}
