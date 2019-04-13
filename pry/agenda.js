$(document).ready(function () {
    $("#btnRegistrar").click(function (e) { 
        e.preventDefault();
        registrar();
    });

    $("body").on("click", ".opcion-eliminar", function (e) {
        e.preventDefault();
        var fila= $(this).parents().get(1);
        fila.remove();
    });
});

function registrar(){
    var nombre= $("#txtnombre").val();
    var correo= $("#txtemail").val();
    var fecha= $("#txtfecha").val();
    var pais= $("#cbopais").val();
    var sexo= $("input:radio[name=rbsexo]:checked").val();

    //creacion de fila
    var fila="";
    fila+="<tr>";
    fila+="<td>"+nombre+"</td>";
    fila+="<td>"+correo+"</td>";
    fila+="<td>"+fecha+"</td>";
    fila+="<td>"+pais+"</td>";
    fila+="<td>"+sexo+"</td>";
    fila+="<td>"+'<button class="btn btn-danger btn-sm opcion-eliminar">X</button>'+"</td>";
    fila+="</tr>";

    //agregar fila a tbody
    $("#tbldatos").append(fila);

    console.log("Nombre: "+nombre);
    console.log("Correo: "+correo);
    console.log("Fecha Nac: "+ fecha);
    console.log("Pais: "+pais);
    console.log("Sexo: "+sexo);
}