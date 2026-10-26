function respuestas(){
    var resp = '';
    for(let p = 1; p <= 3; p++){
        var opciones = document.getElementsByName('P' + p);
        var elegida = 'sin respuesta';
        for(let i = 0; i < opciones.length; i++){
            if(opciones[i].checked){
                elegida = opciones[i].value;
            }
        }
        resp += 'Pregunta ' + p + ': ' + elegida + '<br>';
    }
    document.getElementById("resultado").innerHTML = resp;
}

var votosNorte = 0;
var votosSur = 0;
var votosCentro = 0;
var votosA = 0;
var votosB = 0;
var votosC = 0;

function votar(){
    var seccion = document.getElementById("seccion").value;
    var candidato = document.getElementById("candidato").value;

    switch(seccion){
        case "Norte":
            votosNorte++;
            break;
        case "Sur":
            votosSur++;
            break;
        case "Centro":
            votosCentro++;
            break;
    }
    switch(candidato){
        case "A":
            votosA++;
            break;
        case "B":
            votosB++;
            break;
        case "C":
            votosC++;
            break;
    }

    var result = "Votaste por el candidato " + candidato + " desde la sección " + seccion + "<br><br>";
    result += "Norte: " + votosNorte + "<br>Sur: " + votosSur + "<br>Centro: " + votosCentro + "<br><br>";
    result += "Candidato A: " + votosA + "<br>Candidato B: " + votosB + "<br>Candidato C: " + votosC;
    document.getElementById("resultado").innerHTML = result;
}

function sumaPositivos(){
    var suma = 0;
    var num = parseFloat(prompt("Introduce un numero positivo (0 o negativo para terminar)"));
    while(num > 0){
        suma = suma + num;
        num = parseFloat(prompt("Introduce otro numero positivo (0 o negativo para terminar)"));
    }
    document.getElementById("resultado").innerHTML = "La suma es " + suma;
}

function ordenarNumeros(){
    var a = parseFloat(document.getElementById("n1").value);
    var b = parseFloat(document.getElementById("n2").value);
    var c = parseFloat(document.getElementById("n3").value);
    var result = "";

    if(isNaN(a) || isNaN(b) || isNaN(c)){
        result = "Escribe los 3 numeros";
    } else if(a >= b && b >= c){
        result = a + ", " + b + ", " + c;
    } else if(a >= c && c >= b){
        result = a + ", " + c + ", " + b;
    } else if(b >= a && a >= c){
        result = b + ", " + a + ", " + c;
    } else if(b >= c && c >= a){
        result = b + ", " + c + ", " + a;
    } else if(c >= a && a >= b){
        result = c + ", " + a + ", " + b;
    } else {
        result = c + ", " + b + ", " + a;
    }
    document.getElementById("resultado").innerHTML = result;
}

function importeNeto(){
    var bruto = parseFloat(document.getElementById("n1").value);
    var neto = 0;
    var result = "";

    if(isNaN(bruto)){
        result = "Escribe un importe";
    } else {
        if(bruto > 15000){
            neto = bruto - (bruto * 0.16);
        } else {
            neto = bruto - (bruto * 0.10);
        }
        result = "El importe neto es " + neto.toFixed(2);
    }
    document.getElementById("resultado").innerHTML = result;
}

function sueldoAnual(){
    var anios = parseFloat(document.getElementById("n1").value);
    var sueldo = 40000;
    var porcentaje = 0;
    var result = "";

    if(isNaN(anios)){
        result = "Escribe los años";
    } else {
        if(anios > 10){
            porcentaje = 10;
        } else if(anios > 5){
            porcentaje = 7;
        } else if(anios > 3){
            porcentaje = 5;
        } else {
            porcentaje = 3;
        }
        sueldo = sueldo + (sueldo * porcentaje / 100);
        result = "Le corresponde un aumento de " + porcentaje + "%<br>Su sueldo ahora es de " + sueldo + " euros";
    }
    document.getElementById("resultado").innerHTML = result;
}

function sumaImpares(){
    var suma = 0;
    var i = 1;
    while(i <= 100){
        if(i % 2 != 0){
            suma = suma + i;
        }
        i++;
    }
    document.getElementById("resultado").innerHTML = "La suma de los impares del 1 al 100 es " + suma;
}

function mostrarAsteriscos(){
    var num = parseInt(document.getElementById("n1").value);
    var estrellas = "";
    for(let i = 1; i <= num; i++){
        estrellas = estrellas + "* ";
    }
    document.getElementById("resultado").innerHTML = estrellas;
}

function tablasDel1Al10(){
    var tablas = "";
    for(let i = 1; i <= 10; i++){
        tablas = tablas + "<br>Tabla del " + i + "<br>";
        for(let j = 1; j <= 10; j++){
            tablas = tablas + i + " X " + j + " = " + (i * j) + "<br>";
        }
    }
    document.getElementById("resultado").innerHTML = tablas;
}

var paises = ["México", "Argentina", "Brasil", "Chile", "Colombia", "Perú", "España", "Francia", "Italia", "Japón"];

function mostrarArreglo(){
    document.getElementById("arreglo").innerHTML = "Arreglo: " + paises.join(", ");
}

function usarPop(){
    var quitado = paises.pop();
    mostrarArreglo();
    document.getElementById("resultado").innerHTML = "Pop quitó el último: " + quitado;
}

function usarShift(){
    var quitado = paises.shift();
    mostrarArreglo();
    document.getElementById("resultado").innerHTML = "Shift quitó el primero: " + quitado;
}

function usarPush(){
    var pais = document.getElementById("pais").value;
    if(pais != ""){
        paises.push(pais);
        mostrarArreglo();
        document.getElementById("resultado").innerHTML = "Push agregó " + pais + " al final";
    } else {
        document.getElementById("resultado").innerHTML = "Escribe un país";
    }
}

function usarUnshift(){
    var pais = document.getElementById("pais").value;
    if(pais != ""){
        paises.unshift(pais);
        mostrarArreglo();
        document.getElementById("resultado").innerHTML = "Unshift agregó " + pais + " al inicio";
    } else {
        document.getElementById("resultado").innerHTML = "Escribe un país";
    }
}

function usarSplice(){
    var posicion = parseInt(document.getElementById("posicion").value);
    var cantidad = parseInt(document.getElementById("cantidad").value);
    var pais = document.getElementById("pais").value;
    var quitados;
    if(pais == ""){
        quitados = paises.splice(posicion, cantidad);
    } else {
        quitados = paises.splice(posicion, cantidad, pais);
    }
    mostrarArreglo();
    document.getElementById("resultado").innerHTML = "Splice quitó: " + quitados.join(", ");
}

function usarDelete(){
    var posicion = parseInt(document.getElementById("posicion").value);
    delete paises[posicion];
    mostrarArreglo();
    document.getElementById("resultado").innerHTML = "Delete borró la posición " + posicion + " pero el lugar quedó vacío";
}

function usarReverse(){
    paises.reverse();
    mostrarArreglo();
    document.getElementById("resultado").innerHTML = "Reverse volteó el arreglo";
}

function usarSort(){
    paises.sort();
    mostrarArreglo();
    document.getElementById("resultado").innerHTML = "Sort ordenó el arreglo";
}

function usarConcat(){
    var juntos = paises.concat(otros);
    document.getElementById("resultado").innerHTML = "Concat unió el arreglo con " + otros.join(", ") + "<br><br>" + juntos.join(", ");
}

function usarJoin(){
    var texto = paises.join(" - ");
    document.getElementById("resultado").innerHTML = "Join: " + texto;
}

function usarLength(){
    document.getElementById("resultado").innerHTML = "Length: el arreglo tiene " + paises.length + " elementos";
}

function mostrarMenu(){
    var formulario = document.getElementById("formulario");
    if(formulario.style.display == "block"){
        formulario.style.display = "none";
    } else {
        formulario.style.display = "block";
    }
}
