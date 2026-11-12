
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


//section categorias//


// SECTION CATEGORÍAS //

// 1. Seleccionamos los botones
const botonNaturaleza = document.getElementById("btn-naturaleza");
const botonArquitectura = document.getElementById("btn-arquitectura");
const botonTexturas = document.getElementById("btn-texturas");
const botonMomentos = document.getElementById("btn-momentos");

// 2. Seleccionamos los espacios donde mostraremos el contenido
const mensajeCategoria = document.getElementById("mensaje-categoria");

const publicacionesCategorias = document.getElementById("publicaciones-categorias");

// 3. Función para cambiar el color de los botones
function seleccionarCategoria(botonSeleccionado) {

    botonNaturaleza.classList.remove("activo");
    botonArquitectura.classList.remove("activo");
    botonTexturas.classList.remove("activo");
    botonMomentos.classList.remove("activo");

    botonSeleccionado.classList.add("activo");

}

// 4. Función para mostrar las publicaciones
function mostrarPublicaciones(titulo, descripcion, imagen) {

    publicacionesCategorias.innerHTML = `
    <article class="experience-card">
  
<img 
                src="${imagen}" 
                alt="${titulo}"
            >

            <div class="card-body">
                <h3>${titulo}</h3>
                <p>${descripcion}</p>
            </div>

        </article>
    `;


}

// 5. Evento del botón Naturaleza
botonNaturaleza.addEventListener("click", function() {

    seleccionarCategoria(botonNaturaleza);

    mostrarPublicaciones(
        "Naturaleza en Cali",
        "Descubre los espacios verdes, árboles y paisajes de la ciudad.",
        "./assets/img/parque-ingenio.jpg"
    );

});

// 6. Evento del botón Arquitectura
botonArquitectura.addEventListener("click", function() {

    seleccionarCategoria(botonArquitectura);

    mostrarPublicaciones(
        "Arquitectura en Cali",
        "Explora los edificios y estructuras que definen el paisaje urbano de la ciudad.",
        "./assets/img/teatro-municipal.jpg"
    );

});

// 7. Evento del botón Texturas urbanas
botonTexturas.addEventListener("click", function() {

    seleccionarCategoria(botonTexturas);

    mostrarPublicaciones(
        "Texturas en Cali",
        "Descubre las texturas urbanas de la ciudad.",
        "./assets/img/textura-calle.jpg"
    );

});

// 8. Evento del botón Momentos cotidianos
botonMomentos.addEventListener("click", function() {

    seleccionarCategoria(botonMomentos);

    mostrarPublicaciones(
        "Momentos cotidianos en Cali",
        "Descubre las historias y experiencias que ocurren en la vida diaria de la ciudad.",
        "./assets/img/momentos-cotidianos.jpg"
    );

});

const corazon = document.querySelector(".heart");


const corazones = document.querySelectorAll(".heart");

// Recorremos cada corazón
corazones.forEach(function(corazon) {

    corazon.addEventListener("click", function() {

        if (corazon.textContent.trim() === "♡") {
            corazon.textContent = "♥";
            corazon.style.color = "red";
        } else {
            corazon.textContent = "♡";
            corazon.style.color = "";
        }

    });

});
/* Interacción de las categorías del mapa */

const categoriasMapa = document.querySelectorAll("#categorias-mapa .category");

categoriasMapa.forEach(function(categoria) {

    categoria.addEventListener("click", function() {

        // Quitamos la selección anterior
        categoriasMapa.forEach(function(elemento) {
            elemento.classList.remove("activo");
        });

        // Activamos la categoría seleccionada
        categoria.classList.add("activo");

       
    });

});