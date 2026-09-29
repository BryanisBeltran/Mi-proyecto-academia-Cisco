// Referencias a los elementos del modal
const modal = document.getElementById('modal-interactivo');
const contenedorJuego = document.getElementById('juego-contenedor');
const btnCerrar = document.getElementById('cerrar-modal');

// Función para abrir el modal con contenido personalizado
function abrirJuego(htmlContenido) {
    contenedorJuego.innerHTML = htmlContenido;
    modal.classList.remove('modal-oculto');
    modal.classList.add('modal-visible');
}

// Función para cerrar el modal
btnCerrar.addEventListener('click', () => {
    modal.classList.remove('modal-visible');
    modal.classList.add('modal-oculto');
});

// --- CURSO 1: SUMAR ---
document.getElementById('btn-sumar').addEventListener('click', () => {
    abrirJuego(`
        <h2 style="color: #ff5964;">¡A Sumar! 🍎</h2>
        <img src="manzanas.jpg" alt="Manzanas" class="img-juego">
        <p style="font-size: 1.2rem;">Si tienes 3 manzanas y te regalan 2 más, ¿cuántas tienes en total?</p>
        <p style="font-size: 2rem; margin: 10px 0;">🍎🍎🍎 + 🍎🍎 = ?</p>
        <input type="number" id="respuesta-suma" class="input-juego">
        <br>
        <button class="btn-card" style="background-color: #ff5964;" onclick="comprobarSuma()">Revisar</button>
        <p id="mensaje-suma" class="mensaje-resultado"></p>
    `);
});

window.comprobarSuma = function() {
    const respuesta = document.getElementById('respuesta-suma').value;
    const mensaje = document.getElementById('mensaje-suma');
    if (respuesta == 5) {
        mensaje.textContent = "¡Correcto! Eres un genio. 🎉";
        mensaje.style.color = "#2eaf7d";
    } else {
        mensaje.textContent = "Casi... ¡Inténtalo de nuevo! 💪";
        mensaje.style.color = "#ff5964";
    }
};

// --- CURSO 2: DIVIDIR ---
document.getElementById('btn-dividir').addEventListener('click', () => {
    abrirJuego(`
        <h2 style="color: #35a7ff;">¡A Dividir! 🍕</h2>
        <img src="pizza.jpg" alt="Pizza" class="img-juego">
        <p style="font-size: 1.2rem;">Hay 4 rebanadas de pizza para repartir entre tú y un amigo. ¿De a cuántas rebanadas les toca a cada uno?</p>
        <p style="font-size: 2rem; margin: 10px 0;">🍕🍕🍕🍕 ÷ 👦👧</p>
        <input type="number" id="respuesta-dividir" class="input-juego">
        <br>
        <button class="btn-card" style="background-color: #35a7ff;" onclick="comprobarDivision()">Revisar</button>
        <p id="mensaje-dividir" class="mensaje-resultado"></p>
    `);
});

window.comprobarDivision = function() {
    const respuesta = document.getElementById('respuesta-dividir').value;
    const mensaje = document.getElementById('mensaje-dividir');
    if (respuesta == 2) {
        mensaje.textContent = "¡Perfecto! Un reparto justo. ⭐";
        mensaje.style.color = "#2eaf7d";
    } else {
        mensaje.textContent = "Mmm... piénsalo bien. Son 2 amigos. 🤔";
        mensaje.style.color = "#ff5964";
    }
};

// --- CURSO 3: ZAPATOS ---
document.getElementById('btn-zapatos').addEventListener('click', () => {
    abrirJuego(`
        <h2 style="color: #fca311;">Paso a Paso 👟</h2>
        <img src="zapatos.jpg" alt="Zapatos" class="img-juego">
        <div style="text-align: left; margin-top: 15px; font-size: 1.1rem;">
            <p><strong>1.</strong> ✖️ Cruza los pasadores y haz un nudo fuerte.</p>
            <p><strong>2.</strong> 🐰 Haz una "orejita de conejo" con un pasador.</p>
            <p><strong>3.</strong> 🔄 Abraza la orejita con el otro pasador.</p>
            <p><strong>4.</strong> 🕳️ Pasa el pasador por el huequito que quedó.</p>
            <p><strong>5.</strong> ✨ ¡Jala fuerte ambas orejitas!</p>
        </div>
        <button class="btn-card" style="background-color: #fca311; margin-top: 20px;" onclick="document.getElementById('cerrar-modal').click()">¡Entendido!</button>
    `);
});

// --- CURSO 4: INTERNET ---
document.getElementById('btn-internet').addEventListener('click', () => {
    abrirJuego(`
        <h2 style="color: #2eaf7d;">Regla de Oro 🛡️</h2>
        <img src="internet.jpg" alt="Internet Seguro" class="img-juego">
        <p style="font-size: 1.1rem; margin-bottom: 20px;">Alguien que no conoces en un juego te pide tu contraseña para darte un regalo. ¿Qué haces?</p>
        <button class="btn-card" style="background-color: #ff5964; margin: 5px;" onclick="alertaInternet(false)">Se la doy 🎁</button>
        <button class="btn-card" style="background-color: #2eaf7d; margin: 5px;" onclick="alertaInternet(true)">¡No se la doy! 🚫</button>
        <p id="mensaje-internet" class="mensaje-resultado"></p>
    `);
});

window.alertaInternet = function(esCorrecto) {
    const mensaje = document.getElementById('mensaje-internet');
    if (esCorrecto) {
        mensaje.textContent = "¡Muy bien! Nunca compartas contraseñas con extraños. 🦸‍♂️";
        mensaje.style.color = "#2eaf7d";
    } else {
        mensaje.textContent = "¡Oh no! Es una trampa. Tu contraseña es un secreto. 🛑";
        mensaje.style.color = "#ff5964";
    }
};
