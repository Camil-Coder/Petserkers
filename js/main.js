let ataqueJugador;
let ataqueEnemigo;


function iniciarJuego() {
    let btnPetserker = document.getElementById('btn-petserker');
    btnPetserker.addEventListener('click', sleccionarPetserkerJugador);
};

function sleccionarPetserkerJugador() {
    let estado;
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
    seleccionPetserkerEnemigo();
    estado = true;
    if( estado = true){
        ataqueFuego()
    }
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

function aleatorio(max, min) {
    return resultado = Math.floor(Math.random() * (max - min + 1) + 1);
}

function listaPetserkers(num) {
    var petserkers = ['cropo', 'lunetai', 'plichustan', 'floki', 'yinyin', 'minihen'];
    return petserkers[num];
};

/* ataques de petserkers */
function ataqueFuego() {
    ataqueJugador = listaAtaquesPetserkers(0);
    alert(`arremetes con un ataque tipo ${ataqueJugador}`);
    alert(`El petserker enemigo responde con ${listaAtaquesPetserkers(ataquePetserkerEnemiga())}`);
};

function ataqueAgua() {
    ataqueJugador = listaAtaquesPetserkers(1);
    alert(`arremetes con un ataque tipo ${ataqueJugador}`);
    alert(`El petserker enemigo responde con ${listaAtaquesPetserkers(ataquePetserkerEnemiga())}`);
};

function ataqueTierra() {
    ataqueJugador = listaAtaquesPetserkers(2);
    alert(`arremetes con un ataque tipo ${ataqueJugador}`);
    alert(`El petserker enemigo responde con ${listaAtaquesPetserkers(ataquePetserkerEnemiga())}`);
};

function ataqueViento() {
    ataqueJugador = listaAtaquesPetserkers(3);
    alert(`arremetes con un ataque tipo ${ataqueJugador}`);
    alert(`El petserker enemigo responde con ${listaAtaquesPetserkers(ataquePetserkerEnemiga())}`);
};


function listaAtaquesPetserkers(numListaAtaques) {
    let ataques = ['FUEGO','AGUA','TIERRA','VIENTO'];
    return ataques[numListaAtaques];
}


function ataquePetserkerEnemiga() {
    let resultado = aleatorio(4,1);
    if (resultado == 4){
        return resultado = 0;
    }else{
        return resultado;
    }
};

window.addEventListener('load', iniciarJuego);//evento para escuchar cuando el navegador esta cargado al 100%
