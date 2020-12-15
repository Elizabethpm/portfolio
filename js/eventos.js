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
    $("#seleccionTema5").toggle("scale");
  });

  var eventoTema5 = $("#mostrar5").click(function () {
    $("#seleccionTema3").toggle("scale");
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
  });

  //Tema2

  $("#mostrar2").click(function () {
    $("#seleccionTema2").show();
    $("#seleccionTema1").hide();
    $("#elegirTema").hide();
  });

  $("#ocultar2").click(function () {
    $("#seleccionTema2").hide();
    $("#elegirTema").show();
  });

  //Tema3

  $("#mostrar3").click(function () {
    $("#seleccionTema3").show();
    $("#seleccionTema1").hide();
    $("#seleccionTema2").hide();
    $("#elegirTema").hide();
  });

  $("#ocultar3").click(function () {
    $("#seleccionTema3").hide();
    $("#elegirTema").show();
  });
  //

  //Tema4
  $("#mostrar4").click(function () {
    $("#seleccionTema4").show();
    $("#seleccionTema1").hide();
    $("#seleccionTema2").hide();
    $("#seleccionTema3").hide();
    $("#elegirTema").hide();
  });

  $("#ocultar4").click(function () {
    $("#seleccionTema4").hide();
    $("#elegirTema").show();
  });

  //Tema5
  $("#mostrar5").click(function () {
    $("#seleccionTema5").show();
    $("#seleccionTema1").hide();
    $("#seleccionTema2").hide();
    $("#seleccionTema3").hide();
    $("#seleccionTema4").hide();
    $("#elegirTema").hide();
  });

  $("#ocultar5").click(function () {
    $("#seleccionTema5").hide();
    $("#elegirTema").show();
  });

  //Tema5
  $("#mostrar6").click(function () {
    $("#seleccionTema6").show();
    $("#seleccionTema1").hide();
    $("#seleccionTema2").hide();
    $("#seleccionTema3").hide();
    $("#seleccionTema4").hide();
    $("#seleccionTema5").hide();
    $("#elegirTema").hide();
  });

  $("#ocultar6").click(function () {
    $("#seleccionTema5").hide();
    $("#elegirTema").show();
  });
});
