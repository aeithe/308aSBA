// const initLoad = async function initialLoad() {
//     try {
//       const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=20&breed_ids=beng&api_key=has_breeds=1");
//       const data = await response.json();
//       this._cat = data.results;
//       for(let i = 0; i <=this._cat.length; i++){
//         console.log(this._cat[i].name);
//       }
//       catch(error){
//         console.error(error);
//       }
//     }
//   };

const fetchData = async() =>{
    try {
        const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=20&breed_ids=beng&api_key=has_breeds=1");
        const {breeds} = await response.json();
        console.log(breeds)
    }
};