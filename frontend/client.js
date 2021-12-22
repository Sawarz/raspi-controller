const button = document.querySelector("#button")
const axios = require('axios');

button.addEventListener("click", () => {
axios
    .post('https://raspi-controller.herokuapp.com/buttondata', {
        value: "essa"
    })
    .then(res => {
        console.log("udalo sie");
        console.log(`statusCode: ${res.status}`)
        console.log(res)
    })
        .catch(error => {
        console.error(error)
    })


})