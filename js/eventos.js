$(document).ready(function () {
  //Animaciones Jquery
  var eventoTema1 = $("#mostrar1").click(function () {
    $("#seleccionTema1").toggle("scale");
  });

  var eventoTema2 = $("#mostrar2").click(function () {
    $("#seleccionTema2").toggle("scale");
  });

  var eventoTema3 = $("#mostrar3").click(function () {
    $("#seleccionTema3").toggle("scale");
  });

  var eventoTema4 = $("#mostrar4").click(function () {
    $("#seleccionTema4").toggle("scale");
  });

  var eventoTema5 = $("#mostrar5").click(function () {
    $("#seleccionTema5").toggle("scale");
  });

  var eventoTema6 = $("#mostrar6").click(function () {
    $("#seleccionTema6").toggle("scale");
  });

  //Ocultar
  $("#seleccionTema1").hide();
  $("#seleccionTema2").hide();
  $("#seleccionTema3").hide();
  $("#seleccionTema4").hide();
  $("#seleccionTema5").hide();
  $("#seleccionTema6").hide();

  //

  $("#mostrar1").click(function () {
    $("#seleccionTema1").show();
    $("#seleccionTema2").hide();
    $("#seleccionTema3").hide();
    $("#header").hide();
    $("#elegirTema").hide();
  });

  $("#ocultar1").click(function () {
    $("#seleccionTema1").hide();
    $("#elegirTema").show();
    $("#header").show();
  });

  //Tema2

  $("#mostrar2").click(function () {
    $("#seleccionTema2").show();
    $("#seleccionTema1").hide();
    $("#header").hide();
    $("#elegirTema").hide();
  });

  $("#ocultar2").click(function () {
    $("#seleccionTema2").hide();
    $("#elegirTema").show();
    $("#header").show();
  });

  //Tema3

  $("#mostrar3").click(function () {
    $("#seleccionTema3").show();
    $("#seleccionTema1").hide();
    $("#seleccionTema2").hide();
    $("#header").hide();
    $("#elegirTema").hide();
  });

  $("#ocultar3").click(function () {
    $("#seleccionTema3").hide();
    $("#elegirTema").show();
    $("#header").show();
  });
  //

  //Tema4
  $("#mostrar4").click(function () {
    $("#seleccionTema4").show();
    $("#seleccionTema1").hide();
    $("#seleccionTema2").hide();
    $("#seleccionTema3").hide();
    $("#header").hide();
    $("#elegirTema").hide();
  });

  $("#ocultar4").click(function () {
    $("#seleccionTema4").hide();
    $("#elegirTema").show();
    $("#header").show();
  });

  //Tema5
  $("#mostrar5").click(function () {
    $("#seleccionTema5").show();
    $("#seleccionTema1").hide();
    $("#seleccionTema2").hide();
    $("#seleccionTema3").hide();
    $("#seleccionTema4").hide();
    $("#header").hide();
    $("#elegirTema").hide();
  });

  $("#ocultar5").click(function () {
    $("#seleccionTema5").hide();
    $("#elegirTema").show();
    $("#header").show();
  });

  //Tema6
  $("#mostrar6").click(function () {
    $("#seleccionTema6").show();
    $("#seleccionTema1").hide();
    $("#seleccionTema2").hide();
    $("#seleccionTema3").hide();
    $("#seleccionTema4").hide();
    $("#seleccionTema5").hide();
    $("#header").hide();
    $("#elegirTema").hide();
  });

  $("#ocultar6").click(function () {
    $("#seleccionTema6").hide();
    $("#elegirTema").show();
    $("#header").show();
  });

  //Scroll para subir al inicio de la web
  $(".btn-subir").click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      800
    );

    return false;
  });

  //animando boton ocultar #1
  var BotonCerrar = $("#ocultar1");
  BotonCerrar.click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 800,
      },
      800
    );
  });

  //animando boton ocultar #2
  var BotonCerrar = $("#ocultar2");
  BotonCerrar.click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 800,
      },
      800
    );
  });

  //animando boton ocultar #3
  var BotonCerrar = $("#ocultar3");
  BotonCerrar.click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 800,
      },
      800
    );
  });

  //animando boton ocultar #4
  var BotonCerrar = $("#ocultar4");
  BotonCerrar.click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 800,
      },
      800
    );
  });

  //animando boton ocultar #5
  var BotonCerrar = $("#ocultar5");
  BotonCerrar.click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 800,
      },
      800
    );
  });

  //animando boton ocultar #6
  var BotonCerrar = $("#ocultar6");
  BotonCerrar.click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 800,
      },
      800
    );
  });

  let animado = document.querySelectorAll(".animado");

  function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;
    for (var i = 0; i < animado.length; i++) {
      let alturaAnimado = animado[i].offsetTop;
      if (alturaAnimado - 400 < scrollTop) {
        animado[i].style.opacity = 1;
        animado[i].classList.add("mostrarArriba");
      }
    }
  }

  window.addEventListener("scroll", mostrarScroll);
});
