import getData from "../user.js";

const tbody=document.querySelector("tbody")
getData()
    .then((response)=>response.json())
    .then((data) =>{
        show(data)
        const btnRemove=document.querySelectorAll("#btn-remove")
        for(let btn of btnRemove){
            const id=btn.dataset.id
            //khi bấm nút xóa gọi hàm removeProduct
            btn.addEventListener("click",function(){
                return removeProduct(id)
            })
        }
    })
const show=(data)=>{
    tbody.innerHTML=data.map((pro,index)=>{
        return `
        <tr>
        <td>${index+1}</td>
        <td>${pro.productName}</td>
        <td><img src="${pro.image}" alt="" width="50"></td>
        <td>
        <button data-id="${pro.id}" id="btn-remove">xóa</button>
        <button data-id="${pro.id}" id="btn-update">sửa</button>

        
        </td>

    </tr>
        `
    }).join("")
}
const removeProduct=(id)=>{
    fetch(`http://localhost:3000/products/${id}`,{
        method:"DELETE"
    })
}
    
