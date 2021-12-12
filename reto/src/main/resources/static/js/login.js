function autenticar() {
    if ($("#userEmail").val() === "" && $("#userPassword").val() === "") {
        alert("Los campos no pueden estar vacios Vacios");
    } else if ($("#userEmail").val() === "" || $("#userPassword").val() === "") {
        alert("Los campos no pueden estar vacios Vacios");
    }
    else {
        let objetoJS = {
            email: $("#userEmail").val(),
            password: $("#userPassword").val()
        };

        $.ajax({
            type: 'GET',
            /** 
             * 
             * url: "http://localhost:8080/api/user/" + $("#userEmail").val() + "/" + $("#userPassword").val(),   
             */

             url:"http://http://152.70.223.94:8080/api/user/" + $("#userEmail").val() + "/" + $("#userPassword").val(),
             
            contentType: "application/json;  charset=utf-8",
            dataType: 'json',

            success: function (response) {
                if (response.id === null) {
                    alert("Usuario o contraseña invalido, o registrese para continuar. Gracias. ");
                }
                else {                    
                    alert("Usuario y contraseña validos");
                    pasoProductos();
                }
            },
        });
    }
}

function pasoProductos() {
window.location.href = "html/productos.html";
}

