const fetch = require('node-fetch'); // uncomment this line for version <= 16.x >
const API_URL = "https://zoo-animal-api.herokuapp.com/animals/rand/5";

async function main() {

    // wait for the server to respond
    let response = await fetch(API_URL);

    // wait for the data to load
    let animals = await response.json(); // .json() calls JSON.parse() for us

    let animalsSorted = animals.sort((a, b) => {return b.lifespan - a.lifespan})

    for (let animal of animalsSorted) {
        console.log(`${animal.lifespan}`)
    }
    // print the animal name from the JSON object
    console.log(animals[0].name);

}

main();