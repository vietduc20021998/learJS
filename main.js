//DOM: Document Object Model
//get element by id: lay mot the bang id
//var: viet tat cua variable --> bien
//bien email hien tai dang la mot nhanh
var email = document.getElementById("exampleInputEmail1")
var password = document.getElementById("exampleInputPassword1")
//lay cai la' value ra
// console.log(email.value);
// console.log(password.value);
//event: su kien. VD: click, double click, input change,...
document.getElementById("btn-submit").addEventListener('click',function(event) {
    event.preventDefault() //chan load trang
//trinh duyet cho su kien  click de hien ra gia tri cua o nhap email
    console.log(email.value);
    console.log(password.value);
})
