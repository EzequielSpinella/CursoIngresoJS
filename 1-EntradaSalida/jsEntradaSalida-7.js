/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var primerNumero;
var segundoNumero;

 

 primerNumero = numeroUno.value;
 segundoNumero = numeroDos.value;
 
primerNumero = parseInt(primerNumero)
segundoNumero = parseInt(segundoNumero)

 var suma_numeros =parseInt(primerNumero) + parseInt (segundoNumero);
 alert(suma_numeros);
	
}

function restar()
{
	var primerNumero;
var segundoNumero;

 

 primerNumero = numeroUno.value;
 segundoNumero = numeroDos.value;

 primerNumero = parseInt(primerNumero)
 segundoNumero = parseInt(segundoNumero)

var restar =parseInt(primerNumero) - parseInt(segundoNumero);
alert(restar)


}

function multiplicar()
{ 
	var primerNumero;
var segundoNumero;

 

 primerNumero = numeroUno.value;
 segundoNumero = numeroDos.value;

 primerNumero = parseInt(primerNumero)
 segundoNumero = parseInt(segundoNumero)
 var multiplicar=parseInt(primerNumero) * parseInt(segundoNumero);
 alert(multiplicar)
}

function dividir()
{var primerNumero;
var segundoNumero;

 

 primerNumero = numeroUno.value;
 segundoNumero = numeroDos.value;

 primerNumero = parseInt(primerNumero)
 segundoNumero = parseInt(segundoNumero)
 var dividir=parseInt(primerNumero) / parseInt(segundoNumero)
 alert(dividir)
	
}

