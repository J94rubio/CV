console.log("cargando javascript");

//funcion guardar "Enviar"

function save() {
    // Obtener los valores de los campos del formulario
    let nombre = document.getElementById("nombreapellido");
    let correo = document.getElementById("correoelectronico");
    let telefono = document.getElementById("telefono");
    let mensaje = document.getElementById("mensaje");
    let contacto = document.querySelector('input[name="contacto"]:checked');
    let horario = document.getElementById("horario-select");

    // Crear un objeto con los datos del formulario
    let datosFormulario = {
        nombreapellido: nombre.value,
        correoelectronico: correo.value,
        telefono: telefono.value,
        mensaje: mensaje.value,
        contacto: contacto.value,
        horario: horario.value
    };

    console.log(datosFormulario);

    let url = "http://localhost:8000/api/form";
    let params = {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(datosFormulario),
    }

    // Realizar la solicitud POST a la API de Laravel
    fetch(url,params).then((response) =>{

        console.log(response);
        console.log(response.json());
    
        if(response.status == 201){
            alert("Gracias!! Pronto me estare comunicando contigo");
            limpiarFormulario();
        }else{
    
            alert("Error al enviar formulario !!");
    
        }
    });
    
    return true;
}

function limpiarFormulario() {
    document.getElementById("nombreapellido").value = "";
    document.getElementById("correoelectronico").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("mensaje").value = "";
    document.getElementById("radio-whatsapp").checked = true;
    document.getElementById("horario-select").selectedIndex = 0;
}

 document.getElementById("enviar").addEventListener("click", save);