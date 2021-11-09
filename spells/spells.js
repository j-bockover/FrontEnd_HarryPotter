//javascript for the spells tab 
//using the fedeperin API


const url = "https://fedeperin-harry-potter-api-en.herokuapp.com/spells";

const app = document.querySelector('#spells');
app.style.paddingLeft = 0;

const addSpellToDOM = (item) => {
 console.log(item);
 let element = document.createElement('div');
 let id = document.createElement('h4');
 let spell = document.createElement('p');
 let use = document.createElement("p");


 element.style.display = 'flex';
 element.style.flexDirection = 'column';
 element.style.alignItems = 'center';
 element.style.marginTop = '20px';

 id.textContent = item.name;
 spell.textContent = item.spell;
 use.textContent = item.use;

 element.append(id);
 element.append(spell);
 element.append(use);

 app.append(element);
}


const fetchAllSpells = (url) => {
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    // It brings all data at the API and it shows it at the console
    console.log(data);
    console.log(data[0].id) //retrieve first spell information 1 out of 72 spells 
    console.log(data[0].spell);
    console.log(data[0].use);
    addSpellToDOM(data)
  })
  .catch((error) => console.log(error));
//now that the spells info is gathered we need to bring it to the spells html page 
//also need to make the cards for each spell stand out 
};
fetchAllSpells(url);
