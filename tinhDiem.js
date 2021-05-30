//cách 1
// var tinhHeChu = function () {

// }
//cách 2
function tinhHeChu (diemHe10) {
    var ketQuaTinhHeChu = ""
    if (diemHe10 <= 10 && diemHe10 >= 7) {
        ketQuaTinhHeChu = "A"
    } else if (diemHe10 < 7 && diemHe10 >= 5.5) {
        ketQuaTinhHeChu = "B"
    } else if (diemHe10 <5.5 && diemHe10>= 4) {
        ketQuaTinhHeChu = "C"
    } else {
        ketQuaTinhHeChu = "D"
    }
    return ketQuaTinhHeChu
}
//cách 3
// var tinhHeChu = {} => {

// }


document.getElementById("btn-calc-score").addEventListener('click',function(event) {
    event.preventDefault()
    //cách viết tên biến trong JS: camelCase
    var tyLe = document.getElementById("tyLe").value;
    //hoặc có thể dùng snake_case
    //var ty_le = document.getElementById("tyLe")
    var diemChuyenCan = parseInt(document.getElementById("diemChuyenCan").value);
    var diemThiGiuaKy = parseInt(document.getElementById("diemThiGiuaKy").value); 
    //hàm parseInt để đổi chuỗ thành số interger (số nguyên)
    //hàm parseFloat để đổi chuỗ thành số thập phân

    var diemCuoiKy = document.getElementById("diemCuoiKy").value;

    //nếu kết quả ra NaN nghĩa là Not a Number

    console.log(tyLe, diemChuyenCan, diemThiGiuaKy, diemCuoiKy);

    var tyLeDiemChuyenCan = 10

    //tìm keyword "split javascript"
    var tyLeDiemQuaTrinh = tyLe.split("/")[0]
    var tyLeDiemThiCuoiKy = tyLe.split("/")[1]

    var diemQuaTrinh = (diemChuyenCan * 10/100) + (diemThiGiuaKy * (tyLeDiemQuaTrinh - tyLeDiemChuyenCan)/100)
    var he10 = diemQuaTrinh + (diemCuoiKy * tyLeDiemThiCuoiKy / 100)
    //hiển thị điểm ra giao diện
    document.getElementById("hien-thi-diem-he-10").innerHTML = 'Hệ 10: ' + he10
    document.getElementById("hien-thi-diem-he-chu").innerHTML = 'Hệ chữ: ' + tinhHeChu(he10)
})
