
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const nombre = form.querySelector("#nombre").value.trim();
      const correo = form.querySelector("#correo").value.trim();
      const contraseña = form.querySelector("#contraseña").value.trim();

      if (nombre === "" || correo === "" || contraseña === "") {
        alert("Por favor, llena todos los campos.");
      } else {
        alert("¡Registro exitoso!");
        form.reset();
      }
    });
  }
});



