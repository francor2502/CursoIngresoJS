function mostrar()
{

var mes = document.getElementById('mes').value;

//uso el switch con la variable 
switch(mes) {
    case "Enero": //el case no lleva{} y siempre al final lleva : y se termina despues con un break;
        alert("que comiences bien el año!!!!");
        break;
    case "Marzo":
        alert("a clases");
        break;
    case "Julio":
        alert("Se vienen las vacaciones!!!");
        break;
    case "Diciembre":
        alert("Felices fiestas!!!");
        break;

}

}//FIN DE LA FUNCIÓN