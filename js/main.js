//variables globales
let ataqueJugador;
let ataqueEnemigo;
let estadoSeleccionPetserker;
let resultadoCombate;
let vidasJugador = 3;
let vidasEnemigo = 3;


//Arrays
function listaPetserkers(num) {
    var petserkers = ['cropo', 'lunetai', 'plichustan', 'floki', 'yinyin', 'robernik'];
    return petserkers[num];
};
function listaAtaquesPetserkers(numListaAtaques) {
    let ataques = ['atcFuego', 'atcAgua', 'atcTierra', 'atcViento'];
    return ataques[numListaAtaques];
}
function listaResultadoCombate(numListaCombate) {
    let resultado = ['Ganaste 🏆', 'Perdiste 💩', 'Empate 👾'];
    return resultado[numListaCombate];
}
/* function listaMensajes(numListaMensajes) {
    let mensajes = ['cielo','ades'];
    return mensajes[numListaMensajes];
} */
//Aleatoriedad
function aleatorio(max, min) {
    return resultado = Math.floor(Math.random() * (max - min + 1) + 1);
}

//reiniciar juego 
function reiniciarJuego() {
    location.reload();
}
//dshabilitar botones
function desabilidarBotones() {
    btnsAtaques = document.getElementById('contenedorAtaques').style.display = 'none';
    btnReiniciar = document.getElementById('reiniciar').style.display = 'flex';
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
    const robernik = document.getElementById('robernik');
    const petserkerJugador = document.getElementById('PetserkerJugador');
    const nombrePetserkerjugador = document.getElementById('nombrePetserkerJugador');

    if (cropo.checked) {
        nombrePetserkerjugador.innerHTML = listaPetserkers(0);
        petserkerJugador.style.backgroundImage = `url('./Petserkers/${listaPetserkers(0)}.png')`;
        estadoSeleccionPetserker = true;
    }
    else if (lunetai.checked) {
        nombrePetserkerjugador.innerHTML = listaPetserkers(1);
        petserkerJugador.style.backgroundImage = `url('./Petserkers/${listaPetserkers(1)}.png')`;
        estadoSeleccionPetserker = true;
    }
    else if (plichustan.checked) {
        nombrePetserkerjugador.innerHTML = listaPetserkers(2);
        petserkerJugador.style.backgroundImage = `url('./Petserkers/${listaPetserkers(2)}.png')`;
        estadoSeleccionPetserker = true;
    }
    else if (floki.checked) {
        nombrePetserkerjugador.innerHTML = listaPetserkers(3);
        petserkerJugador.style.backgroundImage = `url('./Petserkers/${listaPetserkers(3)}.png')`;
        estadoSeleccionPetserker = true;
    }
    else if (yinyin.checked) {
        nombrePetserkerjugador.innerHTML = listaPetserkers(4);
        petserkerJugador.style.backgroundImage = `url('./Petserkers/${listaPetserkers(4)}.png')`;
        estadoSeleccionPetserker = true;
    }
    else if (robernik.checked) {
        nombrePetserkerjugador.innerHTML = listaPetserkers(5);
        petserkerJugador.style.backgroundImage = `url('./Petserkers/${listaPetserkers(5)}.png')`;
        estadoSeleccionPetserker = true;
    } else {
        return (
            estadoSeleccionPetserker = false,
            alert('Por favor selecciona un petserker 🐉')
        );
    };
    sectionSeleccionAtaque = document.getElementById('sleccion-ataque').style.display = 'flex';
    sectionSeleccionPetserker = document.getElementById('seleccion-Petserker').style.display = 'none';
    seleccionPetserkerEnemigo()
};

function seleccionPetserkerEnemigo() {
    const petserkerEnemiga = document.getElementById('PetserkerEnemiga');
    const nombrePetserkerEnemigo = document.getElementById('nombrePetserkerEnemigo');
    let petserkerAleatorio = aleatorio(6, 1)
    if (petserkerAleatorio == 6) {
        petserkerAleatorio = 0;
        nombrePetserkerEnemigo.innerHTML = listaPetserkers(petserkerAleatorio);
        petserkerEnemiga.style.backgroundImage = `url('./Petserkers/${listaPetserkers(petserkerAleatorio)}.png')`;
    } else {
        nombrePetserkerEnemigo.innerHTML = listaPetserkers(petserkerAleatorio);
        petserkerEnemiga.style.backgroundImage = `url('./Petserkers/${listaPetserkers(petserkerAleatorio)}.png')`;
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
/*         crearMensaje(listaMensajes(0)); */
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
        if (vidasEnemigo == 2) {
            spanVidasEnemigo.style.width = "66%";
            spanVidasEnemigo.style.transition = "5s";
        } else if (vidasEnemigo == 1) {
            spanVidasEnemigo.style.width = "33%";
            spanVidasEnemigo.style.transition = "4s";
        } else if (vidasEnemigo == 0) {
            spanVidasEnemigo.style.width = "1%";
            spanVidasEnemigo.style.transition = "3s";
        }
    } else if (resultadoCombate == listaResultadoCombate(1)) {
        vidasJugador = vidasJugador - 1;
        if (vidasJugador == 2) {
            spanVidasJugador.style.width = "66%";
            spanVidasJugador.style.transition = "5s";
        } else if (vidasJugador == 1) {
            spanVidasJugador.style.width = "33%";
            spanVidasJugador.style.transition = "4s";
        } else if (vidasJugador == 0) {
            spanVidasJugador.style.width = "1%";
            spanVidasJugador.style.transition = "3s";
        }
    }else{
            // Cambiar al primer color
    spanVidasEnemigo.style.backgroundColor = 'rgba(86, 46, 245, 0.8)';
    spanVidasEnemigo.style.transition = "background-color 3s";
    spanVidasJugador.style.backgroundColor = 'rgba(86, 46, 245, 0.8)';
    spanVidasJugador.style.transition = "background-color 3s";

    // Esperar 3 segundos antes de cambiar de nuevo al color original
    setTimeout(function () {
        spanVidasEnemigo.style.backgroundColor = 'rgba(245, 56, 46, 0.7)';
        spanVidasEnemigo.style.transition = "background-color 3s";    
        spanVidasJugador.style.backgroundColor = 'rgba(46, 245, 73, 0.5)';
        spanVidasJugador.style.transition = "background-color 3s";
    }, 1000);
    }

};

function revisarVidas() {
    if (vidasEnemigo == 0) {
        ImprimirAtaque(listaMensajes(2));
        desabilidarBotones();
    } else if (vidasJugador == 0) {
        ImprimirAtaque(listaMensajes(3));
        desabilidarBotones();
    }
};

//Crear mensajes
function ImprimirAtaque(mensaje) {
    let powerJugador = document.getElementById('powerJugador');
    let powerEnemigo = document.getElementById('powerEnemigo');

};

window.addEventListener('load', iniciarJuego);//evento para escuchar cuando el navegador esta cargado al 100%
