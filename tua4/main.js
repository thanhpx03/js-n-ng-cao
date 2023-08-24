// // mảng trong js in ra đội bóng 
// const doi1 = "asenal";
// const doi2 = "man city";
// const doi3 = "Newcastle";
// const doi4 = "man united";

// // mảng (Array)
// const giai_ngoai_hang = ["asenal", "man city", "newcastle", "man unitel"];
// console.log(giai_ngoai_hang);

// // 1 duyệt
// for (let item of giai_ngoai_hang) {
//     console.log(item);
// }

// for (let index in giai_ngoai_hang) {
//     console.log(index);
// }
// // forEach
// giai_ngoai_hang.forEach(function (team, index) {
//     console.log(team + "" + index);
// })

// //2. thêm
// giai_ngoai_hang.push("liverpool");
// console.log(giai_ngoai_hang);
// //splice
// const lenght = giai_ngoai_hang.length;
// giai_ngoai_hang.splice(lenght, 1, "tottenham");
// //3.xóa
// //3.1 : tìm index
// //3.2: dùng hàm xóa
// const index = giai_ngoai_hang.indexOf("liverpool");
// //splice
// giai_ngoai_hang.splice(index, 1);


// //4.sửa
// const sua = giai_ngoai_hang.indexOf("tottenham");
// giai_ngoai_hang[sua] = "Mu";
// // Map
// const team2 = giai_ngoai_hang.map(function (team, index) {
//     if (team == "Mu") {
//         return "totenham";
//     }
//     return team;

// })
// console.log(team2);

// //5.tìm kiếm
// //find
// const find = giai_ngoai_hang.find(function (team) {
//     return team.toLowerCase() == "Totenham".toLowerCase();
// })
// console.log(find);
// //btvn: tìm kiếm đội bóng sao cho chỉ cần nhập 3 chữ đầu
// //6.lọc
// //filter
// const filtered = giai_ngoai_hang.filter(function (team) {
//     return team == "man city";
// })
// console.log(filtered);
//btvn: lọc đội bóng sao cho chỉ cần nhập 3 chữ đầu
// Es5
// 1. Global scope
// 2. Local scope
// biến : nơi lưu trữ giá tri , biến có phạm vi hoạt động

////////////////
// tua2
// 1 DoM là gì ? các thành phần trong Dom
// là giao diện lập trình ứng dụng
// node trong DoM
// 2 tìm kiếm (truy cập )các phần tử Htlm
// // console.log(document);
// const main_title=document.getElementById("main-title");
// console.log(main_title);
// const title1=document.getElementsByClassName("title1");
// console.log(title1);
// const h1=document.getElementsByTagName("h1");
// console.log(h1);
//  const query= document.querySelector("h1");
//  console.log(query);

// // 3 . style , Attributes, class



// ///4.tạo mới phần tử trong HtML và xóa phần tử trong html
// // tạo mới phanafn tử
// const tao_moi=document.createElement("h2");
// // tạo nội dung cho phần tử
// tao_moi.innerHTML="tiêu đề sản phẩm";
// //thêm vào class nào đó
// tao_moi.classList.add("product-main");
// const productDiv=document.querySelector(".product");
// //thêm vào phần tử khác lên đầu
// productDiv.prepend(tao_moi);
// // thêm vào phần tử khác ở phần cuối
// // productDiv.append(tao_moi);
// // nằm ngoài phần tử bên trên
// // productDiv.before(tao_moi);
// // nằm ngoài pt bên dưới
// // productDiv.after(tao_moi);
// // console.log(tao_moi);

// // xóa phần tử
// // productDiv.remove();

// //sự kiện
// const sk=document.querySelector("#main");
// // sk.onclick= function(){
// //     console.log("helllo thanh");
// // }

// const addProduct= function(){
//     console.log("bạn vừa thêm sản phẩm");
// }
// //arrow function
// const addProduct1= () =>console.log("bạn vừa thêm sản phẩm 1");


// //thêm sự kiện
// // sk.addEventListener("click",()=>{
// //     console.log("helle các bạn ");
// // })
// function message1(){
//     console.log("thông báo 1");
// }
// function message2(){
//     console.log("thông báo 2");
// }

// sk.addEventListener("click",message1);
// sk.addEventListener("click",message2);
// setTimeout(()=>{
//     sk.removeEventListener("click",message2);
// },3000);

// các thành phần trong DoM(node)
//- element
//-attributes
//-text
//-document
//Npm i json-server -g

//npm init -y
//npm I --save-dev json-server
// Tạo file package.json :   npm init -y
// Cài đặt json-server : npm I --save-dev json-server
// Tạo 1 file db.json
