

const fetchData = require('../util/fetchData');

const testP = require('../util/testP');

const API = 'https://rickandmortyapi.com/api/character/';



testP();

fetchData(API)
.then(data => {
    console.log(`Data: ${data.info.count}`, new Date);
    return fetchData(`${API}${data.results[0].id}`)
})
.then(data => {
    console.log(`Name: ${data.name}`, new Date);
    return fetchData(data.origin.url)
})
.then(data => {
    console.log(`Dimension: ${data.dimension}` , new Date);
})
.catch( err => console.error('ERROR en Promesa: ', err));