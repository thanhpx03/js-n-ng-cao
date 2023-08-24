import getData from "../product.js";
const tbody = document.querySelector("tbody")

getData()
    .then((response)=>response.json())
    .then((data)=>{
        showUser(data)
        const btnRemoves = document.querySelectorAll(".btn-remove")
        for(let btn of btnRemoves){
            const id = btn.dataset.id;
            btn.addEventListener("click",function(){
                return removeUser(id)
            })
        }

        const btnUpdates = document.querySelectorAll(".btn-update")
        for(let btn of btnUpdates){
            const id = btn.dataset.id;
            btn.addEventListener("click",function(){
                return updateUser(id)
            })
        }
    })
const showUser = (data) =>{
    tbody.innerHTML = data.map((user,index)=>{
       
        return `
            <tr>
                <td>${index + 1}</td>
                <td>${user.productName}</td>
                <td><img src="${user.image}" alt="" width="30"></td>
                <td>
                    <button data-id="${user.id}" class="btn-remove">Xoa</button>
                    <button data-id="${user.id}" class="btn-update">Cap nhat</button>
                </td>
            </tr>
        `
    }).join("")
}
const removeUser=(id)=>{
    fetch(`  http://localhost:3000/products/${id}`,{
        method:"DELETE"
    })
}
const addProduct=()=>{
    document.querySelector("body").innerHTML=`<form action="">
    <div>
     tên   <input type="text" id="name">
     <p style="color:red" id="loiten"></p>
    </div>
    <div>
        img  <input type="text" id="img">
       </div>
       <button id="add">add</button>
</form>
    ` 
      function previewFile(){ // này là cái check upload ảnh
            const preview=document.querySelector("img")
            const file=document.querySelector("#image").files[0];
            const reader=new FileReader();
            reader.addEventListener("load",()=>{
                preview.src=reader.result;
            },false)
            if(file){
                reader.readAsDataURL(file);
            }
        }
    document.querySelector("#add").addEventListener("click",function(){
        let ten=document.querySelector("#name").value
        let ok=true;
        if(ten==""){
            document.querySelector("#loiten").innerHTML="k dk bỏ trống"
            ok=false;
        }
        if(ok==false){
           return false;
        }else{

        

        const newUser = {
            "productName": document.querySelector("#name").value,
            "image":document.querySelector("#img").value
        }
        fetch(` http://localhost:3000/products`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newUser)
        })
    }
    })

}
document.querySelector("#btn-add").addEventListener("click",addProduct)

const updateUser=(id)=>{
    fetch(` http://localhost:3000/products/${id}`)
     .then((response) =>response.json())
     .then((data)=>{
        document.querySelector("body").innerHTML=`<form action="">
        <div>
            tên <input type="text" name="" id="name" value="${data.productName}">
        </div>
        <div>
            img <input type="text" name="" id="img" value="${data.image}">
        </div>
        <button id="edit">sửa</button>
    </form>
        `
        document.querySelector("#edit").addEventListener("click",function(){
            const newProduct={
                "id":id,
                "productName":document.querySelector("#name").value,
                "image":document.querySelector("#img").value
            }
            fetch(` http://localhost:3000/products/${id}`,{
                method:"PUT",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(newProduct)
            })
        })

     })
}