function registro(){ 
let intentos = 0
let identificar = true
let maxIntentos = 3

do{ 
    let usuario = prompt("Ingresa tu usuario")
    if(usuario === null || usuario === ""){
        alert("Error, vuelva a intentarlo")
     }
    let clave = prompt ("Ingresa tu clave, tienes "  + ( maxIntentos - intentos) + " intentos restantes!")
    if((usuario === "juan25"  && clave === "1234") && intentos <= 3) {
        alert ("Bienvenido/a " + usuario)
        identificar = false
        break
     }
   else{
        alert("Usuario y/o clave no reconocida,vuelva a intentarlo")
        intentos++
    if (intentos>3){ 
        alert("Supero los 3 intentos!")
      break
    }
}
}
while(identificar === true
)
}
registro()