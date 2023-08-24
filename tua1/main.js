// mảng trong js in ra đội bóng 
const doi1 = "asenal";
const doi2 = "man city";
const doi3 = "Newcastle";
const doi4 = "man united";

// mảng (Array)
const giai_ngoai_hang = ["asenal", "man city", "newcastle", "man unitel"];
console.log(giai_ngoai_hang);

// 1 duyệt
for (let item of giai_ngoai_hang) {
    console.log(item);
}

for (let index in giai_ngoai_hang) {
    console.log(index);
}
// forEach
giai_ngoai_hang.forEach(function (team, index) {
    console.log(team + "" + index);
})

//2. thêm
giai_ngoai_hang.push("liverpool");
console.log(giai_ngoai_hang);
//splice
const lenght = giai_ngoai_hang.length;
giai_ngoai_hang.splice(lenght, 1, "tottenham");
//3.xóa
//3.1 : tìm index
//3.2: dùng hàm xóa
const index = giai_ngoai_hang.indexOf("liverpool");
//splice
giai_ngoai_hang.splice(index, 1);


//4.sửa
const sua = giai_ngoai_hang.indexOf("tottenham");
giai_ngoai_hang[sua] = "Mu";
// Map
const team2 = giai_ngoai_hang.map(function (team, index) {
    if (team == "Mu") {
        return "totenham";
    }
    return team;

})
console.log(team2);

//5.tìm kiếm
//find
const find = giai_ngoai_hang.find(function (team) {
    return team.toLowerCase() == "Totenham".toLowerCase();
})
console.log(find);
//btvn: tìm kiếm đội bóng sao cho chỉ cần nhập 3 chữ đầu
//6.lọc
//filter
const filtered = giai_ngoai_hang.filter(function (team) {
    return team == "man city";
})
console.log(filtered);
//btvn: lọc đội bóng sao cho chỉ cần nhập 3 chữ đầu
// Es5
// 1. Global scope
// 2. Local scope
// biến : nơi lưu trữ giá triij , biến có phạm vi hoạt động