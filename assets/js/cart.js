let time  = new Date();
document.getElementById("time").innerHTML = "Thời gian đặt: "+ time.getHours()+ ":" +time.getMinutes() + "    " + time.getDay()+"/"+time.getMonth()+"/"+time.getFullYear();

let modalAddress = document.getElementById("modalAddess");
let span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modalAddress.style.display = "none";
  }
  
window.onclick = function(event) {
    if (event.target == modalAddress) {
        modalAddress.style.display = "none";
    }
  }

let address  = document.getElementById("address")
address.addEventListener("click",()=>{
    modalAddress.style.display = "block";
})