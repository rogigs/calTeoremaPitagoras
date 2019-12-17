function mudaCor(cor) {
    if (cor == "vermelho") {
        document.getElementById("0").style.backgroundColor = "#dc3545";
        document.getElementById("1").style.backgroundColor = "#dc3545";
        document.getElementById("2").style.backgroundColor = "#dc3545";
        document.getElementById("3").style.backgroundColor = "#dc3545";
        document.getElementById("4").style.backgroundColor = "#dc3545";
        document.getElementById("5").style.backgroundColor = "#dc3545";
        document.getElementById("6").style.backgroundColor = "#dc3545";
        document.getElementById("7").style.backgroundColor = "#dc3545";
        document.getElementById("8").style.backgroundColor = "#dc3545";
        document.getElementById("9").style.backgroundColor = "#dc3545";
        document.getElementById("ponto").style.backgroundColor = "#dc3545";
        document.getElementById("ce").style.backgroundColor = "#dc3545";
        document.getElementById("apagado").innerHTML = "ca";
    }
    else if (cor == "verde") {
        document.getElementById("0").style.backgroundColor = "#28a745";
        document.getElementById("1").style.backgroundColor = "#28a745";
        document.getElementById("2").style.backgroundColor = "#28a745";
        document.getElementById("3").style.backgroundColor = "#28a745";
        document.getElementById("4").style.backgroundColor = "#28a745";
        document.getElementById("5").style.backgroundColor = "#28a745";
        document.getElementById("6").style.backgroundColor = "#28a745";
        document.getElementById("7").style.backgroundColor = "#28a745";
        document.getElementById("8").style.backgroundColor = "#28a745";
        document.getElementById("9").style.backgroundColor = "#28a745";
        document.getElementById("ponto").style.backgroundColor = "#28a745";
        document.getElementById("ce").style.backgroundColor = "#28a745";
        document.getElementById("apagado").innerHTML = "co";
    }
    else if (cor == "azul") {
        document.getElementById("0").style.backgroundColor = "#17a2b8";
        document.getElementById("1").style.backgroundColor = "#17a2b8";
        document.getElementById("2").style.backgroundColor = "#17a2b8";
        document.getElementById("3").style.backgroundColor = "#17a2b8";
        document.getElementById("4").style.backgroundColor = "#17a2b8";
        document.getElementById("5").style.backgroundColor = "#17a2b8";
        document.getElementById("6").style.backgroundColor = "#17a2b8";
        document.getElementById("7").style.backgroundColor = "#17a2b8";
        document.getElementById("8").style.backgroundColor = "#17a2b8";
        document.getElementById("9").style.backgroundColor = "#17a2b8";
        document.getElementById("ponto").style.backgroundColor = "#17a2b8";
        document.getElementById("ce").style.backgroundColor = "#17a2b8";
        document.getElementById("apagado").innerHTML = "h";
    }

}

function numeros(num) {
    var salvo;
    var letras;
    var cor = document.getElementById("apagado").innerText;

    if (cor == "ca") {
        salvo = document.getElementById("mostraCa").innerText;
        final = salvo + num;
        document.getElementById("mostraCa").innerHTML = final;
    }
    else if (cor == "co") {
        salvo = document.getElementById("mostraCo").innerText;
        document.getElementById("mostraCo").innerHTML = salvo + num;
    }
    else if (cor == "h") {
        salvo = document.getElementById("mostraH").innerText;
        document.getElementById("mostraH").innerHTML = salvo + num;
    }
    else {
        window.alert("Escolha um lado(h, ca ou co)");
    }    

    letras = indeOf(final, 2);
    while("." != letras){
    }
}

function numeroVar(num) {
    document.getElementById("apagado2").innerHTML = num;
}

function calcula() {
    var numVar = document.getElementById("apagado2").innerText;

    h = document.getElementById("mostraH").innerText;
    co = document.getElementById("mostraCo").innerText;
    ca = document.getElementById("mostraCa").innerText;

    h = parseInt(h * h);
    co = parseInt(co * co);
    ca = parseInt(ca * ca);


    if ((h == 0 && ca == 0) || (h == 0 && co == 0) || (ca == 0 && co == 0)) {
        window.alert("Escolha mais uma variavel");
    }
    else if (h == 0) {
        h = ca + co;
        raizH = Math.sqrt(h);
        document.getElementById("mostraH").innerHTML = raizH.toFixed(2);
    }
    else if (ca == 0) {
        ca = h - co;
        raizCa = Math.sqrt(co);
        if(ca <= 0){
            document.getElementById("mostraCa").innerHTML = "Erro";
        }else{
            document.getElementById("mostraCa").innerHTML = raizCa.toFixed(2);
        }
    }
    else if (co == 0) {
        co = h - ca;
        raizCo = Math.sqrt(co);
        if(co <= 0){
            document.getElementById("mostraCo").innerHTML = "Erro";
        }else{
            document.getElementById("mostraCo").innerHTML = raizCo.toFixed(2);
        }
    }
    else if (ca <= 0 || co <= 0 || h <= 0) {
        window.alert("Isto não é um triângulo pois um dos lado é 0 ou menor que 0");
    }
    else{
        window.alert("Permitido apenas duas variaveis");
        h = 0;
        ca = 0;
        co = 0;
    }

    document.getElementById("resultadoH").innerHTML = h;
    document.getElementById("resultadoCa").innerHTML = ca;
    document.getElementById("resultadoCo").innerHTML = co;
}

function limpaCampos(campo) {
    var cor = document.getElementById("apagado").innerText;

    if (campo == "ce") {
        if (cor == "ca") {
            document.getElementById("mostraCa").innerHTML = "";
        }
        else if (cor == "co") {
            document.getElementById("mostraCo").innerHTML = "";
        }
        else if (cor == "h") {
            document.getElementById("mostraH").innerHTML = "";
        }
    }
    else {
        document.getElementById("mostraCa").innerHTML = "";
        document.getElementById("mostraCo").innerHTML = "";
        document.getElementById("mostraH").innerHTML = "";
    }
}