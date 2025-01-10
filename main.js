// var fullName = ('Lã Văn Thắng');
// var age = 22;//khai báo tuổi
// //hiện ra họ và tên của thắng
// alert(fullName);
// alert(age);

// console.log('đây là 1 dong log')
// console.log(fullName)
// confirm('xác nhận bạn đủ tuổi')//tạo hộp thoại cofirm
// prompt('nhập gì đi')
//bắn ra thông báo sau 1000mili giây
// setTimeout(function() {
//     alert('thông báo')
// }, 1000)
// setInterval(function() {
//     console.log('day la log' + Math.random())
// },1000)
// var a = 1;
// var b = 2;
// var c = a + b;
// console.log(c);
// console.log(++c)
// console.log(b++)

// var firstName = 'thang';
// var lastName = 'la'
// console.log(firstName + lastName)

// var a = 1;
// var b = 2;
// if (a==b) {
//     console.log('dieu kien dung');
// } else {
//     console.log('dieu kien sai')
// }

// var isSuccecc = true;
// console.log(isSuccecc);
//  var a = 1;
//  var b = 2;
//  var c = 1.5;

//a = document.getElementById("demo1").innerHTML = 5 + 6;
var fullName = 'Lã Văn Thắng'
a = alert(fullName)
//a = document.write(5 + 6);
const person = {
    name: "thang",
    age:22,
    fullName: "la van thang",
    eyeColor: "red",
    favoriteTeam: "liverpool",
    class: {
        class1: "9b",
        class2: "9c",
    }
}
//để lấy được 9b
console.log(person["class"]["class1"]);
//hoặc person.class.class1;
//hoặc person.class["class1"];