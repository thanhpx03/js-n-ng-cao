// const API = "https://5e79b4b817314d00161333da.mockapi.io/products";
// console.log(fetch(API));
// const app=document.querySelector("#app");

// fetch("https://5e79b4b817314d00161333da.mockapi.io/products")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// fetch("https://5e79b4b817314d00161333da.mockapi.io/products")
// .then((response) => response.json())
// .then((data) => {
//     const newData=data
//     .map((item)=> {
//         return `<div>${item.name}</div>`
//     })
//     .join("");
//     app.innerHTML=newData
// });
console.log("1");
const app = document.querySelector("#app");
const btnAdd = document.querySelector("#add");
const btnDelete = document.querySelector("#delete");
const btnUpdate = document.querySelector("#update");

fetch("https://5e79b4b817314d00161333da.mockapi.io/projects")
    .then((response) => response.json())
    .then((data) => {
        const newData = data
            .map((item) => {
                return `<div>${item.name}</div>`;
            })
            .join("");

        app.innerHTML = newData;
    });

btnAdd.addEventListener("click", () => {
    fetch("https://5e79b4b817314d00161333da.mockapi.io/projects", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: "San pham A" }) // '{"name": "San pham A"}'
    });
});
btnDelete.addEventListener("click", () => {
    fetch(`https://5e79b4b817314d00161333da.mockapi.io/projects/1`, {
        method: "DELETE"
    });
});
btnUpdate.addEventListener("click", () => {
    fetch("https://5e79b4b817314d00161333da.mockapi.io/projects/2", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: "Cap nhat ten san pham so 2" }) // '{"name": "San pham A"}'
    });
});
