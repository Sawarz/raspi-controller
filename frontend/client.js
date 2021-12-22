const button = document.querySelector("#button")
import axios from "./node_modules/axios/index.js";

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