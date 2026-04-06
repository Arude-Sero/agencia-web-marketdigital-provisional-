document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault();

  let nombre = document.getElementById("nombre").value;
  let correo = document.getElementById("correo").value;
  let mensaje = document.getElementById("mensaje");

  // Validación básica (nivel medio)
  if (nombre === "" || correo === "") {
    mensaje.innerText = "Por favor completa los campos";
    mensaje.style.color = "red";
    return;
  }

  // Validación simple de correo
  if (!correo.includes("@")) {
    mensaje.innerText = "Correo no válido";
    mensaje.style.color = "red";
    return;
  }

  // Éxito
  mensaje.innerText = "✔ Has enviado el formulario correctamente ✔";
  mensaje.style.color = "green";
});