/* 
  DOM
  1. DOM la gi? Cac thanh phan trong DOM
  2. Tim kiem (truy cap) cac phan tu HTML
  3. Style, Attributes, class
  4. Tao moi phan tu trong HTML va xoa phan tu trong HTML

  Cac thanh phan trong DOM
  - Element
  - Attributes
  - Text
*/

// console.log(document);
// const mainTitle = document.getElementById("main-title");
// console.log(mainTitle);

// console.log(document.getElementsByClassName("title1"));
// console.log(document.getElementsByTagName("h1"))

// console.log(document.querySelector(".title1"))

// const productTitle = document.createElement("h2")
// productTitle.innerHTML = "Tieu de san pham"
// productTitle.classList.add("product-title")

// const productDiv = document.querySelector(".products")
// productDiv.prepend(productTitle)
// productDiv.append(productTitle)
// productDiv.before(productTitle)
// productDiv.after(productTitle)
// console.log(productDiv);
// productDiv.remove();

const mainTitle = document.querySelector("#main-title")
// mainTitle.onclick = () => {
//     console.log("1");
//     console.log("2");
// }
// mainTitle.onclick = () => {
//     console.log("2");
// }
// const addProduct = () => console.log("Ban vua them san pham")
// // arrow function

// mainTitle.addEventListener("click",()=>{
//     console.log("1");
// })
// mainTitle.addEventListener("click",()=>{
//     console.log("2");
// })

function message1(){
    console.log("Thong bao 1");
}
function message2(){
    console.log("Thong bao 2");
}
mainTitle.addEventListener("click",message1)
mainTitle.addEventListener("click",message2)

setTimeout(()=>{
    mainTitle.removeEventListener("click",message2);
},3000)