//variables globales
let ataqueJugador;
let ataqueEnemigo;

//Arrays
function listaPetserkers(num) {
    var petserkers = ['cropo', 'lunetai', 'plichustan', 'floki', 'yinyin', 'minihen'];
    return petserkers[num];
};
function listaAtaquesPetserkers(numListaAtaques) {
    let ataques = ['FUEGO', 'AGUA', 'TIERRA', 'VIENTO'];
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
    }
    else if (lunetai.checked) {
        petserkerJugador.innerHTML = listaPetserkers(1);
    }
    else if (plichustan.checked) {
        petserkerJugador.innerHTML = listaPetserkers(2);
    }
    else if (floki.checked) {
        petserkerJugador.innerHTML = listaPetserkers(3);
    }
    else if (yinyin.checked) {
        petserkerJugador.innerHTML = listaPetserkers(4);
    }
    else if (minihen.checked) {
        petserkerJugador.innerHTML = listaPetserkers(5);
    } else {
        return (
            estado = false,
            alert('selecciona un petserker 🐉')
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
    function ataqueAleatorioPetserkerEnemiga(){
        ataqueAleatorio = aleatorio(4,1);
        if (ataqueAleatorio == 4){
            return ataqueEnemigo = listaAtaquesPetserkers(0)
        };
        return ataqueEnemigo = listaAtaquesPetserkers(ataqueAleatorio);
    };




window.addEventListener('load', iniciarJuego);//evento para escuchar cuando el navegador esta cargado al 100%
