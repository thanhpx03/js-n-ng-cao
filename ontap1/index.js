var pro={
    "apple":[
        "ip5","ip6"
    ],
    "sam sung":[
        "xao mi","note7"
    ],
    "LG":[
        "xao mi","note7"
    ],

};
var pro1=document.getElementById('manu_name1');

for(var key in pro){
    // console.log(key);
    pro1.innerHTML +=`<option value='${key}'>${key}</option>`;

}

function changeManu(){
    key=pro1.value;
    categoryList=pro[key];
    console.log(categoryList);
    var category1=document.getElementById('the_loai1');
    if(categoryList !=null){
        for(var i=0; i< categoryList.length;i++){
            category1.innerHTML +=`<option value='${categoryList[i]}'>${categoryList[i]}</option>`;
        }
    }
    
    
}
function  update_gia(){
    var price=document.getElementById('gia1').value;
    var tông=document.getElementById('tong1').value;
    totalPrice=price * tông;
    document.getElementById('kq1').value=totalPrice
    
}
var count =0;
function add_product(){
    var productName=document.getElementById('prouct_name1').value;
    var manuName=document.getElementById('manu_name1').value;
    var categoryName=document.getElementById('the_loai1').value;
    var price=document.getElementById('gia1').value;
    var tông=document.getElementById('tong1').value;
    var kq=document.getElementById('kq1').value;

    document.getElementById('result').innerHTML+=` <tr>
    <td>${++count}</td>
    <td>${productName}</td>
    <td>${manuName}</td>
    <td>${categoryName}</td>
    <td>${price}</td>
    <td>${tông}</td>
    <td>${kq}</td>
    <td><button>edit</button>
    </td>
    <td><button>xóa</button></td>
  </tr>`
}