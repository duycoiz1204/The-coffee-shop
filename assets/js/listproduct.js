let icon = document.getElementById("icon");
let ind = 0;

function showIcon(t){
    let curr = t.firstElementChild
    curr.append(icon)
}
function ChiTietSanPham(){
    window.location.href = "/product.html";
}