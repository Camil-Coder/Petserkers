//variables globales
let ataqueJugador;
let ataqueEnemigo;
let estadoSeleccionPetserker;
let resultadoCombate;
let vidasJugador = 3;
let vidasEnemigo = 3;
//Arrays
function listaArenas(num) {
    var arenas = ['arena', 'arena1', 'arena2', 'arena3', 'arena4', 'arena5', 'arena6', 'arena7',];
    return arenas[num];
}
function listaPetserkers(num) {
    var petserkers = ['cropo', 'lunetai', 'plichustan', 'floki', 'yinyin', 'robernik'];
    return petserkers[num];
};
function listaAtaquesPetserkers(numListaAtaques) {
    let ataques = ['atcFuego', 'atcAgua', 'atcTierra', 'atcViento'];
    return ataques[numListaAtaques];
}
function listaResultadoCombate(numListaCombate) {
    let resultado = ['Ganar', 'Empatar', 'Perder'];
    return resultado[numListaCombate];
}
function listaImagenes(numListaMensajes) {
    let mensajes = ['cielo', 'ades'];
    return mensajes[numListaMensajes];
}
//ataques enemigo
function seleccionPetserkerEnemigo() {
    const petserkerEnemiga = document.getElementById('PetserkerEnemiga');
    const nombrePetserkerEnemigo = document.getElementById('nombrePetserkerEnemigo');
    let petserkerAleatorio = aleatorio(6, 1)
    if (petserkerAleatorio == 6) {
        petserkerAleatorio = 0;
        nombrePetserkerEnemigo.innerHTML = listaPetserkers(petserkerAleatorio);
        petserkerEnemiga.style.backgroundImage = `url('./Petserkers/${listaPetserkers(petserkerAleatorio)}.webp')`;
    } else {
        nombrePetserkerEnemigo.innerHTML = listaPetserkers(petserkerAleatorio);
        petserkerEnemiga.style.backgroundImage = `url('./Petserkers/${listaPetserkers(petserkerAleatorio)}.webp')`;
    }
};
//Aleatoriedad
function aleatorio(max, min) {
    return resultado = Math.floor(Math.random() * (max - min + 1) + 1);
}
//reiniciar juego 
function reiniciarJuego() {
    location.reload();
}
//deshabilitar imagen arena
function desactivarArena() {
    imageInicioJuego = document.getElementById('inicioJuego').style.display = 'none';
    contenedorPowers = document.getElementById('containerPowers').style.display = "flex";
    monstrarAtaque();
    revisarVidas();
}
//mostrar en pantall imagenes de ataques
function monstrarAtaque() {
    contenedorAtaqueJugador = document.getElementById('poderJugador').style.backgroundImage = `url('./Petserkers/${ataqueJugador}.webp')`;
    contenedorAtaqueEnemigo = document.getElementById('poderEnemigo').style.backgroundImage = `url('./Petserkers/${ataqueEnemigo}.webp')`;
}
//deshabilitar botones
function desabilidarBotones() {
    btnsAtaques = document.getElementById('contenedorAtaques').style.display = 'none';
    btnReiniciar = document.getElementById('reiniciar').style.display = 'flex';
    imageInicioJuego = document.getElementById('inicioJuego').style.display = 'none';
}
/* funcion golpe critico*/
function golpeCritico() {
    mensajeAccion = document.getElementById('mensajeAccion').style.display = 'block';
    mensajeAccion = document.getElementById('mensajeAccion').innerHTML = 'Golpe Critico';
    mensajeAccion = document.getElementById('contenedor-subtitulo').style.backgroundColor = 'rgb(7, 81, 3,0.5)';
    mensajeAccion = document.getElementById('contenedor-subtitulo').style.width = '100%';
    mensajeAccion = document.getElementById('contenedor-subtitulo').style.textAlign = 'center';
}
/*funcion de contucion */
function contuzion() {
    mensajeAccion = document.getElementById('mensajeAccion').style.display = 'block';
    mensajeAccion = document.getElementById('mensajeAccion').innerHTML = 'Estas Herido';
    mensajeAccion = document.getElementById('contenedor-subtitulo').style.backgroundColor = 'rgba(81, 3, 3, 0.5)';
    mensajeAccion = document.getElementById('contenedor-subtitulo').style.width = '100%';
    mensajeAccion = document.getElementById('contenedor-subtitulo').style.textAlign = 'center';
}
/*funcion de empate */
function empate() {
    mensajeAccion = document.getElementById('mensajeAccion').style.display = 'block';
    mensajeAccion = document.getElementById('mensajeAccion').innerHTML = 'combate igualado';
    mensajeAccion = document.getElementById('contenedor-subtitulo').style.backgroundColor = 'rgba(3, 47, 81, 0.5)';
    mensajeAccion = document.getElementById('contenedor-subtitulo').style.width = '100%';
    mensajeAccion = document.getElementById('contenedor-subtitulo').style.textAlign = 'center';
}
//************************************************************************/
function iniciarJuego() {
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
        petserkerJugador.style.backgroundImage = `url('./Petserkers/${listaPetserkers(0)}.webp')`;
        estadoSeleccionPetserker = true;
    }
    else if (lunetai.checked) {
        nombrePetserkerjugador.innerHTML = listaPetserkers(1);
        petserkerJugador.style.backgroundImage = `url('./Petserkers/${listaPetserkers(1)}.webp')`;
        estadoSeleccionPetserker = true;
    }
    else if (plichustan.checked) {
        nombrePetserkerjugador.innerHTML = listaPetserkers(2);
        petserkerJugador.style.backgroundImage = `url('./Petserkers/${listaPetserkers(2)}.webp')`;
        estadoSeleccionPetserker = true;
    }
    else if (floki.checked) {
        nombrePetserkerjugador.innerHTML = listaPetserkers(3);
        petserkerJugador.style.backgroundImage = `url('./Petserkers/${listaPetserkers(3)}.webp')`;
        estadoSeleccionPetserker = true;
    }
    else if (yinyin.checked) {
        nombrePetserkerjugador.innerHTML = listaPetserkers(4);
        petserkerJugador.style.backgroundImage = `url('./Petserkers/${listaPetserkers(4)}.webp')`;
        estadoSeleccionPetserker = true;
    }
    else if (robernik.checked) {
        nombrePetserkerjugador.innerHTML = listaPetserkers(5);
        petserkerJugador.style.backgroundImage = `url('./Petserkers/${listaPetserkers(5)}.webp')`;
        estadoSeleccionPetserker = true;
    } else {
        return (
            estadoSeleccionPetserker = false,
            alert('Por favor selecciona un petserker 🐉')
        );
    };

    sectionSeleccionAtaque = document.getElementById('sleccion-ataque').style.display = 'flex';
    sectionSeleccionPet = document.getElementById('seleccion-Petserker').style.display = 'none';
    imageInicioJuego = document.getElementById('inicioJuego').style.display = 'flex';
    imageInicioJuego = document.getElementById('inicioJuego').style.backgroundImage = `url(./Petserkers/${listaArenas(aleatorio(7, 1))}.webp)`;
    seleccionPetserkerEnemigo()
};

//Ataque jugador y enemigo
function ataqueFuego() {
    ataqueJugador = listaAtaquesPetserkers(0);
    ataqueAleatorioPetserkerEnemiga();
    desactivarArena();
};
function ataqueAgua() {
    ataqueJugador = listaAtaquesPetserkers(1);
    ataqueAleatorioPetserkerEnemiga();
    desactivarArena();
};
function ataqueTierra() {
    ataqueJugador = listaAtaquesPetserkers(2);
    ataqueAleatorioPetserkerEnemiga();
    desactivarArena();
};
function ataqueViento() {
    ataqueJugador = listaAtaquesPetserkers(3);
    ataqueAleatorioPetserkerEnemiga();
    desactivarArena();
};
function ataqueAleatorioPetserkerEnemiga() {
    ataqueAleatorio = aleatorio(4, 1);
    if (ataqueAleatorio == 4) {
        ataqueEnemigo = listaAtaquesPetserkers(0)
    } else {
        ataqueEnemigo = listaAtaquesPetserkers(ataqueAleatorio);
    }
    resultadoChoqueAtaques();
    descuentoDeVidas();
};
function resultadoChoqueAtaques() {
    if (ataqueJugador == listaAtaquesPetserkers(0) && ataqueEnemigo == listaAtaquesPetserkers(3) ||
        ataqueJugador == listaAtaquesPetserkers(1) && ataqueEnemigo == listaAtaquesPetserkers(0) ||
        ataqueJugador == listaAtaquesPetserkers(2) && ataqueEnemigo == listaAtaquesPetserkers(1) ||
        ataqueJugador == listaAtaquesPetserkers(3) && ataqueEnemigo == listaAtaquesPetserkers(2)) {
        //ganar
        golpeCritico();
        return resultadoCombate = listaResultadoCombate(0);
    } else if (ataqueJugador == ataqueEnemigo ||
        ataqueJugador == listaAtaquesPetserkers(0) && ataqueEnemigo == listaAtaquesPetserkers(2) ||
        ataqueJugador == listaAtaquesPetserkers(1) && ataqueEnemigo == listaAtaquesPetserkers(3) ||
        ataqueJugador == listaAtaquesPetserkers(2) && ataqueEnemigo == listaAtaquesPetserkers(0) ||
        ataqueJugador == listaAtaquesPetserkers(3) && ataqueEnemigo == listaAtaquesPetserkers(1)) {
        //empatar
        empate();
        return resultadoCombate = listaResultadoCombate(1);
    } else {
        //perder
        contuzion();
        return resultadoCombate = listaResultadoCombate(2);
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
    } else if (resultadoCombate == listaResultadoCombate(2)) {
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
    } else {
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
        desabilidarBotones();
        contenedorPowers = document.getElementById('containerPowers').style.display = "none";
        resultadoGanador = document.getElementById('resultado').style.display = 'flex';
        resultadoGanador = document.getElementById('resultado').style.backgroundImage = `url('./Petserkers/cielo.webp')`;
        mensajeAccion = document.getElementById('mensajeAccion').style.display = 'block';
        mensajeAccion = document.getElementById('mensajeAccion').innerHTML = 'Victoria 🏆';
        mensajeSelelcionAtaques = document.getElementById('mensajeSeleccionAtaque').style.display= 'none';
        contenedorMensajeSelelcionAtaques = document.getElementById('contenedor-mensajeAccion').style.display= 'none';
    } else if (vidasJugador == 0) {
        desabilidarBotones();
        contenedorPowers = document.getElementById('containerPowers').style.display = "none";
        resultadoPerdedor = document.getElementById('resultado').style.display = 'flex';
        resultadoPerdedor = document.getElementById('resultado').style.backgroundImage = `url('./Petserkers/ades.webp')`;
        mensajeAccion = document.getElementById('mensajeAccion').style.display = 'block';
        mensajeAccion = document.getElementById('mensajeAccion').innerHTML = 'Haz perdido 💀';
        mensajeSelelcionAtaques = document.getElementById('mensajeSeleccionAtaque').style.display= 'none';
        contenedorMensajeSelelcionAtaques = document.getElementById('contenedor-mensajeAccion').style.display= 'none';
    }
};


window.addEventListener('load', iniciarJuego);//evento para escuchar cuando el navegador esta cargado al 100%
