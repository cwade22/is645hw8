// Create traveler info
const traveler = {
  name: "Carlie",
  countries: [
    {
      name: "Mexico",
      year: 2000
    },
    {
      model: "Canada",
      color: 2008
    },
    {
      model: "Germany",
      color: 2016
    }
  ]
};

// Send object to the server
fetch("https://thejsway-server.herokuapp.com/api/countries", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(traveler)
})
  .then(response => response.text())
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.error(err.message);
  });