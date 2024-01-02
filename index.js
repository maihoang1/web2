//console.log(`Hello`);
//console.log(`i like pizza`);
//window.alert(`haha`); // khi mới mở web lên thì có thông báo trên
// this is a comment
//document.getElementById("myH1").textContent = `Hello`;
//document.getElementById("mhr").textContent = `this is a page`;
// variable = A containner that stores a  value 
// behaves as if it were the value it contains
//1.declaration let x;
//2.assignment x=100;
//let x; // khởi tạo biến
//x=100; // gán giá trị của biến
//let age = 100;
//document.getElementById("mhr").textContent = x;
//console.log(x);
// khi muốn in cả giá trị lẫn string
//document.getElementById("mhr").textContent = `tuổi của bạn là ${x}`;
// các toán tử (+,-,*,/)
// sử dụng như bình thường
// age = age +1
// age = age -1
// age = age / 2
// age = age * 2
// mũ : age = age**(mũ)
// chia lấy  phần sư age  = age % 2



// how to accept user input
//1. EASY WAY = window prompt
//2. Hard Way = html text box
// input box
//let name;
//name = window.prompt("mày tên là gì");
//hiện ra thông báo nhập giá trị của name
//document.getElementById("button").onclick = function(){
    //name = document.getElementById("input").value;
   // Window.alert(`hello ${name}`);
//}
//name = window.prompt("tên mày là gì");
//window.alert(name);





// type conversion = change the datatype of a value a to another(String,number,boolean)
// gán kiểu số chữ
// Number(số)
// String(chữ)
// Boolean()
// const = 1 giá trị không đổi
// ví dụ const pi = 3.1415
let radius;
//document.getElementById("b").onclick = function(){
//radius = document.getElementById("i").value;
//window.alert(`hello`);
//document.getElementById("H3").textContent = radius;
//}
const tang = document.getElementById("tang");
const giam = document.getElementById("giam");
const reset = document.getElementById("reset");
let cnt =0;
tang.onclick = function(){
    cnt++;
    l.textContent = cnt;
}
giam.onclick = function(){
    cnt--;
    l.textContent = cnt;
}
reset.onclick = function(){
    cnt=0;
    l.textContent = cnt;
}