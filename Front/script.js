function somar(){

    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);

    let resultado = numero1 + numero2;
    document.getElementById('resultado').innerText = resultado;

}

function dividir(){

    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);

    if(numero2 === 0){
        document.getElementById('resultado').innerText = "Divisão por zero.";

    }else{
        let resultado = numero1 / numero2;
        document.getElementById('resultado').innerText = resultado;
    }


}