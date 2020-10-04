function iniciar(){
    var calculo = document.getElementById("calcular");
    if(calculo.addEventListener){
    calculo.addEventListener("click", calculop, false);
    }
    else{
    calculo.attachEvent("onclick", calculop);
    }
}

function calculop(){
    var cua = new cuadrado(document.form1.lado.value);
    cua.mostrar(cua.peri(), " perímetro");
    return false;
    }

function cuadrado(lado){
    //Propiedades de la clase
    this.base = parseFloat(lado);
    //Métodos de la clase
    //definidos usando el constructor Function()
    this.peri = new Function("return 4*this.base");
    this.mostrar = new Function("valor","tipoc","alert('El' + tipoc + ' es: ' + valor)");
    }
    if(window.addEventListener){
        window.addEventListener("load", iniciar, false);
        }
        else if(window.attachEvent){
        window.attachEvent("onload", iniciar);
        }