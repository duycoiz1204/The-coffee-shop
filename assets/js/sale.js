var modal = document.getElementById("myModal");

var btn = document.getElementsByClassName("sale");

var span = document.getElementsByClassName("close")[0];


for(let i = 1; i<=6;i++){
    document.getElementById("data"+i).onclick = () =>{
            modal.style.display = "block";
        }
}


span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}