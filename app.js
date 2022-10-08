localStorage.time_min = 2;

function create_tr(table_id) {
    let table_body = document.getElementById(table_id),
        first_tr   = table_body.firstElementChild,
        tr_clone   = first_tr.cloneNode(true);

    table_body.append(tr_clone);
    clean_first_tr(table_body.firstElementChild);
}

function clean_first_tr(firstTr) {
    let children = firstTr.children;
    
    children = Array.isArray(children) ? children : Object.values(children);
    children.forEach(x=>{
        if(x !== firstTr.lastElementChild)
        {
            x.firstElementChild.value = '';
        }
    });
    children[0].firstElementChild.value = timeConvert(localStorage.time_min);
    localStorage.time_min++;
}


function remove_tr(This) {
    if(This.closest('tbody').childElementCount == 1)
    {
        alert("You Don't have Permission to Delete This ?");
    }else{
        This.closest('tr').remove();
    }
}


function timeConvert(n) {
    var num = n;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours.toString().padStart(2, '0') + ":" + rminutes.toString().padStart(2, '0');
    
}


function create_tr_mul(table_id, num){
    for (var i = 0; i < num; i++) {
        create_tr(table_id);
    }
    let table_body = document.getElementById(table_id)
        first_tr   = table_body.firstElementChild;

    table_body.removeChild(first_tr);
}

