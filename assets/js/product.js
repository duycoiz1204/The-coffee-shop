let id1 = 0;
let id2 = 0;
function clickSize(t,idx){
    
    t.parentElement.children.item(id1).classList.remove("toYellow")
    t.classList.add("toYellow")
    id1 = idx;
}

function clickTopping(t,idx){
    t.parentElement.children.item(id2).classList.remove("toYellow")
    t.classList.add("toYellow")
    id2 = idx;
}