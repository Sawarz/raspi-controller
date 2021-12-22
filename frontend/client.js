const green = document.querySelector("#green")
const red = document.querySelector("#red")
const yellow = document.querySelector("#yellow")

green.addEventListener("click", () => {
axios
    .post('https://raspi-controller.herokuapp.com/es', {
        es: "green"
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
            es: "red"
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
            es: "yellow"
        })
        .then(res => {
            console.log("udalo sie");
            console.log(res)
        })
            .catch(error => {
            console.error(error)
        })
    })