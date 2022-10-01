function enviar() {

    var response = grecaptcha.getResponse();
    if (response.length != 0) {

        const nombre = $("#nombre").val()
        const telefono = $("#telefono").val()
        const correo = $("#correo").val()
        const mensaje = $("textarea#mensaje").val()

        if(nombre != "" && correo != "" && mensaje != "" && telefono != ""){
            $.ajax({
                url: 'app/mail.php',
                type: 'post',
                data: {'nombre': nombre, 'correo': correo, 'telefono': telefono, 'mensaje': mensaje},
                dataType: 'text',
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                success: function (response) {
                    $("#nombre").val('')
                    $("#telefono").val('')
                    $("#correo").val('')
                    $("textarea#mensaje").val('')
                    document.getElementById('status').innerHTML = "";
                    Swal.fire(
                        {
                        title: "Gracias por enviarnos tu correo",
                        text: "Espera nuestra respuesta pronto",
                        icon: 'success',
                        confirmButtonText: "Ok",
                        iconColor: '#032F3C',
                        confirmButtonColor: "#032F3C",
                        }
                    )
                
                },
                error: function(xhr, status, error) {
                    $("#nombre").val('')
                    $("#correo").val('')
                    $("#telefono").val('')
                    $("textarea#mensaje").val('')
                    document.getElementById('status').innerHTML = "";
                    
                }
            });
        }
        else{
            Swal.fire(
                {
                title: "Fallo al enviar email",
                text: "Debes de llenar todos los campos",
                icon: 'error',
                confirmButtonText: "Ok",
                iconColor: 'red',
                confirmButtonColor: "red",
                }
            )
        }
        

    }
            
    else {
        document.getElementById('status').innerHTML = "¡Debes aceptar el captcha!";
    }

    
}