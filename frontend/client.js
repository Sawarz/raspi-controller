const button = document.querySelector("#button")

button.addEventListener("click", () => {
axios
    .post('https://raspi-controller.herokuapp.com/es', {
        value: "essa"
    })
    .then(res => {
        console.log("udalo sie");
        console.log(res)
    })
        .catch(error => {
        console.error(error)
    })


})