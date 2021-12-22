const green = document.querySelector("#green")
const red = document.querySelector("#red")
const yellow = document.querySelector("#yellow")

green.addEventListener("click", () => {
axios
    .post('https://raspi-controller.herokuapp.com/es', {
        value: "green"
    })
    .then(res => {
        console.log("udalo sie");
        console.log(res)
    })
        .catch(error => {
        console.error(error)
    })
})
red.addEventListener("click", () => {
    axios
        .post('https://raspi-controller.herokuapp.com/es', {
            value: "red"
        })
        .then(res => {
            console.log("udalo sie");
            console.log(res)
        })
            .catch(error => {
            console.error(error)
        })
})
yellow.addEventListener("click", () => {
    axios
        .post('https://raspi-controller.herokuapp.com/es', {
            value: "yellow"
        })
        .then(res => {
            console.log("udalo sie");
            console.log(res)
        })
            .catch(error => {
            console.error(error)
        })
    })