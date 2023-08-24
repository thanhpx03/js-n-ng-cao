import getData from "./staff.js";
const tbody=document.querySelector("tbody")
getData()
.then((response)=>response.json())
.then((data)=>{
    showStaff(data);
})

const showStaff=(data)=>{
    tbody.innerHTML=data.map((staff,index)=>{
        return `<tr>
        <td scope="row">${index+1}</td>
        <td>${staff.name}</td>
        <td><img src="${staff.image}" width="50"></td>
        <td>
            <button data-id="${staff.id}" class="btn btn-danger btn-remove">Delete</button>
            <button data-id="${staff.id}" class="btn btn-primary btn-update">Update</button>
        </td>
    </tr>`;
    }).join("")
}
