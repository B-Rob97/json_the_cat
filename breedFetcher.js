const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    if (error) {
      callback(error);
      return;
    }

    const data = JSON.parse(body);

    if (data.length === 0) {
      callback("No matching breed found.");
      return;
    }
    const breedName = data[0].name;

    if (!breedName) {
      callback("Please enter a valid breed name");
      return;
    }
    const breedDescription = data[0].description;
    callback(null, breedDescription);
  });
};

module.exports = { fetchBreedDescription };