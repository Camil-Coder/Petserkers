//variables globales
let ataqueJugador;
let ataqueEnemigo;
let estadoSeleccionPetserker;
let resultadoCombate;
let vidasJugador = 3;
let vidasEnemigo = 3;


//Arrays
function listaPetserkers(num) {
    var petserkers = ['cropo', 'lunetai', 'plichustan', 'floki', 'yinyin', 'minihen'];
    return petserkers[num];
};
function listaAtaquesPetserkers(numListaAtaques) {
    let ataques = ['FUEGO🔥', 'AGUA💧', 'TIERRA🌱', 'VIENTO🌪️'];
    return ataques[numListaAtaques];
}
function listaResultadoCombate(numListaCombate) {
    let resultado = ['Ganaste 🏆', 'Perdiste 💩', 'Empate 👾'];
    return resultado[numListaCombate];
}
function listaMensajes(numListaMensajes) {
    let mensajes = [`Tu Petserker ataco con ${ataqueJugador},
    la mascota del enemigo ataco con ${ataqueEnemigo} - ${resultadoChoqueAtaques()}`,
        ' No has elegido un petserker 👾 con el que atacar 🤬 ',
        ' 🎉¡Has Ganado el duelo entre petserkers!🎉',
        ' 😵‍💫¡Has Perdido el duelo entre petserkers!😵‍💫'];
    return mensajes[numListaMensajes];
}
//Aleatoriedad
function aleatorio(max, min) {
    return resultado = Math.floor(Math.random() * (max - min + 1) + 1);
}
//Crear mensajes
function crearMensaje(mensaje) {
    let mensajeAtaques = document.getElementById('mensajes');
    let parrafo = document.createElement('p');
    parrafo.innerHTML = mensaje;
    mensajeAtaques.appendChild(parrafo);
};
//reiniciar juego 
function reiniciarJuego() {
    location.reload();
}
//dshabilitar botones
function desabilidarBotones(){
    btnFuego = document.getElementById('btn-fuego').disabled = true;
    btnAgua = document.getElementById('btn-agua').disabled = true;
    btnTierra = document.getElementById('btn-tierra').disabled = true;
    btnViento = document.getElementById('btn-viento').disabled = true;
    btnReiniciar = document.getElementById('reiniciar').style.display = 'block';
}


//************************************************************************/
function iniciarJuego() {
    let sectionSeleccionAtaque = document.getElementById('sleccion-ataque');
    let btnPetserker = document.getElementById('btn-petserker');
    let btnFuego = document.getElementById('btn-fuego');
    let btnAgua = document.getElementById('btn-agua');
    let btnTierra = document.getElementById('btn-tierra');
    let btnViento = document.getElementById('btn-viento');
    let btnReiniciar = document.getElementById('reiniciar');

    //addEvent-ataques
    btnFuego.addEventListener('click', ataqueFuego);
    btnAgua.addEventListener('click', ataqueAgua);
    btnTierra.addEventListener('click', ataqueTierra);
    btnViento.addEventListener('click', ataqueViento);
    //addEvent-seleccion petserkers
    btnPetserker.addEventListener('click', sleccionarPetserkerJugador);
    //addEvent-Reiniciar Juego
    btnReiniciar.addEventListener('click', reiniciarJuego);
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
    sectionSeleccionAtaque = document.getElementById('sleccion-ataque').style.display = 'block';
    sectionSeleccionPetserker = document.getElementById('seleccion-Petserker').style.display = 'none';
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
    if (estadoSeleccionPetserker == true) {
        ataqueAleatorio = aleatorio(4, 1);
        if (ataqueAleatorio == 4) {
            ataqueEnemigo = listaAtaquesPetserkers(0)
        } else {
            ataqueEnemigo = listaAtaquesPetserkers(ataqueAleatorio);
        };
        crearMensaje(listaMensajes(0));
        descuentoDeVidas();
        revisarVidas();
    } else {
        crearMensaje(listaMensajes(1));
    };


};

function resultadoChoqueAtaques() {
    if (ataqueJugador == listaAtaquesPetserkers(0) && ataqueEnemigo == listaAtaquesPetserkers(3) ||
        ataqueJugador == listaAtaquesPetserkers(1) && ataqueEnemigo == listaAtaquesPetserkers(0) ||
        ataqueJugador == listaAtaquesPetserkers(2) && ataqueEnemigo == listaAtaquesPetserkers(1) ||
        ataqueJugador == listaAtaquesPetserkers(3) && ataqueEnemigo == listaAtaquesPetserkers(2)) {
        //ganar
        return resultadoCombate = listaResultadoCombate(0);
    } else if (ataqueJugador == ataqueEnemigo ||
        ataqueJugador == listaAtaquesPetserkers(0) && ataqueEnemigo == listaAtaquesPetserkers(2) ||
        ataqueJugador == listaAtaquesPetserkers(1) && ataqueEnemigo == listaAtaquesPetserkers(3) ||
        ataqueJugador == listaAtaquesPetserkers(2) && ataqueEnemigo == listaAtaquesPetserkers(0) ||
        ataqueJugador == listaAtaquesPetserkers(3) && ataqueEnemigo == listaAtaquesPetserkers(1)) {
        //empatar
        return resultadoCombate = listaResultadoCombate(2);
    } else {
        //perder
        return resultadoCombate = listaResultadoCombate(1);
    }

};



function descuentoDeVidas() {
    let spanVidasJugador = document.getElementById('vidaPetserkerJugador');
    let spanVidasEnemigo = document.getElementById('vidaPetserkerEnemigo');
    if (resultadoCombate == listaResultadoCombate(0)) {
        vidasEnemigo = vidasEnemigo - 1;
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    } else if (resultadoCombate == listaResultadoCombate(1)) {
        vidasJugador = vidasJugador - 1;
        spanVidasJugador.innerHTML = vidasJugador;
    }
};

function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensaje(listaMensajes(2));
        desabilidarBotones();
    } else if (vidasJugador == 0) {
        crearMensaje(listaMensajes(3));
        desabilidarBotones();
    }
};



window.addEventListener('load', iniciarJuego);//evento para escuchar cuando el navegador esta cargado al 100%
