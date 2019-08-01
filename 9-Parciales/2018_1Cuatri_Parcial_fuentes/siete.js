function mostrar()
{
    var nota;
    var sexo;
    var promedio;
    var promNotas;

    for( var i=0; i < 5; i++){

    
    nota = parseInt(prompt("Ingresar nota por favor: "));
        while( !(nota >= 0 && nota <= 10)){
            nota = parseInt(prompt("Error, reingrese nota: "));
        }
    
    sexo = prompt("Ingrese sexo por favor: ");
        while(!(nota >= 0 && nota <=10)){
            sexo = parseInt(prompt("Error, sexo invalido "));
        }

    }
}
