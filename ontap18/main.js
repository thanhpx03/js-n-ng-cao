import getData from "./user.js";
const tbody=document.querySelector("tbody")

getData()
    .then((response) =>response.json())
    .then((data)=>{
        show(data)
        const btnRemove=document.querySelectorAll('.btn-remove')
        
    })

const show=(data)=>{
    tbody.innerHTML=data.map((pro,index)=>{
        return `<tr>
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