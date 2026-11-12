
const titulo = document.getElementById("titulo-principal");

const mensaje = document.getElementById("mensaje-bienvenida");

titulo.textContent = "Descubre Cali desde la otra mirada";

mensaje.textContent = "Cada  pequeño aspecto de Cali tiene una historia que contar.";

titulo.style.fontSize = "45px";

titulo.style.color = "#c8f4cf";

mensaje.style.fontSize = "15px";
mensaje.style.color = "#d7f0f6";
mensaje.style.fontStyle = "italic";
mensaje.style.textAlign = "center";

//Botones de la sección hero//
// 1. Seleccionamos el botón
const botonLogin = document.getElementById("btn-iniciar-sesion");

botonLogin.addEventListener("click", function() {

    if (botonLogin.textContent === "Iniciar sesión") {

        botonLogin.textContent = "¡Bienvenido!";

    } else {

        botonLogin.textContent = "Iniciar sesión";

    }

});
