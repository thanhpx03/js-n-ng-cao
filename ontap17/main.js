import getData from "./user.js";

const tbody=document.querySelector("tbody")

getData()
    .then((response) =>response.json())
    .then((data)=>{
        show(data)
        const btnRemove=document.querySelectorAll(".btn-remove")
        for(let btn of btnRemove){
            const id= btn.dataset.id
            btn.addEventListener("click",function(){
                return removeProduct(id)
            })
        }
        const btnUpdate=document.querySelectorAll(".btn-update")
        for(let btn of btnUpdate){
            const id= btn.dataset.id
            btn.addEventListener("click",function(){
                return updateProduct(id)
            })
        }
    })

const show=(data)=>{
    tbody.innerHTML=data.map((pro,index)=>{
        return ` <tr>
        <td>${index+1}</td>
        <td>${pro.name}</td>
        <td>${pro.gia}</td>
        <td>
            <button data-id="${pro.id}" class="btn-remove">xóa</button>
            <button data-id="${pro.id}" class="btn-update">sửa</button>
        </td>
    </tr>`
    }).join("")
}
const removeProduct=(id)=>{
    fetch(`http://localhost:3000/pro/${id}`,{
        method:"DELETE"
    })
}
const addProduct=()=>{
    document.querySelector("body").innerHTML=`<form action="">
    <div>
        tên <input type="text" name="" id="name">
    </div>
    <div>
        giá <input type="text" name="" id="gia">
    </div>
   <button id="add">add</button>
</form>
    `
    document.querySelector("#add").addEventListener("click",function(){
        const newProduct={
            "name":document.querySelector("#name").value,
            "gia":document.querySelector("#gia").value
        }
        fetch(`http://localhost:3000/pro`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newProduct)
        })
    })
}
document.querySelector("#btn-add").addEventListener("click",addProduct)

const updateProduct=(id)=>{
    fetch(`http://localhost:3000/pro/${id}`)
    .then((response)=>response.json())
    .then((data)=>{
        document.querySelector("body").innerHTML=`<form action="">
        <div>
          tên  <input type="text" id="name" value="${data.name}">
        </div>
        <div>
            giá  <input type="text" id="gia" value="${data.gia}">
          </div>
          <button id="edit">sửa</button>
    </form>`
    document.querySelector("#edit").addEventListener("click",function(){
        const newProduct={
            "name":document.querySelector("#name").value,
            "gia":document.querySelector("#gia").value
        }
        fetch(`http://localhost:3000/pro/${id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newProduct)
        })
    })
    })
}