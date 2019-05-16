$(document).ready(function (){
  sessionStorage.clear();
    $.getJSON( "zapato.json", {
      format: "json",
      tags: "zapato"
    }).done(function(data){
      var total = data.length;
      for(var i = 0; i <= total -1; i++){
        var ruta = "img/"+data[i].foto;
        $("#Photos").append( 
        "<div style=\"cursor: pointer\" class=\" col-md-4\">\n\
          <div class=\"card mb-4 shadow-sm\">\n\
          <div style=\"height: 300px\">\n\
          <img  data-id=\" "+i+" \" class=\"card-img-top\" src=\"  "+ ruta +" \" alt=\"Card image cap\">\n\
            </div>\n\
            <div class=\"card-body text-center\">\n\
              <h4 class=\"card-text\"> "+ data[i].nombre +" </h4>\n\
              <h3 style=\"color: #a58999\" class=\"text-center\">"+ data[i].precio +"</h3>\n\
            </div>\n\
          </div>\n\
        </div>" );
      }
    })
});
  

$( "#Photos" ).on("click", ".card-img-top", function() {
  var id= $(this).data("id");
  sessionStorage.setItem("id", id)
  $(location).attr("href", "http://localhost:8080/sitioWeb/producto.html");
});


