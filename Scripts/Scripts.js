function showResponse(type) {
  let responseText = "";
  switch (type) {
    case "recomendacion":
      responseText =
        "Te recomendamos las zapatillas más vendidas: Modelo A, Modelo B, Modelo C.";
      break;
    case "colores":
      responseText =
        "Los colores más recomendables en esta temporada son el azul, negro y rojo.";
      break;
    case "moda":
      responseText =
        "Las zapatillas de estilo retro y chunky están de moda este año.";
      break;
  }
  document.getElementById("response").innerText = responseText;
}
function SendSuccess() {
  Swal.fire({
    title: "¡Enviado!",
    text: "¡Gracias por tu opinión!",
    icon: "success",
  });
}
function SuccessAlert() {
  Swal.fire({
    title: "¡Pago exitoso!",
    icon: "success",
  });
}
document
  .getElementById("cardPaymentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    SuccessAlert();
    $("#cardModal").modal("hide");
  });
