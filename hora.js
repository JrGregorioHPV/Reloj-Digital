<!-- // RELOJ - Javascript
/* ==============================================
   Desarrollado por: Jr. Gregorio H. Pineda V. 
   © Todos los Derechos Reservados 2018 */

function muestraReloj() {

	var Hora = new Date();
	var Horas = Hora.getHours();
	var Minutos = Hora.getMinutes();
	var Segundos = Hora.getSeconds();

	/* Cambiando de Hora Militar a Hora Normal */
	if (Horas > 12) {
		Horas = Horas - 12;
	}
	if (Horas == 0) {
		Horas = 12;
	}

	/* Dia/Noche */
	var Dia = "";
	var Noche = "";

	if (Horas >= 0 || Horas < 12) {
		Dia = "A.M.";
	}
	else if (Horas >= 12) {
		Noche = "P.M.";
	}

	/* Agregando el 0 a las Horas, Minutos y Segundos */
	if(Horas < 10) { 
	   Horas = '0' + Horas;
	}
	if(Minutos < 10) { 
	   Minutos = '0' + Minutos;
	}
	if(Segundos < 10) {
	   Segundos = '0' + Segundos;
	}

	// Accediendo al nodo
	document.getElementById("Reloj").innerHTML = Horas+":"+Minutos+":"+Segundos+" "+Dia+""+Noche;
}

  /* Agregando Milisegundos */
  var Milisegundos = 1000;

window.onload = function() {
	// Muestra el Reloj
	setInterval(muestraReloj, Milisegundos);
}
//-->
