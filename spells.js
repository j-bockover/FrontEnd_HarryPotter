//javascript for the spells tab 
//using the fedeperin API
const urlToFetch = "https://fedeperin-harry-potter-api-en.herokuapp.com/spells";

fetch(urlToFetch)
  .then((res) => res.json())
  .then((data) => {
    // It brings all data at the API and it shows it at the console
    console.log(data);
    console.log(data[0].id) //retrieve first spell information 1 out of 72 spells 
    console.log(data[0].spell);
    console.log(data[0].use);
  })
  .catch((e) => console.log(e));
//now that the spells info is gathered we need to bring it to the spells html page 
//also need to make the cards for each spell stand out 
