// console.log("1");
// bất đồng bộ
// function bar(){
//     setTimeout(function (){
//         console.log("2");
//     },5000);
// }

// function foo(){
//     console.log("1");
// }

// function baz(){
//     console.log("3");
// }

// bar();

// setTimeout(() =>{
//     console.log(4);
// },1000);

// foo();
// baz();

// const project= [];//1

// // ví dụ gọi đén server
// setTimeout(() => {     //2
//     project=[{a:10}];
// },1000);

// console.log(project);//3

// xử lý bất đồng bộ: là chuyển bất đồng bộ sang đồng bộ
// tiếp theo  xử lý công việc khác

// function loadScript(src, callback) {
//     const script = document.createElement('script');
//     script.src = script;
//     // tải xog thì gọi callback
//     script.onload = function () {
//         callback(null, script);
//     };
//     script.onerror = function () {
//         callback(new Error("lỗi rui anh ơi"));
//     }
//     document.head.append(script);
// }
// // trên setimeout

// loadScript('https://codesandbox.io/live/ac79834655c', function (error,script) {
//   console.log('scprit tải thành cong', script);

// });
//console.log

//ví
function loadScript(src, callback) {
    const script = document.createElement("script"); // <script></script>
    script.src = src; // <script src="https://developer.mozilla.org/"></script>
    script.onload = function () {
      callback(null, script);
    };
    script.onerror = function () {
      callback(new Error("Lỗi rồi anh ơi"));
    };
    document.head.append(script); // <head><script src="https://developer.mozilla.org/"></script></head>
  }
  // setTimeout
  loadScript("https://javascript.info/callbacks", function (error, script) {
    console.log("Script tải thành công : ", script);
    loadScript("https://developer.mozilla.org/", (error, script1) => {
      console.log("Script tải thành công : ", script1);
      loadScript("https://themeforest.net/", (error, script2) => {
        console.log("Script tải thành công : ", script2);
      });
    });
  });
  
  // console.log();
  
  // Ví dụ https://developer.mozilla.org/ là 1 thư viện
  // và trong thư viện đấy có 1 hàm tên show();
  