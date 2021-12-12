

function regresar() {
    window.location.href = "../index.html";
}


function productosRegistrar() {

    if ($("#productoReference").val() === "" && $("#productoBrand").val() === ""
        && $("#productoCategory").val() === "" && $("#productoMaterial").val() === ""
        && $("#productoDescription").val() === "" && $("#productoAvailability").val() === ""
        && $("#productoPrice").val() === "" && $("#productoQuantity").val() === ""
        && $("#productoPhotography").val() === "") {
        alert("Los campos no pueden estar vacios Vacios");
    } else if ($("#productoReference").val() === "" || $("#productoBrand").val() === ""
        || $("#productoCategory").val() === "" || $("#productoMaterial").val() === ""
        || $("#productoDescription").val() === "" || $("#productoAvailability").val() === ""
        || $("#productoPrice").val() === "" || $("#productoQuantity").val() === ""
        || $("#productoPhotography").val() === "") {
        alert("Los campos no pueden estar vacios Vacios");
    }
    else {
        $.ajax({
            type: 'GET',
            /** 
             * 
             *  url: "http://localhost:8080/api/accessory/"+ $("#productoReference").val(),
             * 
             */
            url: "http://152.70.223.94:8080/api/accessory/"+ $("#productoReference").val(),

            contentType: "application/json;  charset=utf-8",
            dataType: 'json',
            success: function (response) {
                if(response === null ){
                    Register();
                    window.location.reload(true); 
               }
            
                else if($("#productoReference").val() === response.reference ){
                    alert("El producto ya esta registrado");
                    window.location.reload(true); 
                }

            },
        });
    }
}

function productosMostrar(){
    document.getElementById("addProducto").hidden =false;
    document.getElementById("addProducto").style.visibility = "visible";    
    obtenerItems();
    document.getElementById("btnVer").hidden = true;
}

function Register() {   
    let objetoJS = {
        reference: $("#productoReference").val(),
        brand: $("#productoBrand").val(),
        category: $("#productoCategory").val(),
        material: $("#productoMaterial").val(),
        description: $("#productoDescription").val(),
        availability: $("#productoAvailability").val(),
        price: $("#productoPrice").val(),
        quantity: $("#productoQuantity").val(),
        photography: $("#productoPhotography").val()
    }
    console.log("Estoy acá");
    $.ajax({
        type: 'POST',
        /**
         *
         *  	url: "http://localhost:8080/api/accessory/new",
         *  
         */

        
        url:"http://152.70.223.94:8080/api/accessory/new",
        contentType: "application/json;  charset=utf-8",
        dataType: 'json',
        data: JSON.stringify(objetoJS),

        success: function (response) {
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctameente");
        },

        error: function (jqXHR, textStatus, errorThrown) {
            alert("No se guardo correctamente, mire que las categorias esten bien" + errorThrown);


        }
    });
}


function obtenerItems(){


    $.ajax({
    /**
     * 
     *  url: "http://localhost:8080/api/accessory/all",
     * 
     */
    url: "http://152.70.223.94:8080/api/accessory/all",
        
	contentType: "application/json; charset=utf-8",
	dataType: 'json',
	type:'GET',
      
	success:function(response) {
	    console.log(response);
	    $("miResultado").empty();
        for(i=0;i<response.length;i++){
            $("#miResultado").append('<tr>');
            $("#miResultado").append("<td>"+response[i].reference+"</td>");
            $("#miResultado").append("<td> <input type=\"text\" id=\"productosBrand\" class=\"form-control\" value = \""+response[i].brand+"\" val = \""+response[i].brand+"\"/></td>");
            $("#miResultado").append("<td> <input type=\"text\" id=\"productosCategory\" class=\"form-control\" value = \""+response[i].category+"\" val = \""+response[i].category+"\"/></td>");
            $("#miResultado").append("<td> <input type=\"text\" id=\"productosMaterial\" class=\"form-control\" value = \""+response[i].material+"\" val = \""+response[i].material+"\"/></td>");
            $("#miResultado").append("<td> <input type=\"text\" id=\"productosDescription\" class=\"form-control\" value = \""+response[i].description+"\" val = \""+response[i].description+"\"/></td>");

            $("#miResultado").append("<td><select  id=\"productosAvailability\" > <optgroup label=\""+response[i].availability+"\"> <option>"+response[i].availability+"</option></option><option value=\"true\" >True</option> <option value=\"false\">False</option> </optgroup></td>");
            $("#miResultado").append("<td> <input type=\"number\" id=\"productosPrice\" class=\"form-control\" value = \""+response[i].price+"\" val = \""+response[i].price+"\"/></td>");
            $("#miResultado").append("<td> <input type=\"number\" id=\"productosQuantity\" class=\"form-control\" value = \""+response[i].quantity+"\" val = \""+response[i].quantity+"\"/></td>");
            $("#miResultado").append("<td> <input type=\"text\" id=\"productosPhotography\" class=\"form-control\" value = \""+response[i].photography+"\" val = \""+response[i].photography+"\"/></td>");
            $("#miResultado").append("<td><button class=\"btn btn-primary btn-lg\"  id=\"btnEditar\" onclick=\"actualizar('"+response[i].reference+"')\">Editar</button> </td>");
            $("#miResultado").append("<td><button  class=\"btn btn-primary btn-lg\" id=\"btnEliminar\" onclick=\"eliminarItem('"+ response[i].reference +"')\">Eliminar</button></td>");
		    $("#miResultado").append("</tr>");
      
          }	 
	},
	
	error: function(jqXHR, textStatus, errorThrown) {

        console.log("acá"+ response);
	    
	}
    });
}



function eliminarItem(idElemento){
    console.log(idElemento);

    var elemento={
        reference:idElemento
        };
        var dataToSend=JSON.stringify(elemento);
        //JSON= JavaScript Object Notation
        $.ajax({
        dataType:'json',
        data:dataToSend,

        /**  
         * url: "http://localhost:8080/api/accessory/" + idElemento,
         * 
         */

        url: "http://152.70.223.94:8080/api/accessory/" + idElemento,
        type:'DELETE',
        contentType:'application/json',
        success:function(response) {
            alert("Producto con referencia: "+ idElemento + "Ha sido borrado");

        },      
        error: function(jqXHR, textStatus, errorThrown) {
                
        }
        });  
}

function actualizar(idElemento){
    let objetoJS = {
        reference: idElemento,
        brand: $("#productosBrand").val(),
        category: $("#productosCategory").val(),
        material: $("#productosMaterial").val(),
        description: $("#productosDescription").val(),
        availability: $("#productosAvailability").val(),
        price: $("#productosPrice").val(),
        quantity: $("#productosQuantity").val(),
        photography: $("#productosPhotography").val()
    }


    var dataToSend=JSON.stringify(objetoJS);
    //JSON= JavaScript Object Notation
    $.ajax({
	dataType: 'json',
	data:dataToSend,
	contentType:'application/json',
    /**
     * 
     * url: "http://localhost:8080/api/accessory/update",
     * 
     */
     url: "http://152.70.223.94:8080/api/accessory/update",
	type:'PUT',
	
	success:function(response) {
            console.log(response);
            alert(response);

	},

	
	error: function(jqXHR, textStatus, errorThrown) {
            
	}
    });

}