//variables globales
let ataqueJugador;
let ataqueEnemigo;
let estadoSeleccionPetserker;
let resultadoCombate;


//Arrays
function listaPetserkers(num) {
    var petserkers = ['cropo', 'lunetai', 'plichustan', 'floki', 'yinyin', 'minihen'];
    return petserkers[num];
};
function listaAtaquesPetserkers(numListaAtaques) {
    let ataques = ['FUEGO🔥', 'AGUA💧', 'TIERRA🌱', 'VIENTO🌪️'];
    return ataques[numListaAtaques];
}
//Aleatoriedad
function aleatorio(max, min) {
    return resultado = Math.floor(Math.random() * (max - min + 1) + 1);
}


function iniciarJuego() {
    let btnPetserker = document.getElementById('btn-petserker');
    let btnFuego = document.getElementById('btn-fuego');
    let btnAgua = document.getElementById('btn-agua');
    let btnTierra = document.getElementById('btn-tierra');
    let btnViento = document.getElementById('btn-viento');

    //addEvent-ataques
    btnFuego.addEventListener('click', ataqueFuego);
    btnAgua.addEventListener('click', ataqueAgua);
    btnTierra.addEventListener('click', ataqueTierra);
    btnViento.addEventListener('click', ataqueViento);
    //addEvent-seleccion petserkers
    btnPetserker.addEventListener('click', sleccionarPetserkerJugador);

};

function sleccionarPetserkerJugador() {
    const cropo = document.getElementById('cropo');
    const lunetai = document.getElementById('lunetai');
    const plichustan = document.getElementById('plichustan');
    const floki = document.getElementById('floki');
    const yinyin = document.getElementById('yinyin');
    const minihen = document.getElementById('minihen');
    const petserkerJugador = document.getElementById('PetserkerJugador');

    if (cropo.checked) {
        petserkerJugador.innerHTML = listaPetserkers(0);
        estadoSeleccionPetserker = true;
    }
    else if (lunetai.checked) {
        petserkerJugador.innerHTML = listaPetserkers(1);
        estadoSeleccionPetserker = true;
    }
    else if (plichustan.checked) {
        petserkerJugador.innerHTML = listaPetserkers(2);
        estadoSeleccionPetserker = true;
    }
    else if (floki.checked) {
        petserkerJugador.innerHTML = listaPetserkers(3);
        estadoSeleccionPetserker = true;
    }
    else if (yinyin.checked) {
        petserkerJugador.innerHTML = listaPetserkers(4);
        estadoSeleccionPetserker = true;
    }
    else if (minihen.checked) {
        petserkerJugador.innerHTML = listaPetserkers(5);
        estadoSeleccionPetserker = true;
    } else {
        return (
            estadoSeleccionPetserker = false,
            alert('Por favor selecciona un petserker 🐉')
        );
    };
    seleccionPetserkerEnemigo()
};

function seleccionPetserkerEnemigo() {
    const petserkerEnemiga = document.getElementById('PetserkerEnemiga');
    let petserkerAleatorio = aleatorio(6, 1)
    if (petserkerAleatorio == 6) {
        petserkerAleatorio = 0;
        petserkerEnemiga.innerHTML = 'es ' + listaPetserkers(petserkerAleatorio);
    } else {
        petserkerEnemiga.innerHTML = 'es ' + listaPetserkers(petserkerAleatorio);
    }
};

//Ataque jugador y enemigo
function ataqueFuego() {
    ataqueJugador = listaAtaquesPetserkers(0);
    ataqueAleatorioPetserkerEnemiga();
};
function ataqueAgua() {
    ataqueJugador = listaAtaquesPetserkers(1);
    ataqueAleatorioPetserkerEnemiga();
};
function ataqueTierra() {
    ataqueJugador = listaAtaquesPetserkers(2);
    ataqueAleatorioPetserkerEnemiga();
};
function ataqueViento() {
    ataqueJugador = listaAtaquesPetserkers(3);
    ataqueAleatorioPetserkerEnemiga();
};
function ataqueAleatorioPetserkerEnemiga() {
    ataqueAleatorio = aleatorio(4, 1);
    if (ataqueAleatorio == 4) {
        ataqueEnemigo = listaAtaquesPetserkers(0)
    } else {
        ataqueEnemigo = listaAtaquesPetserkers(ataqueAleatorio);
    };
    crearMensaje();
};

function resultadoChoqueAtaques() {
    if (ataqueJugador == listaAtaquesPetserkers(0) && ataqueEnemigo == listaAtaquesPetserkers(3) ||
        ataqueJugador == listaAtaquesPetserkers(1) && ataqueEnemigo == listaAtaquesPetserkers(0) ||
        ataqueJugador == listaAtaquesPetserkers(2) && ataqueEnemigo == listaAtaquesPetserkers(1) ||
        ataqueJugador == listaAtaquesPetserkers(3) && ataqueEnemigo == listaAtaquesPetserkers(2)) {

        return resultadoCombate = 'Ganaste 🏆';
    } else if (ataqueJugador == ataqueEnemigo ||
        ataqueJugador == listaAtaquesPetserkers(0) && ataqueEnemigo == listaAtaquesPetserkers(2) ||
        ataqueJugador == listaAtaquesPetserkers(1) && ataqueEnemigo == listaAtaquesPetserkers(3) ||
        ataqueJugador == listaAtaquesPetserkers(2) && ataqueEnemigo == listaAtaquesPetserkers(0) ||
        ataqueJugador == listaAtaquesPetserkers(3) && ataqueEnemigo == listaAtaquesPetserkers(1)) {

        return resultadoCombate = 'Empate 👾';
    } else {
        return resultadoCombate = 'Perdiste 💩'
    }
};

function crearMensaje() {
    let mensajeAtaques = document.getElementById('mensajes');
    let parrafo = document.createElement('p');
    if (estadoSeleccionPetserker == true) {
        parrafo.innerHTML = `Tu Petserker ataco con ${ataqueJugador}, la mascota del enemigo ataco con ${ataqueEnemigo} - ${resultadoChoqueAtaques()}`;
        mensajeAtaques.appendChild(parrafo);
    } else {
        parrafo.innerHTML = ` No has elegido un petserker 👾 con el que atacar 🤬`;
        mensajeAtaques.appendChild(parrafo);
    };
};


window.addEventListener('load', iniciarJuego);//evento para escuchar cuando el navegador esta cargado al 100%
