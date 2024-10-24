let resultado = document.getElementById("resultado");

let suma = false, resta = false, multiplicacion = false, division = false, porcentaje = false;

let numero1 = null;

function mostrarN(numero) {
    if (resultado.innerHTML === "0") {
        resultado.innerHTML = "";
    }
    resultado.innerHTML += numero;
}

function sumar() {
    numero1 = parseFloat(resultado.innerHTML); 
    resultado.innerHTML = "";  
    suma = true; 
}

function restar() {
    numero1 = parseFloat(resultado.innerHTML);
    resultado.innerHTML = "";
    resta = true;
}

function multiplicar() {
    numero1 = parseFloat(resultado.innerHTML);
    resultado.innerHTML = "";
    multiplicacion = true;
}

function dividir() {
    numero1 = parseFloat(resultado.innerHTML);
    resultado.innerHTML = "";
    division = true;
}

function porciento() {
    let numeroActual = parseFloat(resultado.innerHTML);
    resultado.innerHTML = numeroActual / 100;  
}

function calcular() {
    let numero2 = parseFloat(resultado.innerHTML);  

    if (suma) {
        resultado.innerHTML = numero1 + numero2;
        suma = false;
    } else if (resta) {
        resultado.innerHTML = numero1 - numero2;
        resta = false;
    } else if (multiplicacion) {
        resultado.innerHTML = numero1 * numero2;
        multiplicacion = false;
    } else if (division) {
        if (numero2 === 0) {
            alert("No se puede dividir por cero");
            eliminar();
            return;
        }
        resultado.innerHTML = numero1 / numero2;
        division = false;
    }
}

function eliminar() {
    resultado.innerHTML = "0";  
    suma = resta = multiplicacion = division = porcentaje = false;  
    numero1 = null;  
}
