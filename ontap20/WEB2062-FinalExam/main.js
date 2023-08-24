import getData from "../user.js";
const tbody = document.querySelector("tbody")
getData()
    .then((response) => response.json())
    .then((data) => {
        show(data)
        const btnRemove = document.querySelectorAll("#btn-remove")
        for (let btn of btnRemove) {
            const id = btn.dataset.id
            btn.addEventListener("click", function () {
                return removeProduct(id)
            })
        }
        const btnUpdate = document.querySelectorAll("#btn-update")
        for (let btn of btnUpdate) {
            const id = btn.dataset.id
            btn.addEventListener("click", function () {
                return updateProduct(id)
            })
        }
    })

const show = (data) => {
    tbody.innerHTML = data.map((pro, index) => {
        return ` <tr>
        <td>${index + 1}</td>
        <td>${pro.productName}</td>
        <td><img src="${pro.image}" alt="" width="30"></td>
        <td>
            <button data-id="${pro.id}" id="btn-remove">xóa</button>
            <button data-id="${pro.id}" id="btn-update">sửa</button>
        </td>
    </tr> `
    }).join("")
}
const removeProduct = (id) => {
    fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE"
    })
}
const addProduct = () => {
    document.querySelector("body").innerHTML = `<form action="">
    <div>
        tên <input type="text" id="name">
    </div>
    <div>
        img <input type="file" id="img" onchange="previewFile()">
    </div>
    <button id="add">add</button>
</form>
    `
    function previewFile() { // này là cái check upload ảnh
        const preview = document.querySelector("img")
        const file = document.querySelector("#img").files[0];
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            preview.src = reader.result;
        }, false)
        if (file) {
            reader.readAsDataURL(file);
        }
    }
    document.querySelector("#add").addEventListener("click", function () {
        const newProduct = {
            "productName": document.querySelector("#name").value,
            "image": document.querySelector("img").getAttribute("src")
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
document.querySelector("#btn-add").addEventListener("click", addProduct)
const updateProduct = (id) => {
    fetch(`http://localhost:3000/products/${id}`)
        .then((response) => response.json())
        .then((data) => {
            document.querySelector("body").innerHTML = `<form action="">
        <div>
            tên <input type="text" id="name" value="${data.productName}">
        </div>
        <div>
            img <input type="text" id="img" value="${data.image}">
        </div>
        <button id="edit">sửa</button>
    </form>
        `
            document.querySelector("#edit").addEventListener("click", function () {
                const newProduct = {
                    "id": id,
                    "productName": document.querySelector("#name").value,
                    "image": document.querySelector("#img").value


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