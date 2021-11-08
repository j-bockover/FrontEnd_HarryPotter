// data source
// later I will build a query string using '/characters (mandatory parameter: ?search)' instead of /all after I figure out the search features
// const url = 'https://the-harry-potter-database.herokuapp.com/api/1/characters/all'
const url = 'https://the-harry-potter-database.herokuapp.com/api/1/characters/756' // Albus Dumbledore

const results = document.querySelector('.results')

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

    data.forEach((character) => {
        // create the character container
        let element = document.createElement('div')
        element.setAttribute('class', 'character col-12 col-md-6')
        results.appendChild(element)

        // create the table to contain the character information
        let table = document.createElement('table')
        element.appendChild(table)
        
        // one row per character
        let mainrow = table.insertRow()

        // first column contains image
        let img_td = document.createElement('td')
        mainrow.appendChild(img_td)

        let figure = document.createElement('figure')
        img_td.appendChild(figure)

        let image = document.createElement('img')
        image.setAttribute('src', 'https://placekitten.com/200/300')
        // #TODO set image height & width
        image.setAttribute('alt', character.name)
        figure.appendChild(image)

        let figcaption = document.createElement('figcaption')
        figcaption.innerText = character.name
        figure.appendChild(figcaption)
        
        // second column contains primary bio data
        let bio_td1 = document.createElement('td')
        mainrow.appendChild(bio_td1)

        // bio data arranged in two columns
        table = document.createElement('table')
        bio_td1.appendChild(table)

        let row = table.insertRow()
        let cell = row.insertCell()
        cell.setAttribute('class', 'fw-bold')
        cell.innerText = "Species"
        cell = row.insertCell()
        cell.innerText = character.species

        row = table.insertRow()
        cell = row.insertCell()
        cell.setAttribute('class', 'fw-bold')
        cell.innerText = "Gender"
        cell = row.insertCell()
        cell.innerText = character.gender

        row = table.insertRow()
        cell = row.insertCell()
        cell.setAttribute('class', 'fw-bold')
        cell.innerText = "Birthday"
        cell = row.insertCell()
        cell.innerText = character.birth

        row = table.insertRow()
        cell = row.insertCell()
        cell.setAttribute('class', 'fw-bold')
        cell.innerText = "Date of death"
        cell = row.insertCell()
        cell.innerText = character.death

        row = table.insertRow()
        cell = row.insertCell()
        cell.setAttribute('class', 'fw-bold')
        cell.innerText = "Hair Color"
        cell = row.insertCell()
        cell.innerText = character.hair_color

        row = table.insertRow()
        cell = row.insertCell()
        cell.setAttribute('class', 'fw-bold')
        cell.innerText = "Eye Color"
        cell = row.insertCell()
        cell.innerText = character.eye_color

        row = table.insertRow()
        cell = row.insertCell()
        cell.setAttribute('class', 'fw-bold')
        cell.innerText = "Ancestry"
        cell = row.insertCell()
        cell.innerText = character.ancestry

        row = table.insertRow()
        cell = row.insertCell()
        cell.setAttribute('class', 'fw-bold')
        cell.innerText = "Hogwarts House"
        cell = row.insertCell()
        cell.innerText = character.house

        row = table.insertRow()
        cell = row.insertCell()
        cell.setAttribute('class', 'fw-bold')
        cell.innerText = "Patronus"
        cell = row.insertCell()
        cell.innerText = character.patronus

        row = table.insertRow()
        cell = row.insertCell()
        cell.setAttribute('class', 'fw-bold')
        cell.innerText = "Wand Description"
        cell = row.insertCell()
        cell.innerText = character.wand
    })

})
.catch(error => {
    console.error('Request failed', error)
})

