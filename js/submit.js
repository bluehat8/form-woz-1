function comprobar() {
    var pulsado = false;//variable de comprobación
    var opciones = document.formulario.tipo; //array de elementos
    var elegido = -1; //número del elemento elegido en el array
    for (i=0;i<opciones.length;i++) { //bucle de comprobación
          if (opciones[i].checked == true) {
          pulsado = true 
          elegido = i //número del elemento elegido en el array
          }
        }
    if (pulsado == true) { //mensaje de formulario válido
       miOpcion = opciones[elegido].value;
       //alert("Has elegido la opción: " + miOpcion + "\n El formulario ha sido enviado.")
       window.location.href('registroProveedor1.html');
       }
    else { //mensaje de formulario no válido.
       alert("no has elegido ninguna opción. \n Elige una opción para que el formulario pueda ser enviado")
       return false //el formulario no se envía.
       }
    }



    