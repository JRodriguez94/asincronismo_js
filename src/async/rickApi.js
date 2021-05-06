const fetchData = require('../util/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

const anotherFunction = async url_api => {
    try {
        const data = await fetchData(url_api)
        const character = await fetchData(`${API}${data.results[0].id}`);
        const origin = await fetchData(character.origin.url);
        console.log(`Data: ${data.info.count}`, new Date);
        console.log(`Name: ${character.name}`, new Date);
        console.log(`Dimension: ${origin.dimension}` , new Date);
    } catch (err) {
        console.error(`Error ${err}`)
    }
}


console.log('Before')
anotherFunction(API);
console.log('After')