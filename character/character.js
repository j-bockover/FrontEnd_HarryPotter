// data source
// later I will build a query string using '/characters (mandatory parameter: ?search)' instead of /all after I figure out the search features
// const url = 'https://the-harry-potter-database.herokuapp.com/api/1/characters/all'
const url = 'https://the-harry-potter-database.herokuapp.com/api/1/characters/756' // Albus Dumbledore

const results = document.querySelector('.results')

let characters

let keysfront = ['name', 'birth', 'death', 'species', 'ancestry', 'gender', 'hair_color', 'eye_color']
let keysback = ['wand', 'patronus', 'house', 'associated_groups', 'books_featured_in']

// page load get the characters from the API
fetch(url)
.then(response => {
    // returns the response object
    // the data is in the body of the response
    console.log('Request successful', response)
    return response.json()
})
.then(data => {
    // returns the data in json format
    console.log('Data', data)

    characters = data

    data.forEach((character) => {
        // card method
        // create the card
        let flipcard = document.createElement('div')
        flipcard.setAttribute('class', 'flip-card')
        
        let flipcardinner = document.createElement('div')
        flipcardinner.setAttribute('class', 'flip-card-inner')

        let flipcardfront = document.createElement('div')
        flipcardfront.setAttribute('class', 'flip-card-front')

        let flipcardback = document.createElement('div')
        flipcardback.setAttribute('class', 'flip-card-back')

        flipcard.appendChild(flipcardinner)
        flipcardinner.appendChild(flipcardfront)
        flipcardinner.appendChild(flipcardback)
        
        // add the card to the DOM
        results.appendChild(flipcard)
        
        // fill out front of card
        // add title 
        let title = document.createElement('h2')
        title.innerText = character.name 
        flipcardfront.appendChild(title)

        // create table to contain character information, add it to the card
        let table = document.createElement('table')
        flipcardfront.appendChild(table)

        // add the information to the table
        for (const [key, value] of Object.entries(character)) {
            if (keysfront.includes(key)) {
                let row = table.insertRow()
                let cell = row.insertCell()
                cell.setAttribute('class', 'category')
                cell.innerText = `${key.replace(/_/g, ' ')}:`
                cell = row.insertCell()
                cell.setAttribute('class', 'content')
                cell.innerText = value
            }
        }

        // fill out back of card
        // add title
        title = document.createElement('h2')
        title.innerText = character.name
        flipcardback.appendChild(title)

        // create table to contain character information, add it to the card
        table = document.createElement('table')
        flipcardback.appendChild(table)

        // add the information to the table
        for (const [key, value] of Object.entries(character)) {
            if (keysback.includes(key)) {
                let row = table.insertRow()
                let cell = row.insertCell()
                cell.setAttribute('class', 'category')
                cell.innerText = `${key.replace(/_/g, ' ')}:`
                cell = row.insertCell()
                cell.setAttribute('class', 'content')
                cell.innerText = value
            }
        }
    })

})
.catch(error => {
    console.error('Request failed', error)
})


