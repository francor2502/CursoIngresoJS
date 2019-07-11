function mostrar()
{
var mes = document.getElementById('mes').value;

switch (mes){
    case("Febrero"):
        alert("Este mes tiene mas de 29");
        break;
    
    default:
        alert("Este mes tiene 30 dias o mas");
        break; // en todos los leguajes despues de default no es necesario poner break; pero en C es necesario

    }
//alert (mesDelAño);
	
	


}//FIN DE LA FUNCIÓN