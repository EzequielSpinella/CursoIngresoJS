function mostrar()
{
var cantidadProducor;
			var gasto;
			var descuentoPorCantidad;
			var descuentoPorPrecio;
			var tipoDePago;
			var recargoPorPagoTarjeta;




			cantidadProductos = prompt("ingrese la cantidad de productos que desea comprar");
			gasto = prompt("ingrese cuanto dinero quiere gastar: ");

			tipoDePago = prompt("ingrese el tipo de pago: " + "\n" +
				                "Opcion 1: Efectivo" + "\n"+
				                "Opcion 2: Tarjeta");

			cantidadProductos = parseInt(cantidadProductos);

			gasto = parseInt(gasto)

			if(cantidadProductos > 2 && gasto < 2000 && tipoDePago == 1) {
				descuentoPorCantidad = gasto * 0.1;
				alert ("El gasto es de: $" + descuentoPorCantidad);
				
			}
			


			if(cantidadProductos > 2 && gasto < 2000 && tipoDePago == 1) {
				descuentoPorCantidad = gasto * 0.15; 
				alert ("El gasto es de: $" + descuentoPorPrecio);
			}

			if(cantidadProductos > 2 && gasto < 2000 && tipoDePago == 2) {
				descuentoPorCantidad = gasto * 0.1; 
				recargoPorPagoTarjeta = descuentoPorCantidad * 1.1;
				alert ("El gasto es de: $" + recargoPorPagoTarjeta);
			}

			if(cantidadProductos > 2 && gasto < 2000 && tipoDePago == 1) {
				descuentoPorPrecio = gasto * 0.15; 
				alert ("El gasto es de: $" + descuentoPorPrecio);
			}








		









}
