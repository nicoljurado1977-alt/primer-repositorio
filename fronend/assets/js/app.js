// ===== Primer mensaje =====
let nombre = "Nicole";
let proyectosTrabajados = 0;
let ciudad = "Cali";
let saludo = "Hola, mi nombre es " + nombre + ", vivo en " + ciudad + " y he trabajado en " + proyectosTrabajados + " proyectos";
console.log(saludo);

const miLugarEnTuMirada = 1;
console.log(miLugarEnTuMirada);
console.log(ciudad);
const comentarios = "Me gusta mucho la ciudad de Cali, es muy bonita y tiene un clima agradable.";
console.log(comentarios);
let barrio = "San Antonio";
console.log(barrio);
const miBarrio = "San Antonio";
console.log(miBarrio);

let usuario2 = "Camila";
let edad = 20;
let publicaciones = 8;
let usuarioActivo = true;
let categoria = "Fachadas";
console.log("usuario: " + usuario2);
console.log("edad: " + edad);
console.log("publicaciones: " + publicaciones);
console.log("usuarioActivo: " + usuarioActivo);
console.log("categoria: " + categoria);

let opiniones = "Me encanta la arquitectura de las fachadas en mi ciudad, especialmente en el barrio de San Antonio.";
console.log(opiniones);
let miBarrioFavorito = "Siloé";
console.log(miBarrioFavorito);
let sentimientos = "Me siento muy feliz viviendo en mi barrio favorito.";
console.log(sentimientos);

// ===== Variables =====
let usuario1 = "Camila";
let proyecto = "Mi lugar en tu mirada";
console.log("Hola, " + usuario1 + ". Bienvenido a: " + proyecto + " en la ciudad de " + ciudad + ".");

// ===== Operadores =====
let fotografias = 12;
let nuevasFotografias = 7;
let eliminadas = 3;
let colecciones = 2;

// 1. Total de publicaciones
let totalFotografias = fotografias + nuevasFotografias;
console.log("Total de fotografías: " + totalFotografias); // 19

// 2. Después de eliminar 3
let fotografiasRestantes = totalFotografias - eliminadas;
console.log("Fotografías restantes: " + fotografiasRestantes); // 16

// 3. Repartidas en 2 colecciones iguales
let porColeccion = fotografiasRestantes / colecciones;
console.log("Fotografías por colección: " + porColeccion); // 8

// ===== Condicionales =====
let publicar = true;
if (publicar) {
    console.log("Si estás registrada, puedes publicar tu contenido.");
} else {
    console.log("No estás registrado, no puedes publicar tu contenido. Debes iniciar sesión.");
}

// ===== Comparadores =====
let detallesEncontrados = 5;
if (detallesEncontrados >= 5) {
    console.log("Misión completada.");
} else {
    console.log("Misión incompleta. Tienes que encontrar más detalles.");
}

let detallesEncontrados1 = 2;
if (detallesEncontrados1 >= 5) {
    console.log("Misión completada.");
} else {
    console.log("Misión incompleta. Tienes que encontrar más detalles.");
}

// ===== Ciclo for =====
for (let i = 0; i < 10; i++) {
    console.log("Publicacion numero: " + i);
}

// ===== Ciclo while =====
let publicacionNumero = 0;
while (publicacionNumero < 5) {
    console.log("Publicacion numero: " + publicacionNumero);
    publicacionNumero++;
}

// ===== Funciones =====
function saludar(nombreUsuario) {
    console.log("Hola, " + nombreUsuario + ". Bienvenido a tu perfil.");
}
saludar("Maria");

function sumar(a, b) {
    return a + b;
}
let resultado = sumar(12, 7);
console.log("Resultado de sumar(12, 7): " + resultado); // 19

// ===== Arrays =====
let proyectos = ["Mi lugar en tu mirada", "Fotografia de paisajes", "Retratos"];
console.log("proyectos.includes(): " + proyectos.includes("Fotografia de paisajes")); // true
console.log("proyectos[0]: " + proyectos[0]); // "Mi lugar en tu mirada"
console.log("proyectos.push(): " + proyectos.push("Fotografia de moda")); // 4
console.log("proyectos.pop(): " + proyectos.pop()); // "Fotografia de moda"
console.log("proyectos.length: " + proyectos.length); // 3

// ===== Objetos =====
let publicacion = {
    titulo: "El fantasma de la iglesia La Ermita",
    descripcion: "Fotografía tomada desde un ángulo curvo, con un filtro azulado; se movió un poco durante el proceso.",
    categoria: "Retratos",
    barrio: "Centro",
    emocion: "Felicidad",
    nombreUsuario: "Maria"
};
console.log(publicacion.titulo);
console.log(publicacion.nombreUsuario);