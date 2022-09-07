
let cantidad = prompt(`Vamos a calcular el promedio de edad de tus mascotas. Ingresá cuantas mascotas tenés.`)
let nombres = prompt(`Ingresá sus nombres`)
let eM; //(eM = Edad de las mascotas). Acá se registran las edades.
let sE = 0; //(sE= Sumatoria de edades). Acá se acumulan.
let n; //Esto para que muestre el número correctamente.

function sumar(num1, num2) {
   const resultado = num1 + num2 //Agregué una funcion para sumar.
   return resultado;
} 

function pedirDatosMascota() {
   const edad = parseInt(prompt(`Ingresá la edad en años de tu mascota número `+n)); //Función para pedir datos.
   return edad;
} 

function mostrarPromedio() {
   
   alert(`${nombres} llevan haciéndote feliz ${sE/cantidad} años en promedio. Dales sus buenas caricias por éso =)`)

   //Función para mostrar promedio.
}


for(n=1;n<=cantidad;){
    eM = pedirDatosMascota();

    if (isNaN(eM)) {
        alert('No es un número'); //Agregué la alerta por ingresar un string acompañado de un condicional.

      } else {
         sE = sumar(sE, eM) 
         n++
   }
    
}

mostrarPromedio();

const Felicitaciones = ["¡Tú y tus mascotas son geniales!", "¡Nada como los buenos amigos!", "¡Que los miaus y los woofs te acompañen!"]; //Incorporé un array para guardar las felicitaciones si llegase a tocar un promedio justo!

if (sE/cantidad===2){
   console.log(Felicitaciones[0])
} else if (sE/cantidad===4){
   console.log(Felicitaciones[1])
} else if (sE/cantidad===6){
   console.log(Felicitaciones[2])
} else {console.log("¡Que sean felices por siempre juntos!")}

console.log( "En éste array existían " +Felicitaciones.length +" Felicitaciones posibles y te tocó la correspondiente al promedio de edad " + `${sE/cantidad}`); //Utilicé la propiedad "lenght" para imprimir por consola la cantidad de felicitaciones contenidas en el array


