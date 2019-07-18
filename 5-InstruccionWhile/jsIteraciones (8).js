function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='s';

	do {
		numero = parseInt(prompt("Ingrese un numero"));
		while(isNaN(numero)){
			alert("Eso no es un numero");
			numero = parseInt(prompt("Ingrese un numero"));
			contador++;
			respuesta = prompt("Quiere ingresar otro numero?");
		}
	} while (respuesta == 's');

	if (numero < 0) {
		
	} else {
		
	}

	
	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN