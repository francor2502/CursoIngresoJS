/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var p1;
	var p2;
	var p3;
    
    p1 = parseFloat(document.getElementById("PrecioUno").value);
    p2 = parseFloat(document.getElementById("PrecioDos").value);
    p3 = parseFloat(document.getElementById("PrecioTres").value);

    suma = p1 + p2 +p3;

    alert("La suma de los precias es igual a " + suma);
}
function Promedio () 
{
    var p1;
    var p2;
    var p3;

    var promedio;
    
    p1 = parseFloat(document.getElementById("PrecioUno").value);
    p2 = parseFloat(document.getElementById("PrecioDos").value);
    p3 = parseFloat(document.getElementById("PrecioTres").value);

    promedio = (p1 + p2 +p3) / 3;

    alert("El promedio es " + promedio);
}
function PrecioFinal () 
{
    var p1;
    var p2;
    var p3;
    var subtotal;
    var total;
    
    p1 = parseFloat(document.getElementById("PrecioUno").value);
    p2 = parseFloat(document.getElementById("PrecioDos").value);
    p3 = parseFloat(document.getElementById("PrecioTres").value);

    subtotal = p1 + p2 +p3;
    total = subtotal * 1.21;

    alert("El precio final es " + total);
}