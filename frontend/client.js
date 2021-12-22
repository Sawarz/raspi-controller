const button = document.querySelector("#button")

button.addEventListener("click", () => {
axios
    .post('https://raspi-controller.herokuapp.com', {
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