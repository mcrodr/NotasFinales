//datos personales
var nombre = prompt("Ingrese nombre completo");
document.getElementById("nombre").innerHTML = "<h3>Nombre: "+nombre+"</h3>";

var generacion = prompt("Ingrese generación");
document.getElementById("generacion").innerHTML = "<h3>Generación: "+generacion+"</h3>";

//notas html
 var nota11 = prompt("Ingrese nota 1 HTML", "4.5");
 document.getElementById("nota11").innerHTML = nota11;

 var nota21 = prompt("Ingrese nota 2 HTML" ,"6.5");
 document.getElementById("nota21").innerHTML = nota21;

 var nota31 = prompt("Ingrese nota 3 HTML", "5.5");
 document.getElementById("nota31").innerHTML = nota31;


//notas css
 var nota12 = prompt("Ingrese nota 1 CSS", "4.3");
 document.getElementById("nota12").innerHTML = nota12;

 var nota22 = prompt("Ingrese nota 2 CSS", "4.9");
 document.getElementById("nota22").innerHTML = nota22;

 var nota32 = prompt("Ingrese nota 3 CSS", "5.5");
 document.getElementById("nota32").innerHTML = nota32;


//notas js
 var nota13 = prompt("Ingrese nota 1 JS", "4.5");
 document.getElementById("nota13").innerHTML = nota13;

 var nota23 = prompt("Ingrese nota 2 JS", "3.9");
 document.getElementById("nota23").innerHTML = nota23;

 var nota33 = prompt("Ingrese nota 3 JS", "4.5");
 document.getElementById("nota33").innerHTML = nota33;

 //promedios
var sumaHtml =  parseInt(nota11) + parseInt(nota21) + parseInt(nota31);
var promedioHtml = parseFloat(sumaHtml/3).toFixed(1);
document.getElementById("promedioHtml").innerHTML = promedioHtml;

var sumaCss =  parseFloat(nota12) + parseFloat(nota22) + parseFloat(nota32);
//console.log(sumaCss)
//var temporalCss = sumaCss/3;
//console.log(temporalCss);
var promedioCss = parseFloat(sumaCss/3).toFixed(1);
document.getElementById("promedioCss").innerHTML = promedioCss;

var sumaJs =  parseInt(nota13) + parseInt(nota23) + parseInt(nota33);
var promedioJs = parseFloat(sumaJs/3).toFixed(1);
document.getElementById("promedioJs").innerHTML = promedioJs;