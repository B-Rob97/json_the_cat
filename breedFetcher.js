const request = require("request");

const input = process.argv.slice(2);
const breedToFind = input[0];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedToFind}`, (error, response, body) => {

  if (error) {
    console.log(error);
    return;
  
  }

  const data = JSON.parse(body);

  if (data.length === 0) {
    console.log("No matching breed found.");
    return;
  }
  const breedName = data[0].name;

  if (breedToFind !== breedName) {
    console.log("Please enter a valid breed name");
    return;
  }

  const breedDescription = data[0].description;

  console.log("Breed:", breedName);
  console.log("Description:", breedDescription);

});