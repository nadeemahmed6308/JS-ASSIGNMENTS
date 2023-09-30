function getnum(num){// add num in input
var numero = document.getElementById('input').value;
document.getElementById('input').value = numero + num
}

function clean(){ // restart 
    document.getElementById('input').value = "";
}

function back(){ // 1 num remove 
    var result = document.getElementById('input').value;
    document.getElementById('input').value = result.substring(0, result.length -1)
}

function calcular(){ // Multiply 
    var result = document.getElementById('input').value;
    if (result){
        document.getElementById('input').value = eval(result)
    }
    /*else{
        document.getElementById('input').value = "NaN"
    }
    */
}
