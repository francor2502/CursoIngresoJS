function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;
	
	do {
		numero = parseInt(prompt("Ingrese un numero"));
		while(isNaN(numero)){
			alert("Eso no es un numero");
			numero = parseInt(prompt("Ingrese un numero"));		
		}
		acumulador = acumulador + numero;
		contador++;
		respuesta = prompt("Quieres ingresar otro numero?");
	
	} while (respuesta == "si");

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN