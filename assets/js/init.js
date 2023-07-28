document.addEventListener('DOMContentLoaded', function() {
    var elemsparallax = document.querySelectorAll('.parallax');
    var instancesparallax = M.Parallax.init(elemsparallax);
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {indicators:true});
    var elemssidenav = document.querySelectorAll('.sidenav');
    var instancessidenav = M.Sidenav.init(elemssidenav);
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems,);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.materialboxed').materialbox();
  });


  function validarFormulario() {
    var nombre = document.getElementById("nombre").value.trim();
    var apellido = document.getElementById("apellido").value.trim();
    var email = document.getElementById("email").value.trim();
    var men= document.getElementById("mensaje").value.trim();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (nombre === "" || apellido === "" || email === "" || men===""){
        alert("Por favor, completa todos los campos.");
        return false; 
    }
    else if (!emailRegex.test(email)) {
        alert("Por favor, ingresa una dirección de correo electronico valida.");
        return false; 
    }
    else{
        alert("Se ha enviado tu mensaje");
        document.getElementById("contact-form").reset();
        return true;
    }

 }

