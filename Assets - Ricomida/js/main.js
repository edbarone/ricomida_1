$( function () {
$( '[data-toggle="tooltip"]' ).tooltip()
})

$("#enviarCorreo").click(function() {
alert("El correo fue enviado correctamente...");
});

$( "#Preparacion" ).dblclick( function (){
$( this ).css({
"color" : "yellow" ,
});
});

$( "#Ingredientes" ).dblclick( function (){
$( this ).css({
"color" : "red" ,
});
});

$('.card-title').click(function () {
$('.card').toggle("slow");
});
