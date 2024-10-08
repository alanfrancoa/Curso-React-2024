// Operador ternario

/*let mensaje = '';
if (activo){
    mensaje = 'Activo';
    } else {
        mensaje = 'Inactivo';
} */

        const activo = true;
        //const mensaje = (activo) ? 'Activo' : 'Inactivo'; //Si activo es true -> mensaje almacena 'Activo', caso contrario almacena 'Inactivo'.
        
        const mensaje = activo && 'Activo'; //Si activo es true -> mensaje almacena 'Activo'.
        
        console.log(mensaje);