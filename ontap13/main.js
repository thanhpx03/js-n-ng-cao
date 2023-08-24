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
const tbody = document.querySelector('tbody');

getData()
    .then((response) => response.json())
    .then((data) => {
        showUser(data)
        const btnRemoves = document.querySelectorAll(".btn-remove");
        for (let btn of btnRemoves) {
            const id = btn.dataset.id;
            btn.addEventListener("click", function () {
                return removeUser(id)
            })
        }
        const btnUpdates = document.querySelectorAll(".btn-update");
        for (let btn of btnUpdates) {
            const id = btn.dataset.id;
            btn.addEventListener("click", function () {
                return updateUser(id);
            })
        }
    })
const showUser = (data) => {
    tbody.innerHTML = data.map((user, index) => {
        return `
            <tr>
            <td>${index + 1}</td>
            <td>${user.name}</td>
            <td>
                <button data-id="${user.id}" class="btn-remove">xóa</button>
                <button data-id="${user.id}" class="btn-update">sửa</button>
            </td>

        </tr>`
    }).join("")
}
const removeUser = (id) => {
    fetch(`http://localhost:3000/product/${id}`, {
        method: "DELETE"

    })

}
const addUser = ()=>{
    document.querySelector("body").innerHTML=`
    <form action="">
       tên  <input type="text" id="nameUser">
         <button id="add">thêm</button>
             </form>
    `
  const add=  document.querySelector("#add").addEventListener("click",function(){
        const newUser ={
            "name":document.querySelector("#nameUser").value
        }
        fetch(`http://localhost:3000/product`, {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newUser)
    
        })

    })
}

document.querySelector("#btn-add").addEventListener("click",addUser)


const updateUser =(id)=>{
    fetch(`http://localhost:3000/product/${id}`)
    .then ((response) => response.json())
    .then((data)  =>{
        document.querySelector("body").innerHTML=
        `<form action="">

        <input type="text" class="username" value="${data.name}">
        <button id="btn-update1">sửa</button>
    </form>`
    document.querySelector("#btn-update1").addEventListener("click",function(){
        const newUser={
            "id":id,
            "name":document.querySelector(".username").value
    
        }
        fetch(`http://localhost:3000/product/${id}` ,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newUser)
          })
    })
})
}