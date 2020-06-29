var nombre = document.getElementById('nomb');
var ingNom = prompt("¿Cuál es tu nombre?"); 


if (ingNom==null || ingNom=="")
    {
     alert("no has escrito nada");
      location.reload();
     }
     
else
     {
       nombre.innerHTML = "¡Hola, " + ingNom + "!" ;
      }



  
