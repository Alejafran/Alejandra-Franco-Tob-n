
var total;

$(document).ready(function (){
    
    if (typeof(Storage) !== 'undefined') {
        $.getJSON( "zapato.json", {
            format: "json",
            tags: "zapato"
          }).done(function(data){
            // datos principales
            total = data.length;
            var session = sessionStorage.getItem("id");
            for(var i = 0; i <= total -1; i++){
                if(i == session){
                    var ruta = "img/"+data[i].foto;
                $("#imgProduct").html("<img src=\" "+ruta+" \" alt=\"\"> ");
                $("#datos").append("<h3>"+data[i].nombre+"</h3>\n\
                <h4>"+data[i].precio+"</h4>\n\
                <h6 class=\"text-muted\">Cod. de Producto: "+data[i].referencia+"</h6>");
                }
            }

            // completa tu look

            var lista = ramdon(total);
            for(var i = 0; i <= 3 ; i ++){
                var dato = lista[i];
                $("#Look").append("<div class=\" col-3\">\n\
                <div class=\"zise2\">\n\
                <img class=\"card-img-top\" src=\"img/"+data[dato].foto+"\" alt=\"Card image cap\">\n\
                </div>\n\
                <div class=\"card-body text-center\">\n\
                  <p class=\"card-title\">"+data[dato].nombre+"</p>\n\
                  <p class=\"card-text\">"+data[dato].precio+"</p>\n\
                  <a data-id=\" "+dato+" \" href=\"#imgProduct\" class=\"btn btn-secondary\">Go somewhere</a>\n\
                </div>\n\
                </div>");
            }

            // recomendados
            for(var i = 4; i <= 7 ; i ++){
                var dato2 = lista[i];
                $("#recomendado").append("<div class=\" col-3\">\n\
                <div class=\"zise2\">\n\
                    <img class=\"card-img-top\" src=\"img/"+data[dato2].foto+"\" alt=\"Card image cap\">\n\
                </div>\n\
                    <div class=\"card-body text-center\">\n\
                      <p class=\"card-title\">"+data[dato2].nombre+"</p>\n\
                      <p class=\"card-text\">"+data[dato2].precio+"</p>\n\
                    </div>\n\
                  </div>");
            }


          })
    } else{
        $(location).attr("href", "http://localhost:8080/sitioWeb/gallery.html");
    }
    
});
  
function ramdon(total){
    var lista = new Array;
    for(var i = 0; i <= total; i++){
        lista.push(i);
    }
    lista = lista.sort(function() {return Math.random() - 0.5});

    return lista;
}

$( "#Look" ).on("click", ".btn-secondary", function() {
    
  var id= $(this).data("id");
  console.log(id);
  sessionStorage.setItem("id", id)
  $(location).attr("href", "http://localhost:8080/sitioWeb/producto.html");
});