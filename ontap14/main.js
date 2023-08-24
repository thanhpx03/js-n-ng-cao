import getData from "./users.js";
getData()
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
    })