function mostrar()
{
var mes = document.getElementById("mes").value; // para el getElementyId busco el Id en html

switch(mes){
    case("Enero"):
    case("Febrero"):
    case("Abril"):
    case("Mayo"):
    case("Junio"):
        alert("Falta para el invierno");
        break;
    case("Julio"):
    case("Agosto"):
        alert("Abrigate hace frio");
        break;
    case("Septiembre"):
    case("Octubre"):
    case("Noviembre"):
    case("Diciembre"):
        alert("Ya pasamos el frio");
        break;

}




}//FIN DE LA FUNCIÓN