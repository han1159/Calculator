function calculate(){
    // alert("hi")
    let x = Number(document.getElementById("txtn1").value);
    let y = Number(document.getElementById("txtn2").value);
    let res;
    let sign = document.querySelector('input[name="opr"]:checked').value;

    if (sign=='+'){
        res = x+y
    }
    else if (sign=='-'){
        res = x-y
    }
    else if (sign=='x'){
        res = x*y
    }
    else if (sign == '/'){
        res = x/y
    }
    else if (sign == '%'){
        res = x%y
    }
    document.getElementById("res").value = res
    
}

function clear(){
    alert("hey")
    document.getElementsByClassName("frmcalc").value.reset()
    document.getElementById('res').value = ''
}
