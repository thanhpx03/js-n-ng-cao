// import getData from "./users.js";

// const tbody = document.querySelector("tbody")

// getData()
//     .then((response)=>response.json())
//     .then((data)=>{
//         showUser(data)
//         const btnRemoves = document.querySelectorAll(".btn-remove")
//         for(let btn of btnRemoves){
//             const id = btn.dataset.id;
//             btn.addEventListener("click",function(){
//                 return removeUser(id)
//             })
//         }

//         const btnUpdates = document.querySelectorAll(".btn-update")
//         for(let btn of btnUpdates){
//             const id = btn.dataset.id;
//             btn.addEventListener("click",function(){
//                 return updateUser(id)
//             })
//         }
//     })
// const showUser = (data) =>{
//     tbody.innerHTML = data.map((user,index)=>{
//         return `
//             <tr>
//                 <td>${index + 1}</td>
//                 <td>${user.name}</td>
//                 <td>
//                     <button data-id="${user.id}" class="btn-remove">Xoa</button>
//                     <button data-id="${user.id}" class="btn-update">Cap nhat</button>
//                 </td>
//             </tr>
//         `
//     }).join("")
// }

// const removeUser = (id) => {
//     fetch(`http://localhost:3000/product/${id}`,{
//         method:"DELETE"
//     })
// }

// // const addUser = () => {
// //     document.querySelector("body").innerHTML = /*html*/`
// //         <form action="">
// //             <input type="text" id="username" />
// //             <button id="btn-submit">Them</button>
// //         </form>
// //     `
// //     document.querySelector("#btn-submit").addEventListener("click",function(){
// //         const newUser = {
// //             "name": document.querySelector("#username").value
// //         }
// //         fetch(`http://localhost:3000/users`,{
// //             method:"POST",
// //             headers:{
// //                 "Content-Type":"application/json"
// //             },
// //             body:JSON.stringify(newUser)
// //         })
// //     })
// // }
// // document.querySelector("#btn-add").addEventListener("click",addUser)

// const updateUser = (id) => {
//     fetch(`http://localhost:3000/users/${id}`)
//         .then((response)=>response.json())
//         .then((data) => {

//             document.querySelector("body").innerHTML = /*html*/`
//                 <form action="">
//                     <input type="text" id="username" value="${data.name}"/>
//                     <button id="btn-update">Sua</button>
//                 </form>
//             `
//             document.querySelector("#btn-update").addEventListener("click",function(){
//                 const newUser = {
//                     "id":id,
//                     "name": document.querySelector("#username").value
//                 }
//                 fetch(`http://localhost:3000/users/${id}`,{
//                     method:"PUT",
//                     headers:{
//                         "Content-Type":"application/json"
//                     },
//                     body:JSON.stringify(newUser)
//                 })
//             })
//         })
// }

import getData from "./users.js";
const tbody = document.querySelector("tbody")

getData()
    .then((response) => (response).json())
    .then((data) => {
        showProduct(data)
        const btnRemoves = document.querySelectorAll(".btn-remove")
        for (let btn of btnRemoves) {
            const id = btn.dataset.id;
            btn.addEventListener("click", function () {
                return removeProduct(id)
            })
        }
        const btnUpdates = document.querySelectorAll(".btn-update")
        for (let btn of btnUpdates) {
            const id = btn.dataset.id;
            btn.addEventListener("click", function () {
                return updateProduct(id)
            })
        }

    })


const showProduct = (data) => {
    tbody.innerHTML = data.map((pro, index) => {
        return `
            <tr>
            <td>${index + 1}</td>
            <td>${pro.name}</td>
            <td>
                <button  data-id="${pro.id}" class="btn-remove">xóa</button>
                <button  data-id="${pro.id}" class="btn-update">sửa</button>
            </td>
         
        </tr>`
    }).join("")
}
const removeProduct = (id) => {
    fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE"
    })
}
const addProduct = () => {
    document.querySelector("body").innerHTML = `<form action="" method="post">
    <input type="text" id="name">
    <button id="btn-add1">add</button>
</form>
    `
    document.querySelector("#btn-add1").addEventListener("click", function () {
        const newProduct = {
            "name": document.querySelector("#name").value
        }
        fetch(`http://localhost:3000/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProduct)
        })


    })

}
document.querySelector("#btn-add").addEventListener("click", addProduct);
const updateProduct = (id) => {
    fetch(`http://localhost:3000/products/${id}`)
        .then((response) => response.json())
        .then((data) => {
            document.querySelector("body").innerHTML = `<form action="">
        <input type="text" id="name" value="${data.name}">
        <button id="btn-edit">sửa</button>
    </form>
        `
            document.querySelector("#btn-edit").addEventListener("click", function () {
                const newProduct = {
                    "id": id,
                    "name": document.querySelector("#name").value
                }
                fetch(`http://localhost:3000/products/${id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newProduct)
                })

            })
        })
}