/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
var primerNumero;
var segundoNumero;

 

 primerNumero = numeroUno.value;
 segundoNumero = numeroDos.value;
 
primerNumero = parseInt(primerNumero)
segundoNumero = parseInt(segundoNumero)

 var suma_numeros =parseInt(primerNumero) + parseInt (segundoNumero);
 alert(suma_numeros);
}

