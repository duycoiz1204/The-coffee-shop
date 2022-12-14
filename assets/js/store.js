let tp = document.getElementById("TP")
tp.onchange = ()=>{
    let value = document.getElementById("TP").value;
    let select2 = document.getElementById('HCM');
    let select1 = document.getElementById('HN');
    let select3 = document.getElementById('DN');
    let select4 = document.getElementById('HP');
    if(value == 1){
        select1.style.display = 'block';

        select2.style.display = 'none';
        select3.style.display = 'none';
        select4.style.display = 'none';
    } else if(value == 2){
        select2.style.display = 'block';

        select1.style.display = 'none';
        select3.style.display = 'none';
        select4.style.display = 'none';
    }else if(value == 3){
        select3.style.display = 'block';

        select2.style.display = 'none';
        select1.style.display = 'none';
        select4.style.display = 'none';
    }
    else if(value == 4){
        select4.style.display = 'block';

        select2.style.display = 'none';
        select3.style.display = 'none';
        select1.style.display = 'none';
    }
    else{
        select1.style.display = 'block';

        select2.style.display = 'block';
        select3.style.display = 'block';
        select4.style.display = 'block';
    }
}
